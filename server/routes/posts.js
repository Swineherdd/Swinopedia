import express from "express";
import {getFeedPosts,getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import { get } from "mongoose";

const router = express.Router();

// reed
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts)
// uridate
router.patch("/:id/like", verifyToken, likePost);

export default router;