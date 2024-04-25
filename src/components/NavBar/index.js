import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function NavBar() {
  const { data: session } = useSession()
  return (
    <nav className="h-full">
      {session ? (
        <ul className="h-full flex flex-col justify-between">
          <li className="nav-button">
            <Link href="/" className="h-full w-full flex justify-center items-center">
              <img src="/resources/home.png" alt="Home" className="w-10 h-10" />
            </Link>
          </li>
          <li className="nav-button">
            <Link href="/profile" className="h-full w-full flex justify-center items-center">
              <img src="/resources/profile.png" alt="Home" className="w-10 h-10" />
            </Link>
          </li>

          <li className="nav-button">
            <button className="w-full h-full flex justify-center items-center" onClick={() => signOut()}>
              <img src="/resources/log-out.png" alt="Sign in" className="w-6 h-6" />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="h-full flex flex-col justify-between">
          <li className="nav-button">
            <Link href="/" className="h-full w-full flex justify-center items-center">
              <img src="/resources/home.png" alt="Home" className="w-10 h-10" />
            </Link>
          </li>
          <button className=" w-full h-full flex justify-center items-center" onClick={() => signIn()}>
            <img src="/resources/log-in.png" alt="Sign in" className="w- h-6" />
          </button>
        </ul>
      )}
    </nav>
  )
}
