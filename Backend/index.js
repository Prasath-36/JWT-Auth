import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";


// Initialize dotenv
dotenv.config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Example Express route to fetch books (assuming a "Book" model is present)

  