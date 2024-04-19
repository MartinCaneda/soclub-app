import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {session && (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/create-event">Create Event</Link>
            </li>
            <li>
              <Link href="/map">Map</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
