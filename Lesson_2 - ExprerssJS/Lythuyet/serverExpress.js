const express = require("express");
const app = express();
const PORT = 3000;

// Thay vì phải tích hợp url module và http module để đọc hiểu http request query string . H chỉ cần dùng req.query là đọc hiểu dc, ExpressJS khác với Nodejs thông thường ở điểm đọc hiểu này.

/*  LÝ THUYẾT BÀI GIẢNG
// Đọc và load HTTP BODY dưới định dạng content-type là application/json

// Express tạo sẵn các hàm để DEFINE ROUTE MAP với động từ GET PUT POST DELETE
app.get("/", function (req, res) {
    // Đọc và load HTTP BODY dưới định dạng content-type là application/json
    const httpRequestBody = req.body;

  res.send("Hello World");
});

app.put("/users", function (req, res) {
  res.send("Hello World");
});
*/

/* Bài tập mẫu */
const listStudent = [
  {
    id: 1,
    userName: "Amily",
    email: "amily@gmail.com",
    address: "Ha Noi",
    age: 21,
  },
  {
    id: 2,
    userName: "Billy",
    email: "billy@gmail.com",
    address: "Da Nang",
    age: 22,
  },
  {
    id: 3,
    userName: "Charlie",
    email: "charlie@gmail.com",
    address: "Phu Quoc",
    age: 33,
  },
  {
    id: 4,
    userName: "Danny",
    email: "danny@gmail.com",
    address: "Da Lat",
    age: 59,
  },
  {
    id: 5,
    userName: "Elizabeth",
    email: "elizabeth@gmail.com",
    address: "Hue",
    age: 50,
  },
  {
    id: 6,
    userName: "Frank",
    email: "@gmail.com",
    address: "Kon Tum",
    age: 50,
  },
  {
    id: 7,
    userName: "Geogre",
    email: "geogre@gmail.com",
    address: "HCM",
    age: 70,
  },
  {
    id: 8,
    userName: "Hawk",
    email: "hawk@gmail.com",
    address: "Ca Mau",
    age: 90,
  },
  {
    id: 9,
    userName: "Insta",
    email: "insta@gmail.com",
    address: "Yen Bai",
    age: 49,
  },
  {
    id: 10,
    userName: "John",
    email: "john@gmail.com",
    address: "Joker",
    age: 52,
  },
];

app.use(express.json());

// GET METHOD LẤY ALL USER
app.get("/users", (req, res) => {
  res.status(200).json({ data: listStudent });
});

// GET METHOD LẤY USER BY ID
// localhost/user/4
app.get("/user/:id", (req, res) => {
  // COMMON LOGIC CHO MỖI HÀM
  // 1. Chiết dữ liệu từ REQUEST để lấy thông tin yêu cầu
  // 2. VALIDATION đối số từ REQUEST
  // 3. Viết logic xử lý cho REQUEST đó
  // 4. Trả dữ liệu sau khi xử lý cho CLIENT
  const userId = req.params.id;
  const user = listStudent.find((user) => {
    user.id === userId;
  });

  // Check user có id chưa
  if (user === undefined || user === null) {
    res.status(400).json({ errorMsg: "User không tồn tại" });
  }

  // Trả về user tìm thấy
  res.status(200).json({ data: user });
});

//POST METHOD TẠO MỚI USER
app.post("/users", (req, res) => {
  const newUser = req.body;
  const persitUser = {
    id: listStudent.length + 1,
    userName: newUser.userName,
    email: newUser.email,
    address: newUser.address,
    age: newUser.age,
  };
  listStudent.push(persitUser);
  res.status(200).json(persitUser);
});

// PUT METHOD UPDATE TOÀN BỘ DỮ LIỆU 1 CỦA USER THEO USER ID

app.get("/user/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});
