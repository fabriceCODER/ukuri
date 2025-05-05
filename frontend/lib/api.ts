import axios from 'axios';

// Set base API URL from environment or default to localhost
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Create Axios instance
export const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Include cookies if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to every request if available in localStorage
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Define generic API response
interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// Authenticated user type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Response types
interface LoginResponse {
  user: User;
  token: string;
}

interface RegisterResponse {
  user: User;
  token: string;
}

// Generic API call
export async function apiRequest<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any
): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.request<T>({
      url: endpoint,
      method,
      data: body,
    });

    return { data: response.data, status: response.status };
  } catch (error: any) {
    console.error('API request failed:', error);

    const errorMessage =
      error.response?.data?.message || error.message || 'An unknown error occurred';

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }

    return {
      error: errorMessage,
      status: error.response?.status || 500,
    };
  }
}

// Main API object with defined endpoints
export const api = {
  auth: {
    me: () => apiRequest<User>('/api/auth/me', 'GET'),
    login: async (email: string, password: string) => {
      const response = await apiRequest<LoginResponse>('/api/auth/login', 'POST', {
        email,
        password,
      });
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token); // Store token after login
      }
      return response;
    },
    register: async (name: string, email: string, password: string) => {
      const response = await apiRequest<RegisterResponse>('/api/auth/register', 'POST', {
        name,
        email,
        password,
      });
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token); // Store token after registration
      }
      return response;
    },
    logout: () => {
      localStorage.removeItem('token'); // Clear token
      return apiRequest('/api/auth/logout', 'POST');
    },
  },

  articles: {
    getAll: () => apiRequest('/api/articles', 'GET'),
    getOne: (id: string) => apiRequest(`/api/articles/${id}`, 'GET'),
    create: (data: any) => apiRequest('/api/articles', 'POST', data),
    update: (id: string, data: any) => apiRequest(`/api/articles/${id}`, 'PUT', data),
    delete: (id: string) => apiRequest(`/api/articles/${id}`, 'DELETE'),
    getStats: () => apiRequest('/api/articles/stats', 'GET'),
  },

  comments: {
    getAll: (articleId: string) =>
      apiRequest<Comment[]>(`/api/comments/${articleId}`, 'GET'),
    create: (articleId: string, content: string) =>
      apiRequest<Comment>('/api/comments', 'POST', { articleId, content }),
    delete: (id: string) => apiRequest(`/api/comments/${id}`, 'DELETE'),
  },
  

  likes: {
    toggle: (articleId: string) => apiRequest('/api/likes', 'POST', { articleId }),
  },

  users: {
    getAll: () => apiRequest('/api/users', 'GET'), 
  },
};
