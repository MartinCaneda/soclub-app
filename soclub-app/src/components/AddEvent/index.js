import React from "react";
import { useRouter } from "next/router";

export default function AddEvent() {
  const router = useRouter();
  const addPost = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { title, content } = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      console.log(response);

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add new event</h1>
      <form className={form} onSubmit={addPost}>
        <div className={form_group}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            name="title"
          />
        </div>
        <div className={form_group}>
          <label htmlFor="content">Content</label>
          <textarea id="content" rows="3" name="content"></textarea>
        </div>
        <button type="submit" className={btn}>
          Submit
        </button>
      </form>
    </>
  );
}
