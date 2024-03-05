import express from "express";
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";
// import { users, posts, comments } from "./db.json";

const app = express();
app.use(express.json());
const SERVER = 8080;

// Ví dụ mẫu
// app.get("/users", (req, res) => {
//   fetch("http://localhost:3000/users")
//     .then((rs) => {
//       return rs.json();
//     })
//     .then((data) => {
//       res.status(200).send({
//         message: "Thanh cong",
//         data,
//       });
//     });
// });

// Validate user name when input
function validateUsername(username) {
  const regex = /^(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/;

  return regex.test(username);
}
// Function Check Null or Undefined
function checkNullOrUndefined(...args) {
  for (const arg of args) {
      if (arg === null || arg === undefined) {
          return true;
      }
  }
  return false;
}
// 1.Viết API việc đăng ký user với userName, id sẽ được là một string ngẫu nhiên, không được phép trùng, bắt đầu từ ký tự US (ví dụ: US8823).
app.post("/users", (req, res) => {
  fetch("http://localhost:3000/users")
    .then((rs) => {
      rs.json();
    })
    .then((data) => {
      const {users , posts, comments} = data;
      const { userName } = req.body || {};

      try {
        if (validateUsername(userName) !== true)
          throw new Error("userName is incorrect! Please re-check");
        // Check if userName already exists
        const existingUser = users.find(
          (user) => user.userName === data.userName
        );
        if (existingUser) {
          return res
            .status(400)
            .json({ error: "User with this userName already exists." });
        }

        // Generate a unique ID starting with "US"
        const generatedId = `US${uuidv4().split("-").join("").substr(0, 8)}`;

        // Add the new user to the users array
        users.push({ id: generatedId, userName });

        res
          .status(201)
          .json({ msg: "User registered successfully", userId: generatedId });
      } catch (error) {
        res.status(403).send({
          data: null,
          success: false,
          error: error.message,
        });
      }
    });
});

app.listen(SERVER, () => {
  console.log("Server is running!");
});
