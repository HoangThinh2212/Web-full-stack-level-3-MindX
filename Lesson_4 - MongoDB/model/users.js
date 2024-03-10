import mongoose from 'mongoose';
import Collections from '../database/collection';
// khởi tạo schema (định nghĩa các field cho các document và kiểu dữ liệu của field đó)
const userSchema = new mongoose.Schema({
    userName: String,
    email: String
});
// định nghĩa model cần truyền với phương thức model và các tham số lần lượt: tên collections, schema của document
const UsersModel = mongoose.model(Collections.USERS, userSchema);
export default UsersModel;