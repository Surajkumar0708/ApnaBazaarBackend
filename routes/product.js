import express from "express";
import {
  getAllFruits,
  getAllProducts,
  setFruits,
  setGrocery,
} from "../controllers/productController.js";

const router = express.Router();

//routes
router.get("/getgrocery", getAllProducts);
router.post("/grocery", setGrocery);
router.post("/fruits", setFruits);
router.get("/getfruits", getAllFruits);

export default router;
