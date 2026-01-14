import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  addBoardController,
  deleteBoardController,
  fetchBoardController,
} from "../controllers/board.js";
import { authenticate } from "../middleware/authenticate.js";
import { validateBody } from "../middleware/validateBody.js";
import { addBoardSchema } from "../validation/board.js";

const router = Router();

router.use(authenticate);

router.post("/", validateBody(addBoardSchema), ctrlWrapper(addBoardController));
router.get("/", ctrlWrapper(fetchBoardController));
router.delete("/:boardId", ctrlWrapper(deleteBoardController));

export default router;
