import useSWR from "swr"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function UserEvents() {
  const { data: session } = useSession()
  const userId = session?.user?.userId
  const { data, isLoading } = useSWR(userId ? `/api/user/${userId}` : null)
  if (session) {
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!data) {
    return <h1>No events found.</h1>
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">My Events</h1>
      <ul className="space-y-4">
        {data.createdEvents.map((event) => (
          <li
            key={event._id}
            className="bg-white shadow-md rounded-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <Link href={`/${event._id}`} className="block">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-semibold text-blue-600 hover:underline">{event.name}</p>
                  <p className="text-gray-500">Location: {event.location}</p>
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
