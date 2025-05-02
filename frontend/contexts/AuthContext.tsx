"use client";

import Cookies from "js-cookie";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { api } from "@/lib/api";
import { setAuthToken } from "@/lib/axiosInstance";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "creator";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");

      if (token) {
        setAuthToken(token);
        try {
          const res = await api.auth.me();
          if (res.data) {
            const backendUser = res.data;
            const safeUser: User = {
              id: backendUser.id,
              name: backendUser.name,
              email: backendUser.email,
              role: backendUser.role === "admin" ? "admin" : "creator",
            };
            setUser(safeUser);
            setIsAuthenticated(true);
          } else {
            throw new Error("Invalid user data");
          }
        } catch {
          Cookies.remove("token");
          setUser(null);
          setIsAuthenticated(false);
        }
      }

      setIsLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.auth.login(email, password);
      if (!res.data) throw new Error(res.error || "Login failed");

      const { token, user: backendUser } = res.data;
      Cookies.set("token", token);
      setAuthToken(token);

      const safeUser: User = {
        id: backendUser.id,
        name: backendUser.name,
        email: backendUser.email,
        role: backendUser.role === "admin" ? "admin" : "creator",
      };

      setUser(safeUser);
      setIsAuthenticated(true);
    } catch (err: any) {
      throw new Error(err.message || "Login failed");
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    try {
      const res = await api.auth.register(name, email, password);
      if (!res.data) throw new Error(res.error || "Registration failed");

      const { token, user: backendUser } = res.data;
      Cookies.set("token", token);
      setAuthToken(token);

      const safeUser: User = {
        id: backendUser.id,
        name: backendUser.name,
        email: backendUser.email,
        role: backendUser.role === "admin" ? "admin" : "creator",
      };

      setUser(safeUser);
      setIsAuthenticated(true);
    } catch (err: any) {
      throw new Error(err.message || "Registration failed");
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    setAuthToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
