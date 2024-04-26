import useSWR from "swr"
import Link from "next/link"
const eventTypeImages = {
  music: "/resources/concert.jpg",
  arts: "/resources/art.jpg",
  sports: "/resources/sport.jpg",
  social: "/resources/social.jpg",
}
export default function EventList() {
  const { data, isLoading } = useSWR("/api/events")
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!data) {
    return
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <ul className="space-y-4">
        {data.map((event) => (
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
                  <p className="text-xl font-semibold text-orange-600 hover:underline">{event.name}</p>
                  {/* <p className="text-gray-500">Location: {event.location}</p> */}
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
