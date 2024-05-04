import express from "express";
import {
  getAllFruits,
  getAllProducts,
  //   getHomeProucts,
  setFruits,
  setGrocery,
} from "../controllers/productController.js";

const router = express.Router();

//routes
// router.get("/", getHomeProucts);
router.get("/getgrocery", getAllProducts);
router.post("/grocery", setGrocery);
router.post("/fruits", setFruits);
router.get("/getfruits", getAllFruits);

export default router;
