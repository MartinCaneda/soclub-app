import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, default: "" },
  creator: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
