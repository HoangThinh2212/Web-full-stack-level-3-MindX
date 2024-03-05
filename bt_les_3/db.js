const users = [
  {
    id: "US001",
    userName: "MindX",
  },
  {
    id: "US002",
    useName: "Nobi Nobita",
  },
];
const posts = [
  {
    id: "PS001",
    content: "Nội dung học về JSON Server!",
    authorId: "US001",
  },
];
const comments = [
  {
    id: "CMT001",
    postId: "PS001",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US002",
  },
];
export { users, posts, comments };
