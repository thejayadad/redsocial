import { Schema, model, models } from "mongoose";

const DonutSchema = new Schema({
  donut: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tags: {
    type: String,
    required: [true, "Tags is required"],
  },
  upvotes: {
    type: Array,
  },
  creator: { type: String },
});

const Donut = models.Donut || model("Donut", DonutSchema);

export default Donut;