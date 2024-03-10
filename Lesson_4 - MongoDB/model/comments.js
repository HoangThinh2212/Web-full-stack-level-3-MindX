import mongoose from 'mongoose';
import Collections from '../database/collection';
// khởi tạo schema (định nghĩa các field cho các document và kiểu dữ liệu của field đó)
const commentSchema = new mongoose.Schema({
    postId: String,
    content: String,
    authorId: String

});
// định nghĩa model cần truyền với phương thức model và các tham số lần lượt: tên collections, schema của document
const CommentsModel = mongoose.model(Collections.COMMENTS, commentSchema);
export default CommentsModel;