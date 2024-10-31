import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("CONNECTED");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8800, () => {
  connectDB();
  console.log("SUP");
});
