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
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {!selectedCategory ? (
          <div className="bg-black/40 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl text-center">
          <h1
            className="text-[48px] md:text-[64px] font-extrabold mb-12 text-white"
            style={{
              textShadow: "0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff"
            }}
          >
            Асуултын төрлөө сонго
          </h1>



          <div className="flex gap-6 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => startGame(cat)}
                className="relative overflow-hidden font-extrabold rounded-2xl
                          text-[20px] md:text-[30px] px-8 md:px-12 py-4 md:py-6
                          text-white shadow-[0_0_20px_rgba(255,215,0,0.6)]
                          transition-transform duration-300 transform
                          hover:scale-105 hover:-translate-y-1
                          focus:outline-none focus:ring-4 focus:ring-yellow-400"
                style={{
                  background: "linear-gradient(135deg, #ffb703, #f48c06, #d00000)",
                }}
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
