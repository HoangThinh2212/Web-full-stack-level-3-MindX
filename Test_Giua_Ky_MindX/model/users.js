import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  fullName: String,
  dateOfBirth: String,
  placeOfBirth: String,
  nationality: String,
  passwordHashed: String, // Hashed password
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
