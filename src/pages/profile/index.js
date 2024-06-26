import Profile from "@/components/ProfileInfo"
import { getSession } from "next-auth/react"
import useSWR from "swr"
import UserEvents from "@/components/UserEvents"
import UserJoinedEvents from "@/components/JoinedEventsList"

export default function MyProfile({ userId }) {
  const { data, isLoading } = useSWR(`/api/user/${userId}`)

  return (
    <>
      <Profile />
      <UserEvents />
      <UserJoinedEvents />
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
