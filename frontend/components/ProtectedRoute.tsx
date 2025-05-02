"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Spinner from "./common/Spinner";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: ("admin" | "creator")[]; 
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login");
      } else if (allowedRoles && !allowedRoles.includes(user?.role as any)) {
        router.push("/unauthorized"); // Create this page if needed
      }
    }
  }, [isAuthenticated, isLoading, user, allowedRoles, router]);

  if (isLoading || !isAuthenticated) {
    return <Spinner />
  }

  return <>{children}</>;
};

export default ProtectedRoute;
