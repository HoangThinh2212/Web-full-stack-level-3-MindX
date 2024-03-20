import mongoose from "mongoose";
import Collections from '../database/collection';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  fullName: String,
  dateOfBirth: String,
  placeOfBirth: String,
  nationality: String,
  passwordHashed: String, // Hashed password
});

const UsersModel = mongoose.model(Collections.USERS, userSchema);
export default UsersModel;