"use client";
import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../data/questions";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const categories = [...new Set(questions.map((q) => q.category))];

  const startGame = (category) => {
    setSelectedCategory(category);
    const filtered = questions.filter((q) => q.category === category);
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
          <div className="bg-black/40 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-16 text-white drop-shadow-lg">
              Асуултын төрлөө сонго
            </h1>

            <div className="flex gap-10 justify-center flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => startGame(cat)}
                  className="relative overflow-hidden font-extrabold rounded-3xl text-4xl md:text-6xl px-16 md:px-24 py-8 md:py-12 text-white shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-6 focus:ring-yellow-400"
                  style={{ background: "#dd9e20" }}
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
