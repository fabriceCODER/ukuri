"use client";

import axios, { AxiosRequestConfig } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Define the generic API response structure
interface ApiResponse<T> {
    data?: T;
    error?: string;
    status: number;
}

// Define response interfaces for authentication
interface LoginResponse {
    user: { id: string; name: string; email: string; role: string };
    token: string;
}

interface RegisterResponse {
    user: { id: string; name: string; email: string; role: string };
    token: string;
}

interface UserResponse {
    id: string;
    name: string;
    email: string;
    role: string;
}

// Axios instance with default configuration
const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Ensures cookies are sent with requests
    headers: {
        "Content-Type": "application/json",
    },
});

// Function to handle API requests with Axios
export async function apiRequest<T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> {
    try {
        const token = localStorage.getItem("token");

        const response = await axiosInstance.request<T>({
            url: endpoint,
            headers: {
                ...(token && { Authorization: `Bearer ${token}` }),
                ...options.headers,
            },
            ...options,
        });

        return { data: response.data, status: response.status };
    } catch (error: any) {
        console.error("API request failed:", error);
        
        if (error.response?.status === 401) {
            // Clear token if unauthorized
            localStorage.removeItem("token");
        }

        return {
            error: error.response?.data?.message || "An error occurred",
            status: error.response?.status || 500,
        };
    }
}

// API Methods
export const api = {
    auth: {
        me: () => apiRequest<UserResponse>("/api/auth/me"),
        login: (email: string, password: string) =>
            apiRequest<LoginResponse>("/api/auth/login", {
                method: "POST",
                data: { email, password },
            }),
        register: (name: string, email: string, password: string) =>
            apiRequest<RegisterResponse>("/api/auth/register", {
                method: "POST",
                data: { name, email, password },
            }),
        logout: () => apiRequest("/api/auth/logout", { method: "POST" }),
        googleLogin: () => apiRequest<{ url: string }>("/api/auth/google"),
        githubLogin: () => apiRequest<{ url: string }>("/api/auth/github"),
        handleOAuthCallback: <T>(provider: string, code: string) =>
            apiRequest<T>(`/api/auth/${provider}/callback`, {
                method: "POST",
                data: { code },
            }),
    },
    articles: {
        getAll: () => apiRequest("/api/articles"),
        getOne: (id: string) => apiRequest(`/api/articles/${id}`),
        create: (data: any) =>
            apiRequest("/api/articles", { method: "POST", data }),
        update: (id: string, data: any) =>
            apiRequest(`/api/articles/${id}`, { method: "PUT", data }),
        delete: (id: string) => apiRequest(`/api/articles/${id}`, { method: "DELETE" }),
        getStats: () => apiRequest("/api/articles/stats"),
    },
    comments: {
        create: (articleId: string, content: string) =>
            apiRequest("/api/comments", { method: "POST", data: { articleId, content } }),
        delete: (id: string) => apiRequest(`/api/comments/${id}`, { method: "DELETE" }),
    },
    likes: {
        toggle: (articleId: string) =>
            apiRequest("/api/likes", { method: "POST", data: { articleId } }),
    },
};
