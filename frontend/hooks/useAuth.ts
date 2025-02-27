import { useState, useEffect } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Assume you have a function that checks if the user is logged in and fetches user data
        const fetchUser = async () => {
            const response = await fetch("/api/auth/user");
            const data = await response.json();
            if (data?.user) {
                setUser(data.user);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };

        fetchUser();
    }, []);

    return { user, isAuthenticated };
};

export default useAuth; // Default export
