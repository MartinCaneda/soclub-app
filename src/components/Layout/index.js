import NavBar from "../NavBar";
import LogIn from "../Login";

export default function Layout({ children }) {
  return (
    <>
      <LogIn />
      <NavBar />
      <main>{children}</main>
    </>
  );
}
