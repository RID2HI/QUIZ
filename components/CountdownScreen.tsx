import React, { useState, useEffect } from 'react';

interface CountdownScreenProps {
  onCountdownFinish: () => void;
}

const CountdownScreen: React.FC<CountdownScreenProps> = ({ onCountdownFinish }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
        // After "Go!", wait a moment before starting
        const finishTimer = setTimeout(onCountdownFinish, 700);
        return () => clearTimeout(finishTimer);
    }
  }, [count, onCountdownFinish]);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700" style={{minHeight: '300px'}}>
      <p className="text-2xl text-slate-300 mb-4">The Quiz Starts In...</p>
      <div className="text-9xl font-extrabold text-white">
        {count > 0 ? count : 'Go!'}
      </div>
    </div>
  );
};

export default CountdownScreen;
