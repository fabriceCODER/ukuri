import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Send cookies if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token automatically if available
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Define a generic response type
interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// Define user-related response types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

interface RegisterResponse {
  user: User;
  token: string;
}

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

// Full API object
export const api = {
  auth: {
    me: () => apiRequest<User>('/api/auth/me', 'GET'),
    login: (email: string, password: string) =>
      apiRequest<LoginResponse>('/api/auth/login', 'POST', { email, password }),
    register: (name: string, email: string, password: string) =>
      apiRequest<RegisterResponse>('/api/auth/register', 'POST', { name, email, password }),
    logout: () => apiRequest('/api/auth/logout', 'POST'),
    googleLogin: () => apiRequest<{ url: string }>('/api/auth/google', 'GET'),
    githubLogin: () => apiRequest<{ url: string }>('/api/auth/github', 'GET'),
    handleOAuthCallback: <T>(provider: string, code: string) =>
      apiRequest<T>(`/api/auth/${provider}/callback`, 'POST', { code }),
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
    create: (articleId: string, content: string) =>
      apiRequest('/api/comments', 'POST', { articleId, content }),
    delete: (id: string) => apiRequest(`/api/comments/${id}`, 'DELETE'),
  },
  likes: {
    toggle: (articleId: string) => apiRequest('/api/likes', 'POST', { articleId }),
  },
};
