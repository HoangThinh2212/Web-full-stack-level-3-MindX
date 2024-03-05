// npm install express
// npm instapp uuid

import express from 'express'
import { v4 } from 'uuid'

const app = express()

const port = 3000

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const REQUEST_4XX_INVALID_REQ_ERR_MSG = 'Request argument was invalid!'
const REQUEST_4XX_USER_NOTFOUND_REQ_ERR_MSG = 'User not found'

// BƯỚC TẠO API
// 1. ĐỊNH NGHĨA ROUTE
// 2. IMPLEMENT LOGIC CHO MỖI ROUTE
app.use(express.json())
const users = [
    {
        id: "9fceb585-042f-4f10-9cb5-37c529d93166",
        userName: "Nobita",
        email: "nobita@japanese.com",
        age: 5,
        avatar: "https://i.kym-cdn.com/photos/images/original/000/985/256/d51.png"
    },
    {
        id: "6257644e-94f2-45fc-9803-fc862df55eaa",
        userName: "Doraemon",
        email: "doraemon@nobita.com",
        avatar: "https://i.pinimg.com/736x/11/e4/4d/11e44d85743b28fa62121b5ae71a914b.jpg"
    },
    {
        id: "e7a88219-c265-44b4-ba02-1d2571ee4173",
        userName: "Suneo",
        email: "suneo@jaien.com",
        avatar: "https://ecdn.game4v.com/g4v-content/uploads/2023/05/19100155/Suneo-2-game4v-1684465314-94.jpg"
    }
];
const posts = [
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: 'd051b29e-d9c5-4cb1-89bf-38b31aef05f1',
        content: 'Chào mọi người!',
        createdAt: '2023-09-22T12:30:00.000Z',
        isPublic: true
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: 'cfcc73cd-5297-48a4-8d3a-2282a30a8c7a',
        content: 'Tôi đã tìm thấy một quyển sách tuyệt vời để đọc.',
        createdAt: '2023-09-22T12:31:00.000Z',
        isPublic: false
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: '86c961d8-0edc-4c59-a048-3f192a0e7ea3',
        content: 'Hôm nay thời tiết tuyệt vời!',
        createdAt: '2023-09-22T12:32:00.000Z',
        isPublic: true
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: 'e12a04e0-6b3b-4d6a-9f2d-60ebd21dbf3d',
        content: 'Cuối tuần tới, tôi sẽ tham gia một sự kiện thú vị.',
        createdAt: '2023-09-22T12:33:00.000Z',
        isPublic: false
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: '40b8d24e-70a5-4f75-8f71-0905b8e197cf',
        content: 'Yêu mọi người!',
        createdAt: '2023-09-22T12:34:00.000Z',
        isPublic: true
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: '3b8d6e1a-7601-43c3-9264-1f3653a1e5c9',
        content: 'Chúc mọi người cuối tuần vui vẻ!',
        createdAt: '2023-09-22T12:35:00.000Z',
        isPublic: true
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: '5f508d8e-407b-4b41-8ff2-e727590aaf5d',
        content: 'Làm điều tốt cho ngày hôm nay!',
        createdAt: '2023-09-22T12:36:00.000Z',
        isPublic: true
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: '1d8b6e16-c01a-4c80-8924-2bf9f5a548cc',
        content: 'Chia sẻ niềm vui!',
        createdAt: '2023-09-22T12:37:00.000Z',
        isPublic: true
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: '1b2b8c16-32ca-4e5a-9866-9df098c5e144',
        content: 'Hãy yêu đến mức bạn có thể!',
        createdAt: '2023-09-22T12:38:00.000Z',
        isPublic: true
    },
    {
        userId: '9fceb585-042f-4f10-9cb5-37c529d93166',
        postId: '4e5c8d1f-30a8-4d88-832e-79fb6d6a2cf1',
        content: 'Hãy sống với niềm đam mê!',
        createdAt: '2023-09-22T12:39:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: 'a1d6d08c-356e-4f0e-8521-dc20ef12e882',
        content: 'Hôm nay là một ngày đáng nhớ!',
        createdAt: '2023-09-22T14:30:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: '4b721d1f-99b9-4e4e-90d5-ef06dca0b99e',
        content: 'Chúc mọi người một ngày thật tươi đẹp!',
        createdAt: '2023-09-22T14:31:00.000Z',
        isPublic: false
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: 'd5e68c5a-50cd-4889-8a59-2b6be7d00aa3',
        content: 'Hãy luôn giữ nụ cười trên môi!',
        createdAt: '2023-09-22T14:32:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: '32c8b9d3-5ecf-4a76-ba33-12f120ea2fb1',
        content: 'Tôi đang học một điều mới mẻ hôm nay.',
        createdAt: '2023-09-22T14:33:00.000Z',
        isPublic: false
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: 'e8c5d7b6-2b2a-4d68-a067-9cd0ec191f7a',
        content: 'Yêu cuộc sống!',
        createdAt: '2023-09-22T14:34:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: 'f3e8d6a1-36b1-4e15-9a25-7d98b4a4fece',
        content: 'Nhớ người thân và bạn bè!',
        createdAt: '2023-09-22T14:35:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: '17b2c3d4-97d0-43ef-9c5e-bc63dabf1a1f',
        content: 'Hãy làm điều tốt trong ngày hôm nay!',
        createdAt: '2023-09-22T14:36:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: 'a9d8b2e1-2dcb-42a6-85c8-eb891d8b49f2',
        content: 'Chúc mọi người một cuối tuần vui vẻ!',
        createdAt: '2023-09-22T14:37:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: 'c6e9a8f1-9013-4e8b-8f63-4f1a9a667c5f',
        content: 'Luôn học hỏi và phát triển bản thân!',
        createdAt: '2023-09-22T14:38:00.000Z',
        isPublic: true
    },
    {
        userId: '6257644e-94f2-45fc-9803-fc862df55eaa',
        postId: 'b1e3d9c8-6d97-4e86-94fc-7bcda8a1e0bd',
        content: 'Yêu mọi người từ trái tim!',
        createdAt: '2023-09-22T14:39:00.000Z',
        isPublic: true
    }
]

