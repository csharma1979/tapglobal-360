import mongoose from "mongoose";
import dotenv from "dotenv";
import Identity from "../Models/Identity.js";
 
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Tap-Global 360 DB Connected successfully");
    await createHardcodedUsers();
  } catch (error) {
    console.log("Tap-Global 360 DB  Connection Failed");
    console.error(error);
    process.exit(1);
  }
};
 
const createHardcodedUsers = async () => {
  try {
    // Check if the user already exists
    const existingUser = await Identity.findOne({
      email: "support@tapglobal360.com",
    });
    if (existingUser) {
      console.log("User already exists. Skipping hardcoded user creation.");
      return;
    }
 
    const users = [
      {
        firstname: "Tap",
        lastname: "Global360",
        email: "support@tapglobal360.com",
        password: "Rishi@2468", // Store the hashed password
      },
    ];
 
    // Insert the hardcoded user into the collection
    await Identity.insertMany(users);
    console.log("Hardcoded users inserted!");
  } catch (error) {
    console.error("Error inserting users: ", error);
  }
};
 
export default dbConnect;