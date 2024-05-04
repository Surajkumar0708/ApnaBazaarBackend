import mongoose from "mongoose";

const homeProductSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  place: {
    type: String,
    trim: true,
  },
});

const HomeProduct = mongoose.model("HomeProduct", homeProductSchema);

export default HomeProduct;
