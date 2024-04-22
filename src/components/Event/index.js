import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import AddEventForm from "../AddEventForm";
import { useSession } from "next-auth/react";

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  const { mutate } = useSWR("/api/events");
  const [isEditMode, setIsEditMode] = useState(false);
  const { data: eventData, isLoading: eventDataLoading } = useSWR(
    `/api/events/${id}`
  );
  const { data: session } = useSession();

  if (eventDataLoading) {
    return <h1>Loading...</h1>;
  }

  if (!eventData) {
    return null;
  }
  const { name, location, description, creator } = eventData;
  async function handleEditEvent(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventData = Object.fromEntries(formData);
    const response = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      mutate();
      router.push("/");
    }
  }
  async function handleDeleteEvent() {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }
  const isEventCreator = creator.some(
    (creatorId) => creatorId === session?.user?.userId
  );

  return (
    <>
      {isEditMode && (
        <AddEventForm isEditMode={true} onSubmit={handleEditEvent} />
      )}
      <h2>Event: {name}</h2>
      <p>Location: {location}</p>
      <p>Description: {description}</p>
      {session && isEventCreator && (
        <>
          <button
            type="button"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            ✏️
          </button>
          <button type="button" onClick={() => handleDeleteEvent()}>
            ❌
          </button>
        </>
      )}
    </>
  );
}
