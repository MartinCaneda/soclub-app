export default function AddEventForm({ onSubmit, isEditMode }) {
  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit">{isEditMode ? "Edit Event" : "Add Event"}</button>
    </form>
  );
}
