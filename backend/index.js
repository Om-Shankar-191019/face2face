// package imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// middlewares
app.use(express.json());
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
