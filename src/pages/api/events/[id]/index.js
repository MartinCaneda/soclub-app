import dbConnect from "@/db/connect";
import Event from "@/db/models/Event";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const event = await Event.findById(id);
    response.status(200).json(event);

    if (!event) {
      return response.status(404).json({ status: "Not Found" });
    }
  }
}
