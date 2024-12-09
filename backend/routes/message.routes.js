import express from "express";
import { getMessages, sendMessage, seenMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
router.patch("/seen/:id", protectRoute, seenMessage);

export default router;