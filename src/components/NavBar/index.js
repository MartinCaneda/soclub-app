import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function NavBar() {
  const { data: session } = useSession()
  return (
    <nav className="h-full">
      {session ? (
        <ul className="h-full flex flex-col justify-between">
          <li className="nav-button" style={{ paddingTop: "85px" }}>
            <Link href="/" className="h-full w-full flex justify-center items-center">
              <img src="/resources/house.svg" alt="Home" className="w-10 h-10 hover:bg-gray-200 rounded-full" />
            </Link>
          </li>
          <li className="nav-button">
            <Link href="/profile" className="h-full w-full flex justify-center items-center">
              <img src="/resources/account.svg" alt="Home" className="w-10 h-10 hover:bg-gray-200 rounded-full" />
            </Link>
          </li>

          <li className="nav-button">
            <button
              className="w-full h-full flex justify-center items-center"
              style={{ paddingBottom: "85px" }}
              onClick={() => signOut()}
            >
              <img src="/resources/logout.svg" alt="Sign in" className="w-10 h-10 hover:bg-gray-200 rounded-full" />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="h-full flex flex-col justify-between">
          <li className="nav-button" style={{ paddingTop: "85px" }}>
            <Link href="/" className="h-full w-full flex justify-center items-center">
              <img src="/resources/house.svg" alt="Home" className="w-10 h-10 hover:bg-gray-200 rounded-full" />
            </Link>
          </li>
          <button
            className=" w-full h-full flex justify-center items-center"
            style={{ paddingBottom: "85px" }}
            onClick={() => signIn()}
          >
            <img src="/resources/login.svg" alt="Sign in" className="w-10 h-10 hover:bg-gray-200 rounded-full" />
          </button>
        </ul>
      )}
    </nav>
  )
}
