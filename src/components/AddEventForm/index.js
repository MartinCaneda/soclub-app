import { useState } from "react"

export default function AddEventForm({ onSubmit, isEditMode, eventData }) {
  const [eventType, setEventType] = useState("")
  const handleEventTypeChange = (event) => {
    setEventType(event.target.value)
  }
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <label htmlFor="name" className="block mb-2 font-semibold">
        Event Name
      </label>
      <input
        id="name"
        name="name"
        defaultValue={eventData?.name}
        type="text"
        required
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />

      <label htmlFor="location" className="block mt-4 mb-2 font-semibold">
        Event Location
      </label>
      <input
        id="location"
        name="location"
        defaultValue={eventData?.location}
        type="text"
        required
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />

      <label htmlFor="eventType" className="block mt-4 mb-2 font-semibold">
        Event Type
      </label>
      <select
        id="eventType"
        name="eventType"
        defaultValue={eventData ? eventData.eventType : "Choose a category"}
        //value={eventType}
        onChange={handleEventTypeChange}
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        required
      >
        {
          <option disabled value="">
            Choose a category
          </option>
        }
        <option value="music">Music</option>
        <option value="arts">Arts</option>
        <option value="sports">Sports</option>
        <option value="social">Social</option>
      </select>

      <label htmlFor="description" className="block mt-4 mb-2 font-semibold">
        Description
      </label>
      <textarea
        name="description"
        defaultValue={eventData?.description}
        id="description"
        cols="30"
        rows="5"
        maxLength="100"
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      ></textarea>

      {/*       <label htmlFor="mapUrl" className="block mt-4 mb-2 font-semibold">Map URL</label>
      <input id="mapUrl" name="mapUrl" type="text" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"/> */}

      <label htmlFor="date" className="block mt-4 mb-2 font-semibold">
        Event Date
      </label>
      <input
        id="date"
        name="date"
        defaultValue={eventData?.date.slice(0, 10)}
        type="date"
        required
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />

      <label htmlFor="time" className="block mt-4 mb-2 font-semibold">
        Meeting Time
      </label>
      <input
        id="time"
        name="time"
        defaultValue={eventData?.time}
        type="time"
        required
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <label htmlFor="maxParticipants" className="block mt-4 mb-2 font-semibold">
        Max Participants
      </label>
      <input
        id="maxParticipants"
        name="maxParticipants"
        defaultValue={eventData?.maxParticipants}
        type="number"
        min="1"
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />

      <button
        type="submit"
        className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700"
      >
        {isEditMode ? "Edit Event" : "Add Event"}
      </button>
    </form>
  )
}