// 2 loại RESOURCE USER, POST 

// DEFINE ROUTE CHO RESOURCE USER (DEFINE API SCHEMA)
// GET USERS 
// GET USER BY USER ID - (UNIQUE  UUID V4, V6 LÀ KHÁI NIỆM UNIQUE ID)
// GET USER BY EMAIL - (UNIQUE EMAIL)
// ===================================================

// DEFINE ROUTE CHO RESOURCE POST (DEFINE API SCHEMA)
// GET - POST BY USER ID - PHẢI MAPPING ID TỪ USER VÀO ID USER TRONG POST
// GET - LIST BÀI POST THEO QUERY STRING
// GET - LIST BÀI POST THEO STATUS isPublic bằng true
// POST - CREATE POST FOR USER BY USER ID
// PUT - cập nhật thông tin bài post THEO POST ID


// =================================================================
// IMPLEMENTED CODE
// =================================================================

// DEFINE ROUTE CHO RESOURCE USER (DEFINE API SCHEMA)
// GET USERS - DONE
// GET USER BY USER ID - (UNIQUE  UUID V4, V6 LÀ KHÁI NIỆM UNIQUE ID) - DONE
// GET USER BY EMAIL - (UNIQUE EMAIL) - DONE
// ==========================================
// -----------------------------------------------------------------
// GET METHOD LẤY ALL USER
app.get('/users', (_, res) => {
    res
        .status(200)
        .json({ data: users })
})

// localhost/user/4
// GET USER BY USER ID - (UNIQUE  UUID V4, V6 LÀ KHÁI NIỆM UNIQUE ID)
app.get('/user/:id', (req, res) => {
    const id = req.params.id

    if (checkNullOrUndefined(id)) {
        return res
            .status(400)
            .json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG })
    }

    const user = users.find((user) => users.id === user.id)

    if (checkNullOrUndefined(user)) {
        return res
            .status(400)
            .json({ message: REQUEST_4XX_USER_NOTFOUND_REQ_ERR_MSG })
    }

    res
        .status(200)
        .json({ data: user })
})

// localhost/user/test@gmail.com
// GET USER BY EMAIL - (UNIQUE EMAIL)
app.get('/user/:email', (req, res) => {
    const userEmail = req.params.email

    if (checkNullOrUndefined(req.body.email)) {
        return res
            .status(400)
            .json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG })
    }

    // new là keyword khởi tạo đối tượng trong lập trình hướng đối tượng OOP
    // new dùng để gọi hàm constructor của 1 class để khởi tạo 1 instance từ class đó vào RAM.
    if (!new RegExp(emailRegex).test(userEmail)) {
        // Không phải định dạnh email thì response lỗi cho người request biết
        return res
            .status(400)
            .json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG })
    }

    const user = users.find((user) => users.email === user.email)

    if (checkNullOrUndefined(user)) {
        return res
            .status(404)
            .json({ message: REQUEST_4XX_USER_NOTFOUND_REQ_ERR_MSG })
    }

    res
        .status(200)
        .json({ data: user })
})

