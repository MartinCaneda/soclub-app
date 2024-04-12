import AddEventForm from "@/components/AddEventForm";

export default function CreateEventPage() {
  async function createEvent(event) {
    console.log(event);
  }
  return (
    <>
      <h1>Create an event</h1>
      <AddEventForm onSubmit={createEvent} formName="create-event" />
    </>
  );
}
