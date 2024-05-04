import mongoose from "mongoose";

const fruitsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    price: { type: Number },
    image: { type: String, trim: true },
    discountedPrice: { type: Number },
    vendorName: { type: String, trim: true },
  },
  { timestamps: true }
);

export const Fruits = mongoose.model("Fruits", fruitsSchema);

export default Fruits;
