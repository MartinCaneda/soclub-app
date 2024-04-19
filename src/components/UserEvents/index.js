import useSWR from "swr";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function UserEvents() {
  const { data: session } = useSession();
  const userId = session?.user?.userId;
  const { data, isLoading } = useSWR(userId ? `/api/user/${userId}` : null);
  if (session) {
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No events found.</h1>;
  }

  return (
    <>
      <h1>My Events</h1>
      <ul>
        {data.createdEvents.map((event) => (
          <li key={event._id}>
            <Link href={`/${event._id}`}>
              <p>{event.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
