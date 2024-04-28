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
      if (event.likedBy.includes(userId)) {
        event.likedBy.pull(userId)
      } else {
        event.likedBy.push(userId)
      }
      await event.save()
      return response.status(200).json({ status: `User ${userId} liked event ${id}` })
    } catch (error) {
      console.error(error)
      response.status(500).json({ status: "Internal Server Error" })
    }
  }
}
