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
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/event-map">Map</Link>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
