'use client'
import { useState } from 'react';

const MetricProcessor = () => {
  const [userId, setUserId] = useState('');
  const [metricType, setMetricType] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!userId || !metricType || !value) {
      setMessage('All fields are required.');
      return;
    }

    // Logic to process the metrics
    if (metricType === 'steps') {
      if (value < 5000) {
        setMessage('You need to walk more! Aim for at least 10,000 steps a day.');
      } else if (value < 10000) {
        setMessage('Good job! You’re getting there. Try to hit 10,000 steps daily.');
      } else {
        setMessage('Fantastic! You’re crushing it with your steps!');
      }
    } else if (metricType === 'heart') {
      if (value < 60) {
        setMessage('Your heart rate is low. Consider consulting a doctor.');
      } else if (value >= 60 && value <= 100) {
        setMessage('Your heart rate is normal. Keep it steady!');
      } else {
        setMessage('Your heart rate is high. Try relaxing or consult a doctor.');
      }
    } else if (metricType === 'mood') {
      if (value === '1') {
        setMessage('Feeling down? Try taking a walk or talking to a friend.');
      } else if (value === '2') {
        setMessage('You’re doing okay. A little mindfulness can help improve your mood.');
      } else if (value === '3') {
        setMessage('Feeling great! Keep up the positive vibes.');
      } else {
        setMessage('Invalid mood value. Enter 1 for sad, 2 for neutral, or 3 for happy.');
      }
    } else {
      setMessage('Unknown metric type.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md m-14">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Health Tips Bot</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="metricType" className="block text-sm font-medium text-gray-700">
            Metric Type
          </label>
          <select
            id="metricType"
            value={metricType}
            onChange={(e) => setMetricType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Metric Type</option>
            <option value="steps">Steps</option>
            <option value="heart">Heart Rate</option>
            <option value="mood">Mood</option>
          </select>
        </div>
        <div>
          <label htmlFor="value" className="block text-sm font-medium text-gray-700">
            Value
          </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
      {message && (
        <div className="mt-4 p-4 bg-gray-100 border rounded-md">
          <p className="text-gray-800">{message}</p>
        </div>
      )}
    </div>
  );
};

export default MetricProcessor;
