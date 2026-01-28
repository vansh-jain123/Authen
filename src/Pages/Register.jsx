import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { replace: true });
    }
  }, [loading, user, navigate]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          User Profile
        </h2>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base">
          <ProfileRow label="User ID" value={user._id} />
          <ProfileRow label="Name" value={user.name} />
          <ProfileRow label="Email" value={user.email} />
          <ProfileRow label="Role" value={user.role} />
        </div>

        <button
          onClick={() => {
            logout();
            navigate("/login", { replace: true });
          }}
          className="mt-8 w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-2 gap-1">
      <span className="font-medium text-gray-600">{label}</span>
      <span className="text-gray-800 break-all">{value}</span>
    </div>
  );
}
