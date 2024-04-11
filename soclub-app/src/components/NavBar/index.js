import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <li>
        <Link href="../Events">Events</Link>
      </li>
      <li>
        <Link href="../MyEvents">My Events</Link>
      </li>
      <li>
        <Link href="../ProfilePage">My profile</Link>
      </li>
      <li>
        <Link href="../map">Map</Link>
      </li>
    </nav>
  );
}
