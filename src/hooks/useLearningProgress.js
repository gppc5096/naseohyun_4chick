import useLocalStorage from './useLocalStorage';

function useLearningProgress() {
  const [learningData, setLearningData] = useLocalStorage('learning_progress', {
    totalScore: 0,
    solvedProblems: {},
    lastAccessed: null,
    streakDays: 0
  });

  const updateProgress = (problemId, isCorrect, points) => {
    setLearningData(prev => {
      const now = new Date();
      const lastDate = prev.lastAccessed ? new Date(prev.lastAccessed) : null;
      
      // 연속 학습일 계산
      let newStreakDays = prev.streakDays;
      if (lastDate) {
        const isNextDay = 
          now.getDate() - lastDate.getDate() === 1 &&
          now.getMonth() === lastDate.getMonth() &&
          now.getFullYear() === lastDate.getFullYear();
        
        if (isNextDay) {
          newStreakDays += 1;
        } else if (now.getDate() !== lastDate.getDate()) {
          newStreakDays = 1;
        }
      } else {
        newStreakDays = 1;
      }

      return {
        totalScore: isCorrect ? prev.totalScore + points : prev.totalScore,
        solvedProblems: {
          ...prev.solvedProblems,
          [problemId]: {
            solved: true,
            correct: isCorrect,
            timestamp: now.toISOString()
          }
        },
        lastAccessed: now.toISOString(),
        streakDays: newStreakDays
      };
    });
  };

  const getProgress = (problemId) => {
    return learningData.solvedProblems[problemId];
  };

  return {
    learningData,
    updateProgress,
    getProgress
  };
}

export default useLearningProgress; 