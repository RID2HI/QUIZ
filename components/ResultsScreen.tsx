import React from 'react';
import { LeaderboardEntry } from '../types';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  time: number;
  leaderboard: LeaderboardEntry[];
  currentUser: string;
  onRestart: () => void;
}

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, time, leaderboard, currentUser, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedback = () => {
    if (percentage === 100) return "Perfect Score! You're a genius!";
    if (percentage >= 80) return "Excellent work!";
    if (percentage >= 60) return "Good job!";
    if (percentage >= 40) return "Not bad, keep practicing!";
    return "Better luck next time!";
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700 text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
      <p className="text-lg text-indigo-400 mb-6">{getFeedback()}</p>
      
      <div className="mb-6 bg-slate-900/50 p-4 rounded-lg grid grid-cols-3 divide-x divide-slate-700">
        <div>
            <p className="text-sm text-slate-400 uppercase">Score</p>
            <p className="text-3xl font-bold text-white mt-1">{score}/{totalQuestions}</p>
        </div>
        <div>
            <p className="text-sm text-slate-400 uppercase">Percentage</p>
            <p className="text-3xl font-bold text-white mt-1">{percentage}%</p>
        </div>
        <div>
            <p className="text-sm text-slate-400 uppercase">Time</p>
            <p className="text-3xl font-bold text-white mt-1">{formatTime(time)}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">Leaderboard</h3>
        <div className="max-h-60 overflow-y-auto bg-slate-900/50 rounded-lg p-2">
            <table className="w-full text-left">
                <thead className="sticky top-0 bg-slate-900">
                    <tr>
                        <th className="p-2 text-sm text-slate-400 uppercase">Rank</th>
                        <th className="p-2 text-sm text-slate-400 uppercase">Name</th>
                        <th className="p-2 text-sm text-slate-400 uppercase">Score</th>
                        <th className="p-2 text-sm text-slate-400 uppercase">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((entry, index) => (
                        <tr key={index} className={`border-t border-slate-800 ${entry.name === currentUser ? 'bg-indigo-900/50' : ''}`}>
                           <td className="p-2 font-semibold">#{index + 1}</td>
                           <td className="p-2">{entry.name}</td>
                           <td className="p-2">{entry.score}</td>
                           <td className="p-2">{formatTime(entry.time)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full mt-8 py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultsScreen;
