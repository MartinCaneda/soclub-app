import AddEventForm from "@/components/AddEventForm";
import Profile from "@/components/ProfileInfo";

export default function CreateEventPage() {
  async function createEvent(event) {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <Profile />
      <h2>Create an event</h2>
      <AddEventForm onSubmit={createEvent} formName="create-event" />
    </>
  );
}
