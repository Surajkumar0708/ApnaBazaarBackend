import { Fruits } from "../models/fruitsModels.js";
import HomeProduct from "../models/homeProductsModel.js";
import Grocery from "../models/productModel.js";

// export const productContorller = () => {};

export const getHomeProducts = async (req, res) => {
  try {
    const homeProducts = await HomeProduct.find({});
    res.status(500).send({
      list: homeProducts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setGrocery = async (req, res, next) => {
  try {
    const grocery = req.body;
    await Grocery.create(grocery);
    return res.status(500).send({
      success: true,
      message: `${grocery.name}Item is successfully saved`,
    });
  } catch (error) {
    console.log("=========== error in setGrocery");
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Grocery.find({});
    res.status(500).send({
      products,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFruits = async (req, res) => {
  try {
    const fruits = req.body;
    await Fruits.create(fruits);
    return res.status(500).send({
      success: true,
      message: `${fruits.name}Item is successfully saved`,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "saving item failed",
    });
  }
};

export const getAllFruits = async (req, res) => {
  try {
    const allFruits = await Fruits.find({});
    res.status(500).send({
      products: allFruits,
    });
  } catch (error) {}
};
