import Head from "next/head";
import EventList from "@/components/EventList";

export default function Home() {
  return (
    <>
      <Head>
        <title>soClub</title>
      </Head>
      <main>
        <h1>Homepage</h1>
        <EventList />
      </main>
    </>
  );
}
