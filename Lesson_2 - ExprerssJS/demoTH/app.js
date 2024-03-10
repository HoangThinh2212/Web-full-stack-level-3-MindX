import express from "express";
import { users, posts } from "./mock.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());
const PORT = 8080;

// 1. Viết API lấy thông tin của user với id được truyền trên params.
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id === id);
  // kiểm tra tồn tại user hay không
  if (!user) {
    res.status(404).send({
      message: "Không tìm thấy user",
      success: false,
      data: null,
    });
  } else {
    res.status(201).send({
      data: user,
      message: "Tìm user thành công",
      success: true,
    });
  }
});

// 2. Viết API tạo user với các thông tin như trên users, với id là random (uuid), email là duy nhất, phải kiểm tra được trùng email khi tạo user.

app.post("/users", (req, res) => {
  const { email, age, userName } = req.body || {};
  const existedUser = users.find((u) => u.email === email);
  if (existedUser) {
    res.status(500).json({
      msg: "User is existed",
    });
  } else {
    if (age > 0) {
      const id = uuidv4();
      users.push({
        id,
        email,
        age,
        userName,
      });
      res.status(200).json({
        msg: "User is created",
        id,
      });
    } else {
      res.status(500).json({
        msg: "Age is invalid",
      });
    }
  }
});

// 4. Viết API thực hiện tạo bài post với id của user được truyền trên params.
app.post("/posts/:userId", (req, res) => {
  const { content, isPublic } = req.body || {};
  const { userId } = req.params || {};

  const existedUser = users.find((u) => u.id === userId);
  if (!existedUser) {
    res.status;
  }
});
app.listen(PORT, console.log(`Listen on port ${PORT}`));
