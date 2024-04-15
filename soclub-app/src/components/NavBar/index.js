import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/create-events">Create Events</Link>
        </li>
      </ul>
    </nav>
  );
}
