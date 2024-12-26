import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Login Controller

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await UserModel.findOne({ username });
    if (!user) {
      res.status(401);
      throw new Error("Invalid credentials");
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401);
      throw new Error("Invalid credentials");
    }

    // Generate a JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || "secret",
      {
        expiresIn: "1h", // Token expiration time
      }
    );

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error); // Log the error
    res.status(500).json({ message: "Something went wrong" });
  }
});
