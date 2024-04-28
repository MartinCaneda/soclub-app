import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function NavBar() {
  const router = useRouter()
  const { data: session } = useSession()

  const isActiveRoute = (path) => {
    return router.pathname === path
  }

  return (
    <nav className="h-full">
      {session ? (
        <ul className="h-full flex flex-col justify-between">
          <li className="nav-button" style={{ paddingTop: "85px" }}>
            <Link href="/" className="h-full w-full flex justify-center items-center">
              <img
                src="/resources/house.svg"
                alt="Home"
                className={`w-10 h-10 ${isActiveRoute("/") ? "bg-gray-400" : ""} rounded-full hover:bg-gray-200`}
              />
            </Link>
          </li>
          <li className="nav-button">
            <Link href="/profile" className="h-full w-full flex justify-center items-center">
              <img
                src="/resources/account.svg"
                alt="Home"
                className={`w-10 h-10 ${isActiveRoute("/profile") ? "bg-gray-400" : ""} rounded-full hover:bg-gray-200`}
              />
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
