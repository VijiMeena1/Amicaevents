import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-md mx-auto my-8 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-2xl font-bold text-green-600 mb-4">
        Order Created Successfully!
      </h1>
      <p className="text-gray-700">Thank you for your order. We will process it soon.</p>

      <button
        className="mt-6 bg-[#00A4EF] hover:bg-[#0989c9] text-white font-bold py-2 px-6 rounded"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
}
