"use client";
import { useEffect, useState } from "react";

export default function QuestionCard({ question, onNext, onBack }) {
  const [displayedText, setDisplayedText] = useState(question);

  useEffect(() => {
    setDisplayedText(question);
  }, [question]);

  return (
    <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg mx-auto text-center border border-white/20 transform transition-all duration-500">
      <h2
        className="text-2xl md:text-5xl font-extrabold mb-12 text-white min-h-[6rem] flex justify-center items-center"
        style={{
          textShadow: "0 0 4px #ffffff, 0 0 8px #ffffff",
        }}
      >
        {displayedText}
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={onNext}
          className="text-white font-extrabold px-16 md:px-24 py-6 md:py-8 rounded-3xl shadow-md transform transition-all duration-300 hover:scale-101 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
          style={{
            background: "linear-gradient(135deg, #ffb703, #f48c06, #d00000)",
            boxShadow: "0 0 4px #ffb703, 0 0 8px #f48c06",
          }}
        >
          Дараах асуулт
        </button>

        <button
          onClick={onBack}
          className="bg-gray-700 text-white font-extrabold px-16 md:px-24 py-6 md:py-8 rounded-3xl shadow-md transform transition-all duration-300 hover:scale-101 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          style={{
            boxShadow: "0 0 4px #bbb, 0 0 8px #ddd",
          }}
        >
          Буцах
        </button>
      </div>
    </div>
  );
}
