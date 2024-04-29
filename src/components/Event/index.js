import useSWR from "swr"
import { useRouter } from "next/router"
import { useState } from "react"
import AddEventForm from "../AddEventForm"
import { useSession } from "next-auth/react"
import { format } from "date-fns"
import { HeartIcon } from "@heroicons/react/outline"

import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid"

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
  const [isLiked, setIsLiked] = useState(false)
  const { data: eventData, isLoading: eventDataLoading } = useSWR(`/api/events/${id}`)
  const { data: session } = useSession()
  if (eventDataLoading) {
    return <h1>Loading...</h1>
  }

  if (!eventData) {
    return null
  }
  const { name, location, eventType, date, time, description, creator, participants, likedBy, maxParticipants } =
    eventData

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
      router.back()
    }
  }
  async function handleDeleteEvent() {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      router.back()
    }
  }
  const isEventCreator = creator === session?.user?.userId

  async function handleJoinEvent() {
    if (participants.length >= maxParticipants) {
      alert("Sorry, the event is booked out")
      return
    }
    const response = await fetch(`/api/events/${id}/join`, {
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

  async function handleJoinFavorites() {
    const response = await fetch(`/api/events/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session.user.userId }),
    })

    if (response.ok) {
      setIsLiked(!isLiked)
      mutate()
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md relative">
      {isEditMode && (
        <AddEventForm
          eventData={eventData}
          formattedDate={formattedDate}
          isEditMode={true}
          onSubmit={handleEditEvent}
        />
      )}
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <p className="mb-4">{description}</p>
      <p>
        <span className="font-semibold"></span>
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
        <span className="font-semibold">We meet on the</span> {formattedDate}
      </p>
      <p>
        <span className="font-semibold">at</span> {time}
      </p>
      <p>
        <span className="font-semibold">Spots taken</span> {maxParticipants}
      </p>
      {session && (
        <div className="flex space-x-4 mt-6">
          {isEventCreator && (
            <>
              <button
                className="px-3 py-1 text-sm rounded-md border border-black
                font-semibold hover:bg-black hover:text-white"
                type="button"
                onClick={() => setIsEditMode(!isEditMode)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 text-sm rounded-md border border-black
                 font-semibold hover:bg-black hover:text-white"
                type="button"
                onClick={() => handleDeleteEvent()}
              >
                Delete
              </button>
            </>
          )}

          {!isEventCreator && (
            <button
              className={`px-3 py-1 text-sm rounded-md border border-black ${
                isJoined || eventData.participants.includes(session.user.userId)
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } font-semibold hover:bg-black hover:text-white`}
              type="button"
              onClick={handleJoinEvent}
            >
              {isJoined || eventData.participants.includes(session.user.userId) ? "Joined!" : "Join"}
            </button>
          )}
          <button
            className={`px-3 py-1 text-sm rounded-md border border-black ${
              isLiked || eventData.likedBy.includes(session.user.userId) ? "bg-black text-white" : "bg-white text-black"
            } font-semibold hover:bg-black hover:text-white`}
            type="button"
            onClick={handleJoinFavorites}
          >
            {isLiked || eventData.likedBy.includes(session.user.userId) ? (
              <HeartSolidIcon className="h-6 w-6" />
            ) : (
              <HeartIcon className="h-6 w-6" />
            )}
          </button>
          <img
            src="/resources/back.svg"
            alt="Go Back"
            className="w-8 h-8 absolute top-2 right-2 cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
      )}
    </div>
  )
}