// ================================================================================================

// DEFINE ROUTE CHO RESOURCE POST (DEFINE API SCHEMA)
// GET - POST BY USER ID - PHẢI MAPPING ID TỪ USER VÀO ID USER TRONG POST - 
// GET - LIST BÀI POST THEO QUERY STRING - DONE
// GET - LIST BÀI POST THEO STATUS isPublic bằng true
// POST - CREATE POST FOR USER BY USER ID
// PUT - cập nhật thông tin bài post THEO POST ID
// --------------------------------------------------------------------------- 

// GET - POST BY USER ID - PHẢI MAPPING ID TỪ USER VÀO ID USER TRONG POST
app.get('/posts/:userId', (req, res) => {
    const userId = req.query.userId;

    if (checkNullOrUndefined(userId)) {
        return res
            .status(404)
            .json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG })
    }

    const postsByUserId = posts.filter(post => post.userId === userId);

    res
        .status(200)
        .json({ data: postsByUserId })
})

// GET - LIST BÀI POST THEO QUERY STRING
app.get('/posts', (req, res) => {
    const userId = req.query.userId;
    const postId = req.query.postId;
    const isPublic = req.query.isPublic;

    if (checkNullOrUndefined(userId, postId, isPublic)) {
        return res
            .status(404)
            .json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG })
    }

    const post = posts.find(post => post.userId === userId ||
        post.postId === postId ||
        post.isPublic === isPublic);

    if (checkNullOrUndefined(post)) {
        return res
            .status(404)
            .json({ message: "Post not found" })
    }

    res
        .status(200)
        .json({ data: post })
})

// GET - LIST BÀI POST THEO STATUS isPublic bằng true
app.get('/posts/status/public', (req, res) => {
    const publicPosts = posts.filter(post => post.isPublic)

    res
        .status(200)
        .json({ data: publicPosts })
})

// POST - CREATE POST FOR USER BY USER ID (UNIQUE  UUID V4, V6 LÀ KHÁI NIỆM UNIQUE ID)
app.post('/post', (req, res) => {
    if (checkNullOrUndefined(req.body) &&
        verifyHttpPostRequiredPostObjectProperties(req.body)) {
        return res
            .status(404)
            .json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG })
    }

    const newPost = mapToPostObject(req.body)

    newPost.id = v4()
    newPost.createdAt = new Date();
    newPost.isPublic = checkNullOrUndefined(newPost.isPublic) || false;

    posts.push(newPost);

    res
        .status(200)
        .json({ data: newPost })
})

// PATCH - cập nhật thông tin bài post THEO POST ID
app.patch('/post/:id', (req, res) => {
    const postId = req.params.id;

    if (checkNullOrUndefined(postId) &&
        checkNullOrUndefined(req.body) &&
        verifyHttpPostRequiredPostObjectProperties(req.body)) {
        return res
            .status(404)
            .json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG })
    }

    const postIndex = posts.findIndex(post => post.postId === postId);

    if (checkNullOrUndefined(post)) {
        return res
            .status(404)
            .json({ message: "Post not found" })
    }

    // Map dữ liệu đầu vào theo đúng format của 1 object post
    const updatePost = mapToPostObject(req.body);

    const updatedPost = mergeObjects(posts[postIndex], updatePost)

    posts[postIndex] = updatedPost

    res
        .status(200)
        .json({ data: updatePost })
})

function checkNullOrUndefined(...args) {
    for (const arg of args) {
        if (arg === null || arg === undefined) {
            return true;
        }
    }
    return false;
}

// check HTTP request body gửi lên có đủ các object properties của 1 user
function verifyHttpPostRequiredPostObjectProperties(post) {
    // Kiểm tra sự tồn tại của tất cả các trường
    return 'userId' in post && 'content' in post;
}

// Hổ trợ map HTTP request body về đúng format object Post
function mapToPostObject(post) {
    const postObj = {
        id: post.postId,
        userName: post.userId,
        email: post.content,
        age: post.createdAt,
        avatar: post.isPublic
    };

    return postObj;
}

// Merge các properties của object B vào object A ignore các properties bị null hay undentifined
function mergeObjects(a, b) {
    // Tạo một bản sao mới của đối tượng A
    const result = { ...a };

    // Duyệt qua mỗi key của đối tượng B
    Object.keys(b).forEach(key => {
        // Kiểm tra nếu giá trị của key trong B không phải là null hoặc undefined
        if (b[key] !== null && b[key] !== undefined) {
            // Ghi đè giá trị của key đó trong đối tượng kết quả
            result[key] = b[key];
        }
    });

    return result;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})