import api from './api';
import { Article } from '../types/api';

export const getArticles = async (): Promise<Article[]> => {
  const response = await api.get<Article[]>('/articles');
  return response.data;
};

export const getArticle = async (id: string): Promise<Article> => {
  const response = await api.get<Article>(`/articles/${id}`);
  return response.data;
};

export const createArticle = async (articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>): Promise<Article> => {
  const response = await api.post<Article>('/articles', articleData);
  return response.data;
};