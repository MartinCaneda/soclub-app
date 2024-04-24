import EventList from "@/components/EventList"
import CreateEvent from "@/components/create-event"

export default function Home() {
  return (
    <>
      <div>
        <CreateEvent />
        <EventList />
      </div>
    </>
  )
}
