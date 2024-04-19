import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import AddEventForm from "../AddEventForm";

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  const { mutate } = useSWR("/api/events");
  const [isEditMode, setIsEditMode] = useState(false);
  const { data, isLoading } = useSWR(`/api/events/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    const response = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
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
  return (
    <>
      {isEditMode && <AddEventForm onSubmit={handleEditProduct} />}
      <h2>Event: {data.name}</h2>
      <p>Location: {data.location}</p>
      <p>Description: {data.description}</p>
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
  );
}
