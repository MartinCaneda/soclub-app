import Profile from "@/components/ProfileInfo";
import MyEvents from "@/components/UserEvents";
import { getSession } from "next-auth/react";

export default function MyProfile({ userId }) {
  return (
    <>
      <Profile />
      <MyEvents userId={userId} />
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const userId = session?.user?.userId || null;

  return {
    props: {
      userId,
    },
  };
}
