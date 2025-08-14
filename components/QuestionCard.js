"use client";
import { useEffect, useState } from "react";

export default function QuestionCard({ question, onNext, onBack }) {
  const [displayedText, setDisplayedText] = useState(question);

  useEffect(() => {
    setDisplayedText(question); // show full text immediately
  }, [question]);

  return (
    <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg mx-auto text-center border border-white/20 transform transition-all duration-500">
      <h2 className="text-2xl md:text-5xl font-extrabold mb-12 text-white drop-shadow-lg min-h-[6rem] flex justify-center items-center">
        {displayedText}
      </h2>

      <div className="flex flex-col sm:flex-row justify-around gap-6">
        <button
          onClick={onNext}
          className="text-white font-extrabold px-16 md:px-24 py-6 md:py-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-50"
          style={{ background: "#efc04a" }}
        >
          Дараах асуулт
        </button>

        <button
          onClick={onBack}
          className="bg-gray-700 hover:bg-gray-800 text-white font-extrabold px-16 md:px-24 py-6 md:py-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-6 focus:ring-gray-400 focus:ring-opacity-50"
        >
          Буцах
        </button>
      </div>
    </div>
  );
}
