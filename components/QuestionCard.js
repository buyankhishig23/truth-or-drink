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
      className={`bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-md mx-auto text-center border border-white/20 transform transition-all duration-500 ${
        fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
      } animate-slideIn`}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-lg">
        {question}
      </h2>
      <div className="flex justify-around gap-4">
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-200"
        >
          Дараах асуулт
        </button>
        <button
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-200"
        >
          Буцах
        </button>
      </div>
    </div>
  );
}
