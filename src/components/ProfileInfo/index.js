import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  if (!session) {
    return <div>Please sign in</div>;
  }

  const { user } = session;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex items-center space-x-4">
        <img src={user.image} alt="Profile Picture" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600 flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
