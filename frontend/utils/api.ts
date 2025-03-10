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
          getAll: async (token: string) => {
               try {
                    const response = await fetch(`${API_URL}/articles`, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    return handleResponse(response);
               } catch (error) {
                    console.error('Get articles error:', error);
                    throw error;
               }
          },
          getOne: async (id: string, token: string) => {
               try {
                    const response = await fetch(`${API_URL}/articles/${id}`, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    return handleResponse(response);
               } catch (error) {
                    console.error('Get article error:', error);
                    throw error;
               }
          },
          create: async (data: any, token: string) => {
               try {
                    const response = await fetch(`${API_URL}/articles`, {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${token}`,
                         },
                         body: JSON.stringify(data),
                    });
                    return handleResponse(response);
               } catch (error) {
                    console.error('Create article error:', error);
                    throw error;
               }
          },
          update: async (id: string, data: any, token: string) => {
               try {
                    const response = await fetch(`${API_URL}/articles/${id}`, {
                         method: 'PUT',
                         headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${token}`,
                         },
                         body: JSON.stringify(data),
                    });
                    return handleResponse(response);
               } catch (error) {
                    console.error('Update article error:', error);
                    throw error;
               }
          },
          delete: async (id: string, token: string) => {
               try {
                    const response = await fetch(`${API_URL}/articles/${id}`, {
                         method: 'DELETE',
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    return handleResponse(response);
               } catch (error) {
                    console.error('Delete article error:', error);
                    throw error;
               }
          },
          getStats: async (token: string) => {
               try {
                    const response = await fetch(`${API_URL}/articles/stats`, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    return handleResponse(response);
               } catch (error) {
                    console.error('Get article stats error:', error);
                    throw error;
               }
          },
     },
     comments: {
          create: async (articleId: string, content: string, token: string) => {
               try {
                    return await request('/api/comments', {
                         method: 'POST',
                         body: JSON.stringify({ articleId, content }),
                         token,
                    });
               } catch (error) {
                    console.error('Create comment error:', error);
                    throw error;
               }
          },
          delete: async (id: string, token: string) => {
               try {
                    return await request(`/api/comments/${id}`, {
                         method: 'DELETE',
                         token,
                    });
               } catch (error) {
                    console.error('Delete comment error:', error);
                    throw error;
               }
          },
     },
     likes: {
          toggle: async (articleId: string, token: string) => {
               try {
                    return await request('/api/likes', {
                         method: 'POST',
                         body: JSON.stringify({ articleId }),
                         token,
                    });
               } catch (error) {
                    console.error('Toggle like error:', error);
                    throw error;
               }
          },
     },
}; 