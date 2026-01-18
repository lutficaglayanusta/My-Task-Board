import {
  addTaskService,
  deleteTaskService,
  fetchTaskService,
  updateTaskService,
} from "../services/task.js";

export const addTaskController = async (req, res) => {

  


  const task = await addTaskService(req.body);

  res.status(201).json({
    message: "Successfully created task",
    data: task,
  });
};
export const fetchTaskController = async (req, res) => {
  const { boardId } = req.params;

  const tasks = await fetchTaskService(boardId);

  res.status(200).json({
    message: "Successfully fetch tasks",
    data: tasks,
  });
};
export const deleteTaskController = async (req, res) => {
  const { taskId } = req.params;

  await deleteTaskService(taskId);

  res.status(204).send();
};
export const updateTaskController = async (req, res) => {
  const { taskId } = req.params;

  const task = await updateTaskService(taskId, req.body);

  res.status(200).json({
    message: "Successfully updated task",
    data: task,
  });
};
