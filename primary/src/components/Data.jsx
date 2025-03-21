import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Data = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("secondary_userID");
      if (!userId) {
        setError("No user ID found in session. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          setError("User data not found");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">User Data</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <p className="mt-1 text-gray-900">{userData?.firstName || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <p className="mt-1 text-gray-900">{userData?.lastName || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 text-gray-900">{userData?.email || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <p className="mt-1 text-gray-900">
              {localStorage.getItem("secondary_userID")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
