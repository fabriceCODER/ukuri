const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface ApiResponse<T> {
     data?: T;
     error?: string;
     status: number;
}

export async function apiRequest<T>(
     endpoint: string,
     options: RequestInit = {}
): Promise<ApiResponse<T>> {
     try {
          const token = localStorage.getItem('token');
          const headers = {
               'Content-Type': 'application/json',
               ...(token && { Authorization: `Bearer ${token}` }),
               ...options.headers,
          };

          const response = await fetch(`${API_URL}${endpoint}`, {
               ...options,
               headers,
          });

          const data = await response.json();

          if (!response.ok) {
               return {
                    error: data.message || 'An error occurred',
                    status: response.status,
               };
          }

          return {
               data,
               status: response.status,
          };
     } catch (error) {
          console.error('API request failed:', error);
          return {
               error: 'Failed to connect to the server',
               status: 500,
          };
     }
}

export const api = {
     auth: {
          me: () => apiRequest('/api/auth/me'),
          login: (email: string, password: string) =>
               apiRequest('/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
               }),
          register: (name: string, email: string, password: string) =>
               apiRequest('/api/auth/register', {
                    method: 'POST',
                    body: JSON.stringify({ name, email, password }),
               }),
          logout: () =>
               apiRequest('/api/auth/logout', {
                    method: 'POST',
               }),
     },
     articles: {
          getAll: () => apiRequest('/api/articles'),
          getOne: (id: string) => apiRequest(`/api/articles/${id}`),
          create: (data: any) =>
               apiRequest('/api/articles', {
                    method: 'POST',
                    body: JSON.stringify(data),
               }),
          update: (id: string, data: any) =>
               apiRequest(`/api/articles/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
               }),
          delete: (id: string) =>
               apiRequest(`/api/articles/${id}`, {
                    method: 'DELETE',
               }),
          getStats: () => apiRequest('/api/articles/stats'),
     },
     comments: {
          create: (articleId: string, content: string) =>
               apiRequest('/api/comments', {
                    method: 'POST',
                    body: JSON.stringify({ articleId, content }),
               }),
          delete: (id: string) =>
               apiRequest(`/api/comments/${id}`, {
                    method: 'DELETE',
               }),
     },
     likes: {
          toggle: (articleId: string) =>
               apiRequest('/api/likes', {
                    method: 'POST',
                    body: JSON.stringify({ articleId }),
               }),
     },
}; 