import api from './api';
import { AuthResponse, Credentials, RegisterData } from '../types/api';

export const login = async (credentials: Credentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

export const register = async (userData: RegisterData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', userData);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};