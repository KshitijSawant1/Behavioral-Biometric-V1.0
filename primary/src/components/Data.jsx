import React, { useEffect, useState } from "react";

const Data = () => {
  const [visibleFields, setVisibleFields] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedFields = localStorage.getItem("visible_fields");
    const userId = localStorage.getItem("secondary_userID");

    if (!userId) {
      setError("No user ID found in session. Please log in again.");
      setLoading(false);
      return;
    }

    if (!savedFields) {
      setError("No visible field data found. Please regenerate your block.");
      setLoading(false);
      return;
    }

    try {
      const parsed = JSON.parse(savedFields);
      console.log("✅ Visible Fields Retrieved:", parsed);
      setVisibleFields(parsed);
    } catch (err) {
      setError("Error reading visible fields.");
      console.error("❌ Parsing error:", err);
    } finally {
      setLoading(false);
    }
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
          {Object.entries(visibleFields).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </label>
              <p className="mt-1 text-gray-900">{value || "N/A"}</p>
            </div>
          ))}

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
