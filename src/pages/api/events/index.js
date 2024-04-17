import dbConnect from "@/db/connect";
import Event from "@/db/models/Event";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const events = await Event.find();
    return response.status(200).json(events);
  } else if (request.method === "POST") {
    try {
      const { data: eventData, userId } = request.body;
      console.log("eventData============================", eventData);
      console.log("userId================================", userId);
      const newlyAddedEvent = await Event.create(eventData);
      await User.findByIdAndUpdate(userId, {
        $push: { createdEvents: newlyAddedEvent._id },
      });
      response.status(201).json({ status: "Event created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
