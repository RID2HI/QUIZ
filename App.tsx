import React, { useState, useEffect, useRef } from 'react';
import { Question, GameState, LeaderboardEntry } from './types';
import { APP_TITLE, allQuestions, LEADERBOARD_KEY, JOINED_USERS_KEY } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import LobbyScreen from './components/LobbyScreen';
import CountdownScreen from './components/CountdownScreen';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentUser, setCurrentUser] = useState('');
  const [timer, setTimer] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const timerIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    try {
        const storedLeaderboard = localStorage.getItem(LEADERBOARD_KEY);
        if (storedLeaderboard) {
            setLeaderboard(JSON.parse(storedLeaderboard));
        }
    } catch (error) {
        console.error("Failed to load leaderboard from localStorage", error);
        setLeaderboard([]);
    }
  }, []);

  const startTimer = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = window.setInterval(() => {
        setTimer(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
    }
  };

  const handleJoin = () => {
    setGameState('login');
  };

  const handleLogin = (name: string) => {
     try {
        const storedUsers = localStorage.getItem(JOINED_USERS_KEY);
        const users: string[] = storedUsers ? JSON.parse(storedUsers) : [];
        if (!users.includes(name)) {
            users.push(name);
            localStorage.setItem(JOINED_USERS_KEY, JSON.stringify(users));
        }
    } catch (error) {
        console.error("Failed to update joined users list in localStorage", error);
    }

    setCurrentUser(name);
    const processedQuestions = shuffleArray(allQuestions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));
    setQuestions(processedQuestions);
    setGameState('waiting');
  };

  const handleReady = () => {
    setGameState('countdown');
  };
  
  const handleCountdownFinish = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimer(0);
    setGameState('playing');
    startTimer();
  };
  
  const updateLeaderboard = (finalScore: number, finalTime: number) => {
    const newEntry: LeaderboardEntry = { name: currentUser, score: finalScore, time: finalTime };
    const updatedLeaderboard = [...leaderboard, newEntry]
        .sort((a, b) => {
            if (a.score !== b.score) {
                return b.score - a.score; // Higher score first
            }
            return a.time - b.time; // Lower time first
        });
    
    setLeaderboard(updatedLeaderboard);
    try {
        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updatedLeaderboard));
    } catch (error) {
        console.error("Failed to save leaderboard to localStorage", error);
    }
  };

  const handleAnswer = (selectedAnswer: string) => {
    let newScore = score;
    if (questions[currentQuestionIndex].correctAnswer === selectedAnswer) {
      newScore = score + 1;
      setScore(newScore);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      stopTimer();
      setGameState('finished');
      updateLeaderboard(newScore, timer + 1); // +1 to account for the last second tick
    }
  };

  const restartQuiz = () => {
    const processedQuestions = shuffleArray(allQuestions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));
    setQuestions(processedQuestions);
    setGameState('waiting');
    setTimer(0);
  };
  
  const renderContent = () => {
    switch (gameState) {
      case 'welcome':
        return <WelcomeScreen onJoin={handleJoin} />;
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'waiting':
        return <LobbyScreen onReady={handleReady} currentUser={currentUser} />;
       case 'countdown':
        return <CountdownScreen onCountdownFinish={handleCountdownFinish} />;
      case 'playing':
        return (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            timer={timer}
          />
        );
      case 'finished':
        return (
          <ResultsScreen
            score={score}
            totalQuestions={questions.length}
            time={timer}
            leaderboard={leaderboard}
            currentUser={currentUser}
            onRestart={restartQuiz}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 font-sans bg-grid-slate-800/[0.2]">
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-transparent to-slate-900 z-0"></div>
       <div className="relative z-10 w-full flex flex-col items-center justify-center">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                    {APP_TITLE}
                </h1>
            </header>
            {renderContent()}
       </div>
       <footer className="absolute bottom-4 text-center text-slate-500 text-sm z-10">
          <p>QUIZ BY RIDHDHI JAIN FOR BHOPAL</p>
       </footer>
    </main>
  );
};

export default App;