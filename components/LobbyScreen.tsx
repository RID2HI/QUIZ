import React, { useState, useEffect } from 'react';
import { JOINED_USERS_KEY } from '../constants';

interface LobbyScreenProps {
  onReady: () => void;
  currentUser: string;
}

const LobbyScreen: React.FC<LobbyScreenProps> = ({ onReady, currentUser }) => {
  const [joinedUsers, setJoinedUsers] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsers = () => {
      try {
        const users = localStorage.getItem(JOINED_USERS_KEY);
        if (users) {
          setJoinedUsers(JSON.parse(users));
        }
      } catch (error) {
        console.error("Failed to parse joined users from localStorage", error);
        setJoinedUsers([]);
      }
    };

    fetchUsers(); 
    
    const intervalId = setInterval(fetchUsers, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700 text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Waiting Room</h2>
      <p className="text-lg text-slate-300 mb-6">Welcome, {currentUser}! Waiting for the facilitator to start the quiz.</p>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">{joinedUsers.length} Player(s) Joined</h3>
        <div className="max-h-60 overflow-y-auto bg-slate-900/50 rounded-lg p-4">
          {joinedUsers.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {joinedUsers.map((user, index) => (
                <div key={index} className="bg-slate-700 p-2 rounded-md text-white truncate">
                  {user}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400 p-4">You're the first one here!</p>
          )}
        </div>
      </div>

      <button
        onClick={onReady}
        className="w-full mt-8 py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        I'm Ready! Let's Go!
      </button>
    </div>
  );
};

export default LobbyScreen;