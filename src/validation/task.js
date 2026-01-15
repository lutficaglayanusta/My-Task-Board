import Joi from "joi";

export const addTaskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string()
    .valid("uncompleted", "in-progress", "completed")
    .required(),
  image: Joi.string().optional(),
});
