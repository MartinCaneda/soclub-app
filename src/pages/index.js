import EventList from "@/components/EventList"
import CreateEvent from "@/components/create-event"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      <div>
        {session && <CreateEvent />}
        <EventList />
      </div>
    </>
  )
}
