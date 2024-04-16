import useSWR from "swr";

export default function AddEventForm() {
  const { mutate } = useSWR("/api/events");
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />
      <label htmlFor="location">Location</label>
      <input id="location" name="location" type="text" required />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        maxLength="100"
      ></textarea>
      <button type="submit">Add Event</button>
    </form>
  );
}
