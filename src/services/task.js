import Task from "../db/models/task.js";

export const addTaskService = async (payload) => {
  const task = await Task.create(payload);

  return task;
};
export const fetchTaskService = async (boardId) => {
  const task = await Task.find({ boardId });

  return task;
};
export const deleteTaskService = async (id) => {
  await Task.deleteOne({ _id: id });
};
export const updateTaskService = async (id, payload) => {
  const task = await Task.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    includeResultMetadata: true,
  });
  return task.value;
};
