import Head from "next/head";
import EventList from "@/components/EventList";

export default function Home() {
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
