import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
  timer: number;
}

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, questionNumber, totalQuestions, timer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    setTimeout(() => onAnswer(option), 1000); // Wait for feedback animation
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-slate-700 hover:bg-indigo-600';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-600';
    }
    if (option === selectedAnswer) {
      return 'bg-red-600';
    }
    return 'bg-slate-700 opacity-50';
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700">
      <div className="flex justify-between items-center mb-6 text-center">
         <div>
            <p className="text-sm font-medium text-slate-400 mb-2 tracking-wider uppercase">
            {question.category}
            </p>
            <p className="text-indigo-400 font-semibold">
            Question {questionNumber} / {totalQuestions}
            </p>
        </div>
        <div className="text-right">
             <p className="text-sm font-medium text-slate-400 mb-2 tracking-wider uppercase">
                TIME
            </p>
            <p className="text-indigo-400 font-semibold text-xl">
                {formatTime(timer)}
            </p>
        </div>
      </div>

        <h3 className="text-2xl font-bold text-white mt-2 text-center">{question.question}</h3>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 disabled:cursor-not-allowed ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;