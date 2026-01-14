import Board from "../db/models/board.js";

export const addBoardService = async (payload, id) => {
  const board = await Board.create({ ...payload, userId: id });

  return board;
};
export const fetchBoardService = async (id) => {
  const board = await Board.find({ userId: id });

  return board;
};
export const deleteBoardService = async (id, boardId) => {
  await Board.deleteOne({ _id: boardId, userId: id });
};
