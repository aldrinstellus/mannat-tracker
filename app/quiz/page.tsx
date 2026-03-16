"use client";

import { useState, useCallback, useMemo } from "react";
import { questions } from "../data/quiz";

const QUESTIONS_PER_ROUND = 10;

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizPage() {
  const [roundQuestions, setRoundQuestions] = useState(() =>
    shuffleArray(questions).slice(0, QUESTIONS_PER_ROUND)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = roundQuestions[currentIndex];

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(optionIndex);
      if (optionIndex === currentQuestion.correctIndex) {
        setScore((prev) => prev + 1);
      }
    },
    [selectedAnswer, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= QUESTIONS_PER_ROUND) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  }, [currentIndex]);

  const handleRestart = useCallback(() => {
    setRoundQuestions(shuffleArray(questions).slice(0, QUESTIONS_PER_ROUND));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  }, []);

  const scorePercentage = useMemo(
    () => Math.round((score / QUESTIONS_PER_ROUND) * 100),
    [score]
  );

  const getScoreMessage = () => {
    if (scorePercentage === 100) return "Perfect score! You are a true Mannat superfan!";
    if (scorePercentage >= 80) return "Excellent! You really know your Mannat!";
    if (scorePercentage >= 60) return "Good job! You follow the show well.";
    if (scorePercentage >= 40) return "Not bad! But there is more to learn.";
    return "Time to rewatch some episodes!";
  };

  if (isFinished) {
    return (
      <div className="min-h-screen px-6 py-10 max-w-2xl mx-auto">
        <div className="bg-bg-card border border-gold/30 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">
            {scorePercentage >= 80 ? "🏆" : scorePercentage >= 50 ? "⭐" : "📺"}
          </div>
          <h1 className="text-3xl font-bold gold-text mb-2">Quiz Complete!</h1>
          <p className="text-5xl font-bold text-text-primary my-6">
            {score}
            <span className="text-2xl text-text-muted"> / {QUESTIONS_PER_ROUND}</span>
          </p>
          <div className="w-full bg-burgundy/20 rounded-full h-3 mb-4">
            <div
              className="h-3 rounded-full transition-all duration-700"
              style={{
                width: `${scorePercentage}%`,
                background: `linear-gradient(90deg, var(--burgundy), var(--gold))`,
              }}
            />
          </div>
          <p className="text-text-secondary mb-8">{getScoreMessage()}</p>
          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-gradient-to-r from-burgundy to-burgundy-light text-text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <span className="text-gold text-sm tracking-[0.2em] uppercase">Challenge</span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">Mannat Quiz</h1>
        <p className="text-text-secondary mt-2">Test your knowledge of the show</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 bg-burgundy/20 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / QUESTIONS_PER_ROUND) * 100}%`,
              background: `linear-gradient(90deg, var(--burgundy), var(--gold))`,
            }}
          />
        </div>
        <span className="text-sm text-text-muted whitespace-nowrap">
          {currentIndex + 1} / {QUESTIONS_PER_ROUND}
        </span>
      </div>

      {/* Score */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs px-3 py-1 rounded-full bg-burgundy/20 border border-burgundy/40 text-text-secondary">
          {currentQuestion.category}
        </span>
        <span className="text-sm text-gold font-semibold">
          Score: {score}
        </span>
      </div>

      {/* Question Card */}
      <div className="bg-bg-card border border-burgundy/30 rounded-xl p-6 mb-6">
        <h2 className="text-lg md:text-xl text-text-primary font-semibold leading-relaxed">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, idx) => {
          let optionStyle = "border-burgundy/30 bg-bg-card/50 hover:border-gold/50";
          if (selectedAnswer !== null) {
            if (idx === currentQuestion.correctIndex) {
              optionStyle = "border-green-500/70 bg-green-500/10";
            } else if (idx === selectedAnswer) {
              optionStyle = "border-red-500/70 bg-red-500/10";
            } else {
              optionStyle = "border-burgundy/20 bg-bg-card/30 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selectedAnswer !== null}
              className={`quiz-option w-full text-left px-5 py-4 rounded-lg border ${optionStyle} cursor-pointer disabled:cursor-default`}
            >
              <span className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full border border-current text-xs font-bold flex-shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm text-text-primary">{option}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      {selectedAnswer !== null && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-2.5 bg-gradient-to-r from-burgundy to-burgundy-light text-text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            {currentIndex + 1 >= QUESTIONS_PER_ROUND ? "See Results" : "Next Question"} &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
