import { Router } from "express";
import authRoute from "./auth.js";
import taskRoute from "./task.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/tasks", taskRoute);

export default router;
