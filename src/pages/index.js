import Head from "next/head";
import EventList from "@/components/EventList";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <title>soClub</title>
      </Head>
      <main>
        <EventList />
      </main>
    </>
  );
}
