import { useState, useEffect } from "react";
import axios from "axios";

interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "creator"; // Add other roles if necessary
    totalArticles: number;
    totalComments: number;
    totalViews: number;
    totalLikes: number;
}

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("/api/auth/user", { withCredentials: true });

                if (response.data?.user) {
                    setUser(response.data.user);
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Error fetching user data", error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, isAuthenticated, isLoading };
};

export default useAuth;
