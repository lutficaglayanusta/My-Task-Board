import Joi from "joi";

export const addBoardSchema = Joi.object({
  title: Joi.string().required(),
});
export const updateBoardSchema = Joi.object({
  title: Joi.string(),
});
