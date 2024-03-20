import jwt from "jsonwebtoken";
import User from "../model/users.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send("Unauthorized access !");
  }
  try {
    const decoded = jwt.verify(token, "secret_key");
    req.user = await User.findById(decoded.userId).select("- password");
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send("Unauthorized access !");
  }
};

export default authMiddleware;
