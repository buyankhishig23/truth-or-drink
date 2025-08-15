"use client";
import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../data/questions";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [drinksCount, setDrinksCount] = useState(0);

  const categories = [...new Set(questions.map((q) => q.category))];

  const startGame = (category) => {
    setSelectedCategory(category);
    const filtered = questions.filter((q) => q.category === category);
    setFilteredQuestions(filtered);
    setCurrentIndex(0);
    setAskedQuestions([]);
    setDrinksCount(0);
  };

  const playSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  const fireConfetti = () => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1b1"];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h - h,
        r: Math.random() * 6 + 4,
        d: Math.random() * 50 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10,
        tiltAngle: 0,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05
      });
    }

    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
        ctx.stroke();
      });

      angle += 0.01;
      particles.forEach((p) => {
        p.tiltAngle += p.tiltAngleIncrement;
        p.y += (Math.cos(angle + p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(angle);
        p.tilt = Math.sin(p.tiltAngle) * 15;

        if (p.y > h) {
          p.y = -10;
          p.x = Math.random() * w;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
    setTimeout(() => document.body.removeChild(canvas), 3000);
  };

  const nextQuestion = () => {
    if (askedQuestions.length >= filteredQuestions.length) {
      fireConfetti();
      return;
    }

    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * filteredQuestions.length);
    } while (askedQuestions.includes(nextIdx));

    setAskedQuestions([...askedQuestions, nextIdx]);
    setCurrentIndex(nextIdx);
    
  };

  const drink = () => {
    setDrinksCount(drinksCount + 1);
    playSound("/next.mp3");
  };

  const backToCategories = () => {
    setSelectedCategory("");
    setFilteredQuestions([]);
    setAskedQuestions([]);
    setCurrentIndex(0);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {!selectedCategory ? (
          <div className="bg-black/40 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl text-center">
            <h1
              className="text-[48px] md:text-[64px] font-extrabold mb-12 text-white"
              style={{
                textShadow:
                  "0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff",
              }}
            >
              Асуултын төрлөө сонго
            </h1>

            <div className="flex gap-12 justify-center flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => startGame(cat)}
                  className="flex items-center justify-center font-extrabold
                        w-32 h-32 md:w-40 md:h-40 rounded-full
                        text-[16px] md:text-[20px] text-white
                        shadow-[0_0_20px_rgba(255,215,0,0.6)]
                        transition-transform duration-300 transform
                        hover:scale-105 hover:-translate-y-1
                        focus:outline-none focus:ring-4 focus:ring-yellow-400"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffb703, #f48c06, #d00000)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <QuestionCard
              key={currentIndex} // triggers flip
              question={filteredQuestions[currentIndex].text}
              onNext={nextQuestion}
              onBack={backToCategories}
              onDrink={drink}
            />
            {/* <div className="mt-6 text-white font-bold">
              Уусан тоо: {drinksCount}
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}
