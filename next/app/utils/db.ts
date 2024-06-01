import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToMongo = async (MONGODB_URI: string | undefined) => {
  
  if (MONGODB_URI) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error("Unable to connect to the database ", err);
    }
  } else {
    console.error("Mongo URL not found");
  }
};
