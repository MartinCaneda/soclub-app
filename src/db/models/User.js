import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: Date,
  createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
