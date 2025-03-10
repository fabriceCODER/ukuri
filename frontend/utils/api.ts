const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RequestOptions extends RequestInit {
     token?: string;
}

async function request(endpoint: string, options: RequestOptions = {}) {
     const { token, ...rest } = options;

     const headers = {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
          ...options.headers,
     };

     const response = await fetch(`${API_URL}${endpoint}`, {
          ...rest,
          headers,
          credentials: 'include',
     });

     if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'API request failed');
     }

     return response.json();
}

export const api = {
     auth: {
          login: (email: string, password: string) =>
               request('/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
               }),
          register: (name: string, email: string, password: string) =>
               request('/api/auth/register', {
                    method: 'POST',
                    body: JSON.stringify({ name, email, password }),
               }),
          getProfile: (token: string) =>
               request('/api/auth/profile', { token }),
     },
     articles: {
          getAll: (token: string) =>
               request('/api/articles', { token }),
          getOne: (id: string, token: string) =>
               request(`/api/articles/${id}`, { token }),
          create: (data: any, token: string) =>
               request('/api/articles', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    token,
               }),
          update: (id: string, data: any, token: string) =>
               request(`/api/articles/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    token,
               }),
          delete: (id: string, token: string) =>
               request(`/api/articles/${id}`, {
                    method: 'DELETE',
                    token,
               }),
     },
     comments: {
          create: (articleId: string, content: string, token: string) =>
               request('/api/comments', {
                    method: 'POST',
                    body: JSON.stringify({ articleId, content }),
                    token,
               }),
          delete: (id: string, token: string) =>
               request(`/api/comments/${id}`, {
                    method: 'DELETE',
                    token,
               }),
     },
     likes: {
          toggle: (articleId: string, token: string) =>
               request('/api/likes', {
                    method: 'POST',
                    body: JSON.stringify({ articleId }),
                    token,
               }),
     },
}; 