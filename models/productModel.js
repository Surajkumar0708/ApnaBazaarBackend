import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    price: Number,
    image: { type: String, trim: true },
    discountedPrice: Number,
    vendorName: { type: String, trim: true },
  },
  { timestamps: true }
);

const Grocery = mongoose.model("Grocery", productSchema);
export default Grocery;
