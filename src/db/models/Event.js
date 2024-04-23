import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  eventType: { type: String, required: true }, // Add eventType field
  mapUrl: { type: String, required: true }, // Add mapUrl field
  date: { type: Date, required: true }, // Add date field
  time: { type: String, required: true }, // Add meetingTime field
  description: { type: String, default: "" },
  creator: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
