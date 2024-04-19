import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  if (!session) {
    return <div>Please sign in</div>;
  }

  const { user } = session;

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <img src={user.image} alt="Profile Picture" />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
