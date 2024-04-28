import mongoose, { mongo } from "mongoose"
const { Schema } = mongoose

const eventSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  eventType: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  description: { type: String, default: "" },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  maxParticipants: { type: Number },
})
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema)
export default Event
