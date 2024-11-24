import React, { useState, useEffect } from 'react';
import { generateNewProblem } from '../utils/problemGenerator';
import CategorySelector from '../components/Learning/CategorySelector';
import Problem from '../components/Learning/Problem';
import { DIFFICULTY_LEVELS } from '../types/problems';
import { useLearning } from '../contexts/LearningContext';
import { useBadgeProgress } from '../hooks/useBadgeProgress';
import { BADGE_TYPES } from '../types/rewards';
import BadgeNotification from '../components/Common/BadgeNotification';
import styles from './Learning.module.css';

function Learning() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentProblem, setCurrentProblem] = useState(null);
  const { learningData, updateScore, calculateProgress } = useLearning();
  const { badgeProgress, updateProgress, checkBadgeCompletion } = useBadgeProgress();
  const [newBadge, setNewBadge] = useState(null);

  useEffect(() => {
    if (selectedGrade && selectedCategory) {
      const newProblem = generateNewProblem(
        selectedGrade,
        selectedCategory,
        DIFFICULTY_LEVELS.EASY
      );
      console.log('Generated Problem:', newProblem);
      setCurrentProblem(newProblem);
    } else {
      setCurrentProblem(null);
    }
  }, [selectedGrade, selectedCategory]);

  const handleAnswer = (answer) => {
    if (!currentProblem) return;

    const isCorrect = answer === currentProblem.correctAnswer;
    if (isCorrect) {
      updateScore(currentProblem.points);
      
      updateProgress('STUDYING_HARD', learningData.totalProblems + 1);
      
      if (learningData.currentStreak + 1 >= 30) {
        updateProgress('PERFECT_SOLVER', learningData.currentStreak + 1);
      }

      const badges = ['STUDYING_HARD', 'PERFECT_SOLVER', 'STEADY_LEARNER'];
      badges.forEach(badge => {
        if (!checkBadgeCompletion(badge) && 
            badgeProgress[badge]?.currentProgress >= BADGE_TYPES[badge].target) {
          setNewBadge(badge);
        }
      });
    }

    const newProblem = generateNewProblem(
      selectedGrade,
      selectedCategory,
      DIFFICULTY_LEVELS.EASY
    );
    setCurrentProblem(newProblem);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <span className={styles.titleIcon}>📚</span>
        학습하기
        <span className={styles.titleIcon}>✏️</span>
      </h1>
      
      <div className={styles.progressInfo}>
        <div className={styles.score}>
          총 점수: {learningData?.totalScore || 0}점
        </div>
        <div className={styles.progress}>
          진행률: {calculateProgress()}%
        </div>
        <div className={styles.streak}>
          🔥 {learningData?.streakDays || 0}일 연속 학습 중!
        </div>
      </div>

      <CategorySelector
        selectedGrade={selectedGrade}
        selectedCategory={selectedCategory}
        onGradeChange={(grade) => {
          setSelectedGrade(grade);
          setSelectedCategory(null);
        }}
        onCategoryChange={setSelectedCategory}
      />
      
      {currentProblem ? (
        <div className={styles.problemContainer}>
          <Problem
            problem={currentProblem}
            onAnswer={handleAnswer}
          />
        </div>
      ) : selectedGrade && !selectedCategory ? (
        <div className={styles.message}>
          주제를 선택해주세요.
        </div>
      ) : !selectedGrade ? (
        <div className={styles.message}>
          학년을 선택해주세요.
        </div>
      ) : null}
      {newBadge && (
        <BadgeNotification
          badgeType={newBadge}
          onClose={() => setNewBadge(null)}
        />
      )}
    </div>
  );
}

export default Learning; 