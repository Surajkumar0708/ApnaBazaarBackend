import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("======= db is connected");
  } catch (e) {
    console.log(e);
  }
};
