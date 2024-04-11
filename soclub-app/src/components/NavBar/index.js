import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <li>
        <Link href="events">Events</Link>
      </li>
      <li>
        <Link href="/my-events">My Events</Link>
      </li>
      <li>
        <Link href="/profile">My profile</Link>
      </li>
      <li>
        <Link href="/map">Map</Link>
      </li>
    </nav>
  );
}
