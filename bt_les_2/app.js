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
  // kiểm tra có tồn tại user hay không
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
      // Create random id
      const id = uuidv4();
      users.push({
        id,
        email,
        age,
        userName,
      });
      res.status(201).json({
        msg: "User is created successfully",
        data: id,
      });
    } else {
      res.status(500).json({
        msg: "Age is invalid",
      });
    }
  }
});

// 3. Viết API lấy ra các bài post của user được truyền userId trên params.
app.get("/posts/:userId", (req, res) => {
  const { userId } = req.params;

  // Dùng hàm filter để lọc ra tất cả các bài post của user có userId tương ứng
  const post = posts.filter((item) => item.userId === userId);
  // Kiểm tra có tồn tại user với userId hay không
  if (!post) {
    res.status(404).send({
      msg: "Không tìm thấy user tương ứng",
      success: false,
      data: null,
    });
  } else {
    res.status(201).send({
      msg: "Tìm thấy user tương ứng",
      success: true,
      data: post,
    });
  }
});

// 4. Viết API thực hiện tạo bài post với id của user được truyền trên params.
app.post("/posts/:userId", (req, res) => {
  const { content, isPublic } = req.body || {};
  const { userId } = req.params || {};

  const existedUser = users.find((u) => u.id === userId);
  if (!existedUser) {
    res.status(404).json({
      msg: "User is not found",
    });
  } else {
    const id = uuidv4();
    posts.push({
      content,
      isPublic: Boolean(isPublic),
      createdAt: new Date(),
      postId: id,
      userId,
    });

    res.status(201).json({
      msg: "Post is created successfully",
      id,
      data: posts,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
