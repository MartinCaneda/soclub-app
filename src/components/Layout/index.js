import NavBar from "../NavBar"

export default function Layout({ children }) {
  return (
    <>
      <div className="h-screen  flex flex-row">
        <div className="h-full w-[15%] border-r-4 border-b-cyan-800">
          <NavBar />
        </div>
        <div className="h-full w-[85%]">
          <main className="p-10 h-full overflow-scroll">{children}</main>
        </div>
      </div>
    </>
  )
}
