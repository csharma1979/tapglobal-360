import mongoose from "mongoose";
import dotenv from "dotenv";
import Identity from "../Models/Identity.js";
import bcrypt from "bcrypt";
 
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      bufferCommands: false, // Disable mongoose buffering
    });
    console.log("Tap-Global 360 DB Connected successfully");
    await createHardcodedUsers();
  } catch (error) {
    console.log("Tap-Global 360 DB  Connection Failed");
    console.error(error);
    // Don't exit the process, just log the error
    // process.exit(1);
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
 
    // Hash the password before storing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("Rishi@2468", saltRounds);
 
    const users = [
      {
        firstname: "Tap",
        lastname: "Global360",
        email: "support@tapglobal360.com",
        password: hashedPassword, // Store the hashed password
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