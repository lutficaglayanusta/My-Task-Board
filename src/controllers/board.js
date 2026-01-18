import {
  addBoardService,
  deleteBoardService,
  fetchBoardService,
  updateBoardService,
} from "../services/board.js";

export const addBoardController = async (req, res) => {
  const id = req.user._id;

  const board = await addBoardService(req.body, id);

  res.status(201).json({
    message: "Successfully create board",
    board,
  });
};
export const fetchBoardController = async (req, res) => {
  const id = req.user._id;

  const board = await fetchBoardService(id);

  res.status(200).json({
    message: "Successfully fetch board according to user",
    board,
  });
};
export const deleteBoardController = async (req, res) => {
  const id = req.user._id;

  const { boardId } = req.params;

  await deleteBoardService(id, boardId);

  res.status(204).send();
};
export const updateBoardController = async (req, res) => {
  const id = req.user._id;
  const { boardId } = req.params;

  const board = await updateBoardService(id, boardId, req.body);

  res.status(200).json({
    message: "Updated Successfully board",
    data: board,
  });
};
