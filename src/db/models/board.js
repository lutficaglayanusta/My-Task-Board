import { model, Schema } from "mongoose";

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Board = model("boards", boardSchema);

export default Board;
