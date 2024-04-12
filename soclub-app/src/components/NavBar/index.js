import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/MyEvents">My Events</Link>
        </li>
        <li>
          <Link href="/ProfilePage">My profile</Link>
        </li>
        <li>
          <Link href="/Map">Map</Link>
        </li>
      </ul>
    </nav>
  );
}
