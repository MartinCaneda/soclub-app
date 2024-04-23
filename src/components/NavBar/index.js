import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import LogIn from "@/components/Login"

export default function NavBar() {
  const { data: session } = useSession()
  return (
    <nav className="h-full">
      {session ? (
        <ul className="h-full flex flex-col justify-between">
          <li className="nav-button">
            <Link className="h-full w-full flex justify-center items-center" href="/">
              Home
            </Link>
          </li>
          <li className="nav-button">
            <Link className="h-full w-full flex justify-center items-center" href="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-button">
            <Link className="h-full w-full flex justify-center items-center" href="/create-event">
              Create Event
            </Link>
          </li>
          <li className="nav-button">
            {/*Signed in as {session.user.name} <br />*/}
            <button className="w-full h-full" onClick={() => signOut()}>
              Sign out
            </button>
          </li>
        </ul>
      ) : (
        <ul className="h-full flex flex-col justify-between">
          <li className="nav-button">
            <Link className="h-full w-full flex justify-center items-center" href="/">
              Home
            </Link>
          </li>
          <li className="nav-button">
            <button className="w-full h-full" onClick={() => signIn()}>
              Sign in
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}
