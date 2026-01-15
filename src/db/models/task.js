import { model, Schema } from "mongoose";

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["uncompleted", "in-progress", "completed"],
  },
  image: {
    type: String,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "boards",
  },
});

const Task = model("tasks", taskSchema);

export default Task;
