import express from "express";
import {
  getPosts,
  getPost,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getPost);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.post("/:id/commentPost", auth, commentPost);
router.patch("/:id/likePost", auth, likePost);

export default router;
