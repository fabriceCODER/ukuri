import app  from "./app.js"
import { PrismaClient } from "@prisma/client";
import "dotenv/config";


const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    try {
        await prisma.$connect();
        console.log("🟢 Database connected");
    } catch (error) {
        console.error("🔴 Database connection failed:", error);
    }
});
