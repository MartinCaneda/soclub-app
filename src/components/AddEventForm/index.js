import { useState } from "react";

export default function AddEventForm({ onSubmit, isEditMode }) {
  const [eventType, setEventType] = useState("");
  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Event Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="location">Event Location</label>
      <input id="location" name="location" type="text" required />

      <label htmlFor="eventType">Event Type</label>
      <select
        id="eventType"
        name="eventType"
        value={eventType}
        onChange={handleEventTypeChange}
      >
        <option disabled value="">
          Choose a category
        </option>
        <option value="music">Music</option>
        <option value="arts">Arts</option>
        <option value="sports">Sports</option>
        <option value="social">Social</option>
      </select>
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        maxLength="100"
      ></textarea>
      <label htmlFor="mapUrl">Map URL</label>
      <input id="mapUrl" name="mapUrl" type="text" required />

      <label htmlFor="date">Event Date</label>
      <input id="date" name="date" type="date" required />

      <label htmlFor="time">Meeting Time</label>
      <input id="time" name="time" type="time" required />

      <button type="submit">{isEditMode ? "Edit Event" : "Add Event"}</button>
    </form>
  );
}
