import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OperationScore {
  [key: string]: number;  // '1': 덧셈, '2': 뺄셈, '3': 곱셈, '4': 나눗셈
}

interface MathContextType {
  score: number;
  addScore: (points: number) => void;
  consecutiveCorrect: number;
  updateConsecutiveCorrect: (isCorrect: boolean) => void;
  gardenProgress: number;
  updateGardenProgress: () => void;
  operationScores: OperationScore;
  updateOperationScore: (operationType: string, newScore: number) => void;
}

const MathContext = createContext<MathContextType | undefined>(undefined);

export const MathProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [gardenProgress, setGardenProgress] = useState(0);
  const [operationScores, setOperationScores] = useState<OperationScore>({
    '1': 0,  // 덧셈
    '2': 0,  // 뺄셈
    '3': 0,  // 곱셈
    '4': 0   // 나눗셈
  });

  const addScore = (points: number) => {
    setScore(prev => Math.min(prev + points, 100));
  };

  const updateConsecutiveCorrect = (isCorrect: boolean) => {
    if (isCorrect) {
      setConsecutiveCorrect(prev => Math.min(prev + 1, 10));
    } else {
      setConsecutiveCorrect(0);
    }
  };

  const updateGardenProgress = () => {
    setGardenProgress(prev => Math.min(prev + 10, 100));
  };

  const updateOperationScore = (operationType: string, newScore: number) => {
    setOperationScores(prev => ({
      ...prev,
      [operationType]: Math.min(prev[operationType] + newScore, 100)
    }));
  };

  return (
    <MathContext.Provider value={{
      score,
      addScore,
      consecutiveCorrect,
      updateConsecutiveCorrect,
      gardenProgress,
      updateGardenProgress,
      operationScores,
      updateOperationScore
    }}>
      {children}
    </MathContext.Provider>
  );
};

export const useMath = () => {
  const context = useContext(MathContext);
  if (context === undefined) {
    throw new Error('useMath must be used within a MathProvider');
  }
  return context;
}; 