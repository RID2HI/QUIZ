export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

export type GameState = 'welcome' | 'login' | 'waiting' | 'countdown' | 'playing' | 'finished';

export interface LeaderboardEntry {
  name: string;
  score: number;
  time: number; // in seconds
}