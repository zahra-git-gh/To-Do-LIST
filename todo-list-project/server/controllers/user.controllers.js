const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userModel } = require("../models/user.model");
const { directoryModel } = require("../models/directory.model");
const { todoModel } = require("../models/todo.model");
const { VerifyEmail } = require("../models/verifyEmail.model");
const { emailSend } = require("../utils/sendEmail");

const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.find({ _id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const registerNewUser = async (req, res) => {
  const { password, ...restUserData } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    //sign up user in database
    const user = await userModel.create({
      ...restUserData,
      password: hashPassword,
    });
    //create verified token in database
    //create token for verify email
    user.verified = true;

    await user.save();

    await directoryModel.create({ userId: user._id, name: "Main" });

    // const token = crypto.randomBytes(32).toString("hex");
    // const verifiedEmail = await VerifyEmail.create({ userId: user.id, token });
    // //verification link

    // const verifyUrl = `${process.env.BASE_URL}/user/verify/${user.id}/${verifiedEmail.token}`;
    // const message = `click on the link below \n ${verifyUrl}`;
    // //send veification code to user
    // await emailSend("Verify Email", message, {
    //   email: user.email,
    //   name: user.name,
    // });
    //send response after
    // res
    //   .status(201)
    //   .json({ message: "User registered successfully. Please Verify Email" });
    res.status(201).json({
      message: "User registered successfully. Please Log in into your account",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyUser = async (req, res) => {
  const { userId, token } = req.params;
  try {
    const user = await userModel.findById(userId);
    const userVerify = await VerifyEmail.findOne({ userId });
    if (!user || !userVerify) {
      return res.status(400).json({ error: "Invalid Link" });
    }
    if (token !== userVerify.token) {
      return res.status(400).json({ error: "Invalid Link" });
    }
    user.verified = true;
    await user.save();
    await userVerify.deleteOne();
    const defaultDirectory = await directoryModel.create({
      userId,
      name: "Main",
    });
    res.status(200).send("your email verified successfully ✨");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. This email does not exist" });
    }
    if (!user.verified) {
      return res.status(401).json({
        message: "Authentication failed. This email has not been verified",
      });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "Email or password incorrect",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30m",
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    const newData = req.body;
    const updated = await userModel.findByIdAndUpdate(userId, newData);
    res
      .status(201)
      .json({ msg: "user updated", data: { ...updated._doc, ...newData } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteAllDataOfOneUser = async (req, res) => {
  try {
    const userId = req.userId;
    const deleteTodos = await todoModel.deleteMany({ userId });
    const deleteDirectories = await directoryModel.deleteMany({
      userId,
      name: { $ne: "Main" },
    });
    res.status(200).json({ msg: "data deleted!!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  registerNewUser,
  verifyUser,
  loginUser,
  updateUser,
  deleteAllDataOfOneUser,
};
