import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  console.log("ÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇ");
  await dbConnect();
  if (request.method === "GET") {
    try {
      console.log("request", request.query);
      const { id } = request.query;
      const createdEventsObject = await User.findById(id).populate(
        "createdEvents"
      );
      console.log("createdEventsObject", createdEventsObject);
      response.status(200).json(createdEventsObject);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
