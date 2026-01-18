import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middleware/validateBody.js";
import { addTaskSchema, updateTaskSchema } from "../validation/task.js";
import {
  addTaskController,
  deleteTaskController,
  fetchTaskController,
  updateTaskController,
} from "../controllers/task.js";

const router = Router();

router.use(authenticate);

router.post("/", validateBody(addTaskSchema), ctrlWrapper(addTaskController));
router.get("/:boardId", ctrlWrapper(fetchTaskController));
router.delete("/:taskId", ctrlWrapper(deleteTaskController));
router.patch(
  "/:taskId",
  validateBody(updateTaskSchema),
  ctrlWrapper(updateTaskController),
);

export default router;
