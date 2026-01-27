import Identity from "../Models/Identity.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (email, password) => {
  try {
    console.log("Checking for user:", email);
    // Find the user by email
    const user = await Identity.findOne({ email });
    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { success: false, message: "Invalid email or password" };
    }

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "your_jwt_secret",
      {
        expiresIn: "5h", // Token expiration time
      }
    );
    
    return { success: true, token, user: { id: user._id, email: user.email, firstname: user.firstname, lastname: user.lastname } };
  } catch (error) {
    console.error("Error in loginUser:", error);
    return { success: false, message: "Server error" };
  }
};
