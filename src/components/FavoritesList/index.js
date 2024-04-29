import useSWR from "swr"
import Link from "next/link"
import { useSession } from "next-auth/react"
const eventTypeImages = {
  music: "/resources/concert.jpg",
  cultural: "/resources/art.jpg",
  sports: "/resources/sport.jpg",
  social: "/resources/social.jpg",
}

export default function FavoritesList() {
  const { data: session } = useSession()
  const userId = session?.user?.userId
  const { data, isLoading } = useSWR(`/api/events/`)
  if (session) {
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!data) {
    return <h1>No events found.</h1>
  }
  const joinedEvents = data.filter((event) => event.likedBy.includes(userId))
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4" id="heading-event">
        Favorites
      </h1>
      <ul className="space-y-4">
        {joinedEvents.map((event) => (
          <li
            key={event._id}
            className="bg-white shadow-md rounded-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <Link href={`/${event._id}`} className="block">
              <div className="flex justify-between items-center">
                <div>
                  <img
                    src={eventTypeImages[event.eventType]}
                    alt={event.eventType}
                    className="rounded-full w-16 h-16"
                  />
                  <p className="text-xl font-semibold text-black-600 hover:underline " id="heading">
                    {event.name}
                  </p>
                  {/*  <p className="text-gray-500">Location: {event.location}</p> */}
                </div>
                <div className="text-right">
                  <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-gray-500">{event.time}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
