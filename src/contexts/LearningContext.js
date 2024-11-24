import React, { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LearningContext = createContext();

export function LearningProvider({ children }) {
  const [learningData, setLearningData] = useLocalStorage('learning_progress', {
    totalScore: 0,
    maxPossibleScore: 0,
    solvedProblems: {},
    lastAccessed: null,
    streakDays: 0
  });

  const updateScore = useCallback((points) => {
    setLearningData(prev => ({
      ...prev,
      totalScore: prev.totalScore + points,
      maxPossibleScore: prev.maxPossibleScore + 20
    }));
  }, [setLearningData]);

  const calculateProgress = useCallback(() => {
    if (learningData.maxPossibleScore === 0) return 0;
    return Math.round((learningData.totalScore / learningData.maxPossibleScore) * 100);
  }, [learningData.totalScore, learningData.maxPossibleScore]);

  return (
    <LearningContext.Provider value={{
      learningData,
      setLearningData,
      updateScore,
      calculateProgress
    }}>
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
} 