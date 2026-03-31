//Create REST endpoints:
// POST /api/users with validation and hashed passwords
// GET /api/users with pagination
// PUT /api/users/:id update user
// DELETE /api/users/:id deletion

import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const JWT_SECRET="pravesh"

const app=express();
app.use(express.json());

app.post("/api/users", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      name,
      password: hashedPassword
    });

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/api/users", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .select("-password");

    res.status(200).json({
      page,
      limit,
      users
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});


app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body, // data to update
      {
        new: true, // return updated doc
        runValidators: true
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });

  } catch (err) {
    res.status(500).json({
      message: "Failed to update user"
    });
  }
});