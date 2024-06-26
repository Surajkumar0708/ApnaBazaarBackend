import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.js";
import { getHomeProducts } from "./controllers/productController.js";

// Dot Env
dotenv.config();

connectDB();

//REST OBJECT
const app = express();

//MIddlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", productRouter);
app.use("/", getHomeProducts);

//PORT
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log("======= server is running");
});
