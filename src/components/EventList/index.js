import useSWR from "swr";
import Link from "next/link";

export default function EventList() {
  const { data, isLoading } = useSWR("/api/events");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>Berlin Events</h1>
      <ul>
        {data.map((event) => (
          <li key={event._id}>
            <Link href={`/${event._id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
