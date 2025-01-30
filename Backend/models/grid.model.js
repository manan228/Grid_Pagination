import { model, Schema } from "mongoose";

const gridSchema = new Schema({
  id: Number,
  name: String,
});

const Grid = model("Grid", gridSchema);

export default Grid
