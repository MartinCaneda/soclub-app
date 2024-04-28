import dbConnect from "@/db/connect"
import Event from "@/db/models/Event"

export default async function handler(request, response) {
  await dbConnect()
  const { id } = request.query
  if (request.method === "POST") {
    const { userId } = request.body
    try {
      const event = await Event.findById(id)
      if (!event) {
        return response.status(404).json({ status: "Not Found" })
      }
      if (event.participants.length >= event.maxParticipants) {
        return response.status(403).json({ status: "Event is full" })
      }

      if (event.participants.includes(userId)) {
        event.participants.pull(userId)
      } else {
        event.participants.push(userId)
      }

      await event.save()
      response.status(200).json({ status: `User ${userId} joined event ${id}` })
    } catch (error) {
      console.error(error)
      response.status(500).json({ status: "Internal Server Error" })
    }
  }
}
