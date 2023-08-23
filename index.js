import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

const corsOptions = {
  origin: 'https://memories-client-react.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to memories API");
});

const PORT = process.env.PORT || 5005;
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => {
    console.log(error.message);
  });
