import AddEventForm from "@/components/AddEventForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function CreateEventPage() {
  const router = useRouter();
  const { mutate } = useSWR("/api/events");
  const { data: session } = useSession();
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, userId: session.user.userId }),
    });

    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <h2>Create an event</h2>
      <AddEventForm onSubmit={handleSubmit} formName="create-event" />
    </>
  );
}
