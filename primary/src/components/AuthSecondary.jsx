import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore"; // ✅ Update here

const AuthSecondary = () => {
  const [blockId, setBlockId] = useState("");
  const navigate = useNavigate();

  // ✅ Paste the updated handleSignin function here
  const handleSignin = async (e) => {
    e.preventDefault();
    if (!blockId.trim()) {
      alert("Please enter your Personal Block ID");
      return;
    }

    try {
      const blockRef = doc(db, "blocks", blockId.trim());
      const blockSnap = await getDoc(blockRef);

      if (blockSnap.exists()) {
        const blockData = blockSnap.data();
        const userId = blockData.userID;

        localStorage.setItem("secondary_userID", userId);
        navigate("/data");
      } else {
        alert("Invalid Block ID. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying Block ID:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-8 transform hover:scale-[1.01] transition-transform duration-300">
        <div>
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Welcome to Blockchain Demo
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your Personal Block ID to continue
          </p>
        </div>

        <form onSubmit={handleSignin} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Personal Block ID
            </label>
            <input
              type="text"
              value={blockId}
              onChange={(e) => setBlockId(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthSecondary;
