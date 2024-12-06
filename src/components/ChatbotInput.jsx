"use client";
import { useState } from "react";

const ChatbotInput = () => {
  const [userId, setUserId] = useState("");
  const [metricType, setMetricType] = useState(""); // Default value is empty
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error or message
    setError(null);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/metric-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, metricType, value }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg m-14">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Submit Metric Data
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">User ID</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Metric Type</label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={metricType}
            onChange={(e) => setMetricType(e.target.value)}
            required
          >
            <option value="steps">Steps</option>
            <option value="heart">Heart Rate</option>
            <option value="mood">Mood</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Value</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {message && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 border-l-4 border-green-600 rounded-md">
          <strong>Message: </strong>
          {message}
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 border-l-4 border-red-600 rounded-md">
          <strong>Error: </strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default ChatbotInput;
