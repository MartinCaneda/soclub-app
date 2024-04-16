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
          <li>
            <Link href="/create-events">Create Events</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
