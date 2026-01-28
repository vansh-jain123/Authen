import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>

        <div className="space-y-3 text-gray-700">
          <p><b>ID:</b> {user._id}</p>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>
          <p>
            <b>Joined:</b>{" "}
            {new Date(user.createdAt).toDateString()}
          </p>
        </div>

        <button
          onClick={logout}
          className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
