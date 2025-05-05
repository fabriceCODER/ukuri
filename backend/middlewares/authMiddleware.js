import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/config.js"; 

// Middleware for verifying JWT token
export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access denied. No valid token provided." });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded?.id) {
      return res.status(403).json({ error: "Invalid token. User ID not found." });
    }

    req.user = decoded; // Attach the decoded user data to the request
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};
