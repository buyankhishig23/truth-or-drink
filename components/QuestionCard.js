"use client";
import { useEffect, useState } from "react";

export default function QuestionCard({ question, onNext, onBack }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [question]);

  return (
    <div
      className={`bg-white/20 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl max-w-md mx-auto text-center border border-white/20 transform transition-all duration-500 ${
        fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
      } animate-slideIn`}
    >
      <h2 className="text-xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-lg">
        {question}
      </h2>
      <div className="flex flex-col sm:flex-row justify-around gap-4">
        <button
          onClick={onNext}
          className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold px-5 md:px-6 py-3 md:py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50"
        >
          Дараах асуулт
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-xl"></span>
        </button>
        <button
          onClick={onBack}
          className="relative overflow-hidden bg-gray-600 hover:bg-gray-700 text-white font-bold px-5 md:px-6 py-3 md:py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
        >
          Буцах
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-xl"></span>
        </button>
      </div>
    </div>
  );
}
