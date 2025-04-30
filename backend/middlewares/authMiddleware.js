import jwt from "jsonwebtoken";

// Ensure the secret is defined
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access denied. No valid token provided." });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token missing." });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded?.id) {
      return res.status(403).json({ error: "Invalid token. User ID not found." });
    }

    req.user = decoded; // Attach to request
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

export default authenticate;
