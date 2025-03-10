const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RequestOptions extends RequestInit {
     token?: string;
}

async function request(endpoint: string, options: RequestOptions = {}) {
     try {
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
               try {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'API request failed');
               } catch (jsonError) {
                    throw new Error(`Request failed with status ${response.status}`);
               }
          }

          try {
               return await response.json();
          } catch (jsonError) {
               console.error('Error parsing JSON response:', jsonError);
               throw new Error('Invalid response format from server');
          }
     } catch (error) {
          console.error('API request error:', error);
          if (error instanceof Error) {
               throw error;
          }
          throw new Error('An unexpected error occurred');
     }
}

export const api = {
     auth: {
          login: async (email: string, password: string) => {
               try {
                    return await request('/api/auth/login', {
                         method: 'POST',
                         body: JSON.stringify({ email, password }),
                    });
               } catch (error) {
                    console.error('Login error:', error);
                    throw error;
               }
          },
          register: async (name: string, email: string, password: string) => {
               try {
                    return await request('/api/auth/register', {
                         method: 'POST',
                         body: JSON.stringify({ name, email, password }),
                    });
               } catch (error) {
                    console.error('Registration error:', error);
                    throw error;
               }
          },
          getProfile: async (token: string) => {
               try {
                    return await request('/api/auth/profile', { token });
               } catch (error) {
                    console.error('Get profile error:', error);
                    throw error;
               }
          },
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