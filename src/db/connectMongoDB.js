import mongoose from "mongoose";
import { env } from "../utils/env.js";

export const connectMongoDB = async () => {
  try {
    const user = env("MONGODB_USER");
    const password = env("MONGODB_PASSWORD");
    const url = env("MONGODB_URL");
    const database = env("MONGODB_DATABASE");

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${database}`
    );

    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to MongoDB", error);
    throw error;
  }
};
