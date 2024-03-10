import express from "express";
import mongoose from "mongoose";
import UsersModel from "./model/users.js";

mongoose.connect("mongodb://localhost:27017/mindx-fullstack");
const app = express();
app.use(express.json());

app.post("/api/v1/users", async (req, res) => {
  try {
    const { userName, email } = req.body;
    if (!userName) throw new Error("userName is required!");
    if (!email) throw new Error("email is required!");

    // hàm tìm kiếm 1 bản document với điều kiện được truyền vào
    const existedEmail = await UsersModel.findOne({
      email,
    });
    if (existedEmail) throw new Error("Email already exists!");

    const createdUser = await UsersModel.create({
      userName,
      email,
    });
    res.status(201).send({
      data: createdUser,
      message: "Register successful!",
      success: true,
    });
  } catch (error) {
    res.status(403).send({
      message: error.message,
      data: null,
      success: false,
    });
  }
});

app.listen(8080, () => {
  console.log("Server is running!");
});
