import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { addBoardController } from "../controllers/board.js";
import { validateBody } from "../middleware/validateBody.js";
import { addTaskSchema } from "../validation/task.js";
import {
  deleteTaskController,
  fetchTaskController,
} from "../controllers/task.js";

const router = Router();

router.use(authenticate);

router.post("/", validateBody(addTaskSchema), ctrlWrapper(addBoardController));
router.get("/:boardId", ctrlWrapper(fetchTaskController));
router.delete("/:taskId", ctrlWrapper(deleteTaskController));

export default router;
