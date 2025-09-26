import React from 'react';

interface WelcomeScreenProps {
  onJoin: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onJoin }) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(window.location.href)}`;

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Join the Quiz!</h2>
      <p className="text-slate-300 mb-6">Scan the QR code with your device or click the button below to start.</p>
      
      <div className="flex justify-center mb-8 bg-white p-4 rounded-lg">
        <img src={qrCodeUrl} alt="Quiz QR Code" width="250" height="250" />
      </div>

      <button
        onClick={onJoin}
        className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Join on this Device
      </button>
    </div>
  );
};

export default WelcomeScreen;