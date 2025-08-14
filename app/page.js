"use client";
import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../data/questions";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const categories = [...new Set(questions.map(q => q.category))];

  const startGame = (category) => {
    setSelectedCategory(category);
    const filtered = questions.filter(q => q.category === category);
    setFilteredQuestions(filtered);
    setCurrentIndex(0);
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const backToCategories = () => {
    setSelectedCategory("");
    setFilteredQuestions([]);
    setCurrentIndex(0);
  };

  return (
    <div className="relative w-full h-full">
      {/* Fullscreen background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>

      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {!selectedCategory ? (
          <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl text-center animate-fadeIn">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-10 text-white drop-shadow-lg animate-pulse">
              Асуултын төрлөө сонго
            </h1>

            <div className="flex gap-4 md:gap-6 justify-center flex-wrap animate-slideIn">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => startGame(cat)}
                  className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-3 md:py-4 px-5 md:px-6 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-50"
                >
                  {cat}
                  <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-2xl"></span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <QuestionCard
            question={filteredQuestions[currentIndex].text}
            onNext={nextQuestion}
            onBack={backToCategories}
          />
        )}
      </div>
    </div>
  );
}
