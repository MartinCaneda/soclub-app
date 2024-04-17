import useSWR from "swr";
import Link from "next/link";

export default function MyEvents({ userId }) {
  const { data, isLoading } = useSWR("/api/events");
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <p>No Events Found</p>;
  }

  return (
    <>
      <h1>My Events</h1>
      <ul>
        {myEvents.map((event) => (
          <li key={event._id}>
            <Link href={`/${event._id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
