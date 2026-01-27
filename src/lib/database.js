import mongoose from "mongoose";
import dotenv from "dotenv";
import Identity from "../Models/Identity.js";
import bcrypt from "bcrypt";
 
let cachedConnection = null;

const dbConnect = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      bufferCommands: false, // Disable mongoose buffering
    });
    console.log("Tap-Global 360 DB Connected successfully");
    await createHardcodedUsers();
    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.log("Tap-Global 360 DB  Connection Failed");
    console.error(error);
    throw error; // Re-throw the error so it can be handled by the caller
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