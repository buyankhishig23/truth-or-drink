"use client";
import { useEffect, useState } from "react";

export default function QuestionCard({ question, onNext, onBack, onDrink }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(true);
    const timer = setTimeout(() => setFlipped(false), 800);
    return () => clearTimeout(timer);
  }, [question]);

  const buttonStyle = (gradient, shadow) => ({
    background: gradient,
    boxShadow: shadow,
    width: "180px",   // slightly smaller
    height: "60px",   // slightly smaller
    fontSize: "18px", // smaller text
  });

  return (
    <div
      className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md mx-auto text-center transform transition-transform duration-700 ${
        flipped ? "rotate-y-180" : ""
      }`}
      style={{ perspective: "1000px" }}
    >
      <h2
        className="text-xl md:text-3xl font-extrabold mb-8 text-gray-900 min-h-[4rem] flex justify-center items-center"
      >
        {question}
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <button
    onClick={onNext}
    className="text-white font-extrabold rounded-2xl shadow-md transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
    style={buttonStyle(
      "linear-gradient(135deg, #ffb703, #f48c06, #d00000)", // warm orange gradient
      "0 0 4px #ffb703, 0 0 8px #f48c06"
    )}
  >
    Дараах асуулт
  </button>

  <button
    onClick={onDrink}
    className="text-white font-extrabold rounded-2xl shadow-md transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
    style={buttonStyle(
      "linear-gradient(135deg, #ff7f50, #ff9f1c, #ffb703)", // softer orange gradient
      "0 0 4px #ff7f50, 0 0 8px #ff9f1c"
    )}
  >
    Уух
  </button>

  <button
    onClick={onBack}
    className="text-white font-extrabold rounded-2xl shadow-md transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
    style={buttonStyle(
      "linear-gradient(135deg, #d97706, #b45309, #78350f)", // darker orange/brown
      "0 0 4px #d97706, 0 0 8px #b45309"
    )}
  >
    Буцах
  </button>
</div>

    </div>
  );
}
