import AddEventForm from "@/components/AddEventForm"
import { useSession } from "next-auth/react"
import useSWR from "swr"
import ReactModal from "react-modal"
import { useState } from "react"

export default function CreateEvent() {
  const { mutate } = useSWR("/api/events")
  const { data: session } = useSession()
  const [showModal, setShowModal] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, userId: session.user.userId }),
    })

    if (response.ok) {
      mutate()
      setShowModal(false)
    }
  }

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <div className="flex items-center justify-between border-b border-gray-300 pb-2">
      <div className="mr-4">
        <h1 id="SoClub">SoClub</h1>
        <p className="text-sm text-gray-500">Upcoming events</p>
      </div>
      {session && (
        <img
          src="/resources/add.svg"
          alt="Add Event"
          onClick={openModal}
          className="w-12 h-12 cursor-pointer justify-center"
        />
      )}
      {showModal && (
        <ReactModal isOpen={showModal} onRequestClose={closeModal}>
          <AddEventForm onSubmit={handleSubmit} formName="create-event" />
        </ReactModal>
      )}
    </div>
  )
}
