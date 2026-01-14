import { Router } from "express";
import authRoute from "./auth.js";
import taskRoute from "./task.js";
import boardRoute from "./board.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/tasks", taskRoute);
router.use("/board", boardRoute);

export default router;
