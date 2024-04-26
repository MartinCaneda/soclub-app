import useSWR from "swr"
import { useRouter } from "next/router"
import { useState } from "react"
import AddEventForm from "../AddEventForm"
import { useSession } from "next-auth/react"
import { format } from "date-fns"
const eventTypeImages = {
  music: "/resources/concert.jpg",
  arts: "/resources/art.jpg",
  sports: "/resources/sport.jpg",
  social: "/resources/social.jpg",
}

export default function Event() {
  const router = useRouter()
  const { id } = router.query

  const { mutate } = useSWR("/api/events")
  const [isEditMode, setIsEditMode] = useState(false)
  const [isJoined, setIsJoined] = useState(false)
  const { data: eventData, isLoading: eventDataLoading } = useSWR(`/api/events/${id}`)
  const { data: session } = useSession()
  if (eventDataLoading) {
    return <h1>Loading...</h1>
  }

  if (!eventData) {
    return null
  }
  const { name, location, eventType, date, time, description, creator, participants, maxParticipants } = eventData

  const formattedDate = format(new Date(date), "MM/dd/yyyy")

  async function handleEditEvent(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const eventData = Object.fromEntries(formData)
    const response = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })

    if (response.ok) {
      mutate()
      router.push("/profile")
    }
  }
  async function handleDeleteEvent() {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      router.push("/profile")
    }
  }
  const isEventCreator = creator === session?.user?.userId

  async function handleJoinEvent() {
    if (participants.length >= maxParticipants) {
      alert("Sorry, the event is booked out")
      return
    }
    const response = await fetch(`/api/events/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session.user.userId }),
    })

    if (response.ok) {
      setIsJoined(!isJoined)
      mutate()
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      {isEditMode && (
        <AddEventForm
          eventData={eventData}
          formattedDate={formattedDate}
          isEditMode={true}
          onSubmit={handleEditEvent}
        />
      )}
      <h2 className="text-2xl font-semibold mb-4">Event: {name}</h2>
      <p className="mb-4">{description}</p>
      <p>
        <span className="font-semibold">Event Type:</span> {eventType}
      </p>
      <img src={eventTypeImages[eventType]} alt={eventType} className="mb-4 rounded-full w-16 h-16" />
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          className="rounded-md w-full h-full"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC2DwVkEfy_S0qFkxKMwicAfUZPwfSt05o&q=${encodeURIComponent(
            location,
          )}`}
        ></iframe>
      </div>
      <p>
        <span className="font-semibold">Date:</span> {formattedDate}
      </p>
      <p>
        <span className="font-semibold">Meeting Time:</span> {time}
      </p>
      <p>
        <span className="font-semibold">Max Participants:</span> {maxParticipants}
      </p>
      {session && (
        <div className="mt-4 space-x-4">
          {isEventCreator && (
            <>
              <button
                className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                type="button"
                onClick={() => setIsEditMode(!isEditMode)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold"
                type="button"
                onClick={() => handleDeleteEvent()}
              >
                Delete
              </button>
            </>
          )}
          {!isEventCreator && (
            <button
              className={`px-4 py-2 rounded-md ${
                isJoined ? "bg-gray-500" : "bg-green-500"
              } hover:bg-green-600 text-white font-semibold`}
              type="button"
              onClick={handleJoinEvent}
            >
              {isJoined ? "Joined!" : "Join"}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
