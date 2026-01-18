import Joi from "joi";

export const addTaskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string()
    .valid("uncompleted", "in-progress", "completed")
    .required(),
  image: Joi.string().optional(),
  boardId: Joi.string().required(),
});
export const updateTaskSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  status: Joi.string().valid("uncompleted", "in-progress", "completed"),
  image: Joi.string(),
});
