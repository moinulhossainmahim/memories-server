import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => {
    console.log(error.message);
  });
