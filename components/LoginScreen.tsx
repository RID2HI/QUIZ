import React, { useState } from 'react';
import { ACCESS_CODE } from '../constants';

interface LoginScreenProps {
  onLogin: (name: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim().toUpperCase() === ACCESS_CODE) {
      onLogin(name.trim());
    } else {
      setError('Invalid Access Code. Please try again.');
    }
  };

  const isButtonDisabled = !name.trim() || !accessCode.trim();

  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="accessCode" className="block text-sm font-medium text-slate-300 mb-2">
            Access Code
          </label>
          <input
            type="password"
            id="accessCode"
            value={accessCode}
            onChange={(e) => {
                setAccessCode(e.target.value)
                setError('');
            }}
            className={`w-full px-4 py-2 bg-slate-900 border rounded-md text-white focus:outline-none focus:ring-2  transition ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'}`}
            placeholder="Enter the access code"
            required
          />
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
        <button
          type="submit"
          disabled={isButtonDisabled}
          className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 disabled:bg-slate-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Enter Quiz
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
