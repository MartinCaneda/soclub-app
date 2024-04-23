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
  const {
    name,
    location,
    eventType,
 /*    mapUrl, */
    date,
    time,
    description,
    creator,
  } = eventData;
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
      router.push("/profile");
    }
  }
  async function handleDeleteEvent() {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/profile");
    }
  }
  const isEventCreator = creator.some(
    (creatorId) => creatorId === session?.user?.userId
  );

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      {isEditMode && (
        <AddEventForm isEditMode={true} onSubmit={handleEditEvent} />
      )}
      <h2 className="text-2xl font-semibold mb-4">Event: {name}</h2>
      <p className="mb-4">{description}</p>
      <p>
        <span className="font-semibold">Event Type:</span> {eventType}
      </p>
      {/* <p>Location: {location}</p> */}
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          className="rounded-md w-full h-full"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC2DwVkEfy_S0qFkxKMwicAfUZPwfSt05o&q=${encodeURIComponent(
            location
          )}`}
        ></iframe>
      </div>
      <p>
        <span className="font-semibold">Date:</span>{" "}
        {new Date(date).toLocaleDateString()}
      </p>
      <p>
        <span className="font-semibold">Meeting Time:</span> {time}
      </p>
      {session && isEventCreator && (
        <div className="mt-4 space-x-4">
          <button
            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            type="button"
            onClick={() => setIsEditMode(!isEditMode)}
          >
            ✏️ Edit
          </button>
          <button
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold"
            type="button"
            onClick={() => handleDeleteEvent()}
          >
            ❌ Delete
          </button>
        </div>
      )}
    </div>
  );
}
