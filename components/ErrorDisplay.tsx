
import React from 'react';

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg shadow-lg text-center" role="alert">
      <strong className="font-bold">Oops! Something went wrong.</strong>
      <p className="block sm:inline mt-2 sm:mt-0 sm:ml-2">{message}</p>
      <button 
        onClick={onRetry}
        className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-red-500 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorDisplay;
