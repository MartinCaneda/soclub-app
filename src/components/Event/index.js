import useSWR from "swr";
import { useRouter } from "next/router";

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/events/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h2>Event: {data.name}</h2>
      <p>Location: {data.location}</p>
      <p>Description: {data.description}</p>
    </>
  );
}
