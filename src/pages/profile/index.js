import Profile from "@/components/ProfileInfo"
import { getSession } from "next-auth/react"
import useSWR from "swr"
import UserEvents from "@/components/UserEvents"
import UserJoinedEvents from "@/components/JoinedEventsList"
import FavoritesList from "@/components/FavoritesList"
import { useState } from "react"

export default function MyProfile({ userId }) {
  const { data, isLoading } = useSWR(`/api/user/${userId}`)
  const [activeTab, setActiveTab] = useState("events")

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mr-4 rounded-md ${
            activeTab === "events" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("events")}
        >
          My Events
        </button>
        <button
          className={`px-4 py-2 mr-4 rounded-md ${
            activeTab === "joinedEvents" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("joinedEvents")}
        >
          Joined Events
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "favorites" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites
        </button>
      </div>
      <Profile />
      {activeTab === "events" && <UserEvents />}
      {activeTab === "joinedEvents" && <UserJoinedEvents />}
      {activeTab === "favorites" && <FavoritesList />}
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const userId = session?.user?.userId || null

  return {
    props: {
      userId,
    },
  }
}
