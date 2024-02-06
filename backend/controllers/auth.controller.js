import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
  try {
    const {
      fullName,
      username,
      email,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exist.");
    }

    if (password !== confirmPassword) {
      throw new Error("Password and Confirm Password does not match");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      username,
      email,
      password: hashPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      generateToken(newUser._id, res);
    }
    res
      .status(201)
      .json({
        _id: newUser._id,
        fullName,
        username,
        email,
        gender,
        profilePic,
      });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {};

export const logout = async (req, res, next) => {
  res.send("logout");
};
