import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  withCredentials: true, // Important for cookies/auth
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Add authorization token if it exists
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - maybe redirect to login
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default api;