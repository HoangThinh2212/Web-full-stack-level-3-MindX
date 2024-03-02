// import http from "http";
const http = require("http");

// for câu 4
const url = require("url");
// for câu 4

// For câu 5
const { parse } = require("url");

// For câu 5

// Data Students
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

// PORT listen
const PORT = 8080;

// Function to generate random user information
function generateRandomUser() {
  const id = listStudent.length + 1;
  const randomName = getRandomName();
  const randomEmail = getRandomEmail(randomName);
  const randomAddress = getRandomAddress();
  const randomAge = getRandomAge();

  return {
    id,
    userName: randomName,
    email: randomEmail,
    address: randomAddress,
    age: randomAge,
  };
}

// Helper functions for generating random data
function getRandomName() {
  const names = ["Alice", "Bob", "Charlie", "David", "Emily", "Franky"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomEmail(name) {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${name.toLowerCase()}@${randomDomain}`;
}

function getRandomAddress() {
  const addresses = [
    "Ha Noi",
    "Da Nang",
    "HCM",
    "Phu Quoc",
    "Yen Bai",
    "Ca Mau",
  ];
  return addresses[Math.floor(Math.random() * addresses.length)];
}

function getRandomAge() {
  return Math.floor(Math.random() * 30) + 40; // Generates an age between 20 and 49
}

const app = http.createServer((req, res) => {
  const endpoint = req.url;
  // lấy phương thức được gửi lên từ request
  const method = req.method;

  if (endpoint === "/") {
    res.end("Bai tap buoi 1");
  }

  // Câu 1
  if (endpoint === "/users") {
    if (method === "GET") {
      res.end(JSON.stringify(listStudent));
    } else {
      res.end(`Error, Notfound DATA!`);
    }
  }

  // Câu 2
  if (endpoint === "/users/old") {
    if (method === "GET") {
      const ageArray = [];

      for (const studentKey in listStudent) {
        const student = listStudent[studentKey];
        if (student.age >= 50) {
          ageArray.push(student);
        }
      }
      res.end(JSON.stringify(ageArray));
    }
  }

  // Câu 3 Add random user with random info
  if (endpoint === "/users/add-random") {
    const newRandomUser = generateRandomUser();
    listStudent.push(newRandomUser);
    res.end(JSON.stringify(listStudent));
  }

  // Câu 4 Add user with input info
  if (endpoint === "/users/add") {
    const parsedUrl = url.parse(req.url, true); // Parse query parameters
    const pathname = parsedUrl.pathname;
    if (pathname === "/users/add") {
      const { userName, email, address, age } = parsedUrl.query;

      // Create a new user object
      const newUser = {
        id: listStudent.length + 1,
        userName,
        email,
        address,
        age: parseInt(age),
      };

      // Push the new user into the array
      listStudent.push(newUser);

      // Respond with the updated array
      res.end(JSON.stringify(listStudent));
    } else {
      res.end(`Error, Notfound DATA!`);
    }
  }

  // Câu 5 Update user base on id
  if (endpoint.startsWith( "/users/update") && method === "GET") {
    const id = pathname
  }
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
