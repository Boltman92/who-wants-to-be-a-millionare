import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import gameConfig from '@/app/gameConfig.json';

interface GameStoreState {
  currentQuestionIndex: number;
  score: number;
  questions: typeof gameConfig.questions;
  // eslint-disable-next-line no-unused-vars
  nextQuestion: (isCorrect: boolean, sum: number) => void;
  setScore: () => void;
}

const initialState = {
  currentQuestionIndex: 0,
  score: 0,
  questions: gameConfig.questions,
};

const useGameStore = create<GameStoreState>()(
  persist(
    (set) => ({
      ...initialState,
      nextQuestion: (isCorrect: boolean, sum: number) =>
        set((state) => {
          if (!isCorrect) {
            return {
              score: state.score,
              currentQuestionIndex: 0,
            };
          }
          return {
            score: state.score + sum,
            currentQuestionIndex: state.currentQuestionIndex + 1,
          };
        }),
      setScore: () =>
        set(() => {
          return {
            score: 0,
            currentQuestionIndex: 0,
          };
        }),
    }),
    {
      name: 'game-store', // Key for localStorage (optional, for persistence)
    }
  )
);

export default useGameStore;
