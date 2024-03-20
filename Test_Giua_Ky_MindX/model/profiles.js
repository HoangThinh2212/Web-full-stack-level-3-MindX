import mongoose from "mongoose";
import Collections from '../database/collection';

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  personalSkills: String,
  hobbies: String,
  personalGoals: String,
});

const Profile = mongoose.model(Collections.PROFILES, profileSchema);
export default Profile;