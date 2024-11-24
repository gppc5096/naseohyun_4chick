import React from 'react';
import { useLearning } from '../../contexts/LearningContext';
import { SUBJECT_CATEGORIES } from '../../types/learning';
import styles from './LearningChart.module.css';

function LearningChart() {
  const { learningData } = useLearning();

  // 기본값 설정
  const defaultData = {
    solvedProblems: {},
    totalProblems: 0,
    correctProblems: 0
  };

  // learningData가 없을 경우 기본값 사용
  const data = learningData || defaultData;

  const calculateCategoryAccuracy = (category) => {
    if (!data.solvedProblems) return 0;

    let totalInCategory = 0;
    let correctInCategory = 0;

    Object.values(data.solvedProblems).forEach(problems => {
      problems.forEach(problem => {
        if (problem.category === category) {
          totalInCategory++;
          if (problem.isCorrect) {
            correctInCategory++;
          }
        }
      });
    });

    return totalInCategory === 0 ? 0 : Math.round((correctInCategory / totalInCategory) * 100);
  };

  const categories = Object.values(SUBJECT_CATEGORIES);
  const accuracyData = categories.map(category => ({
    category,
    accuracy: calculateCategoryAccuracy(category)
  }));

  return (
    <div className={styles.chartContainer}>
      {accuracyData.map(({ category, accuracy }) => (
        <div key={category} className={styles.barGroup}>
          <div className={styles.label}>{category}</div>
          <div className={styles.barContainer}>
            <div 
              className={styles.bar}
              style={{ width: `${accuracy}%` }}
            >
              <span className={styles.value}>{accuracy}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LearningChart; 