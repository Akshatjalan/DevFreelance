import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5); //used hash library to encrypt password
    const newUser = new User({
      ...req.body,
      password: hash,
    }); //passing whole body(username, email etc.. and encrypted password)

    await newUser.save(); //save is mongodb command
    res.status(201).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username }); //using mongodb findone function to find user

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Incorrect username or password!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc; //user contains a lot of extra data .doc contains the actual user data
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "none", 
        secure: true,  
      })
      .status(200)
      .send({ ...info, token }); // Send token in response body
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
