import NavBar from "./NavBar/index.js";
import Head from "next/head.js";

export default function Layout() {
  return (
    <>
      <Head>
        <title>SoClub-App</title>
      </Head>
      <NavBar />
    </>
  );
}
