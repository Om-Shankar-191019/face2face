// package imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// routes imports
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
