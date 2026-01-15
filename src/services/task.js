import Task from "../db/models/task.js";

export const addTaskService = async (payload) => {
  const task = await Task.create(payload);

  return task;
};
export const fetchTaskService = async (boardId) => {
  const task = await Task.findOne({ boardId });

  return task;
};
export const deleteTaskService = async (id) => {
  await Task.deleteOne({ _id: id });
};
