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
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-0"></div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {!selectedCategory ? (
          <div className="bg-black/50 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-white drop-shadow-lg animate-pulse">
              Асуултын төрлөө сонго
            </h1>

            <div className="flex gap-6 justify-center flex-wrap animate-slideIn">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => startGame(cat)}
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  {cat}
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
