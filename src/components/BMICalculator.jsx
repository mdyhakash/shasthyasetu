"use client";
import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [comment, setComment] = useState("");

  // Function to calculate BMI and provide funny comment
  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight && height) {
      const bmiValue = weight / (height * height); // BMI formula using height in meters
      setBmi(bmiValue.toFixed(1)); // Round to 1 decimal place

      // Funny comments based on BMI
      let funnyComment = "";
      if (bmiValue < 18.5) {
        funnyComment = "You’re a little too slim! Eat a burger... or two!";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        funnyComment = "You’re in the healthy range! Keep it up, you look fab!";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        funnyComment =
          "You’re a bit on the heavier side... maybe less pizza, more salad?";
      } else {
        funnyComment =
          "Whoa, you’re in the heavy league! Time to hit the gym, or just blame it on the pandemic weight!";
      }

      setComment(funnyComment);
    } else {
      alert("Please fill in both weight and height!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg m-14">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        BMI Calculator
      </h2>
      <form onSubmit={calculateBMI}>
        <div className="mb-4">
          <label className="block text-gray-700">Weight (kg)</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Height (m)</label>
          <input
            type="number"
            step="any" // Allow decimal values
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-gray-800">Your BMI: {bmi}</p>
          <p className="text-gray-600 mt-2">{comment}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
