import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    try {
        // Get the Authorization header
        const authHeader = req.header("Authorization");
        console.log("Authorization Header:", authHeader); // Debugging step

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Access denied. No valid token provided" });
        }

        // Extract the token
        const token = authHeader.split(" ")[1];
        console.log("Extracted Token:", token); // Debugging step

        if (!token) {
            return res.status(401).json({ error: "Access denied. Token missing" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // Debugging step

        // Ensure decoded token has an ID
        if (!decoded.id) {
            return res.status(403).json({ error: "Invalid token: User ID missing" });
        }

        // Attach user details to the request object
        req.user = decoded;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(403).json({ error: "Invalid or expired token" });
    }
};

export default authenticate;
