import React from 'react';
import { useLearning } from '../../contexts/LearningContext';
import LearningChart from './LearningChart';
import styles from './LearningAnalytics.module.css';

function LearningAnalytics() {
  const { learningData } = useLearning();

  // learningData가 없을 경우의 기본값 설정
  const defaultData = {
    totalScore: 0,
    solvedProblems: {},
    streakDays: 0
  };

  // learningData가 없을 경우 기본값 사용
  const data = learningData || defaultData;

  const calculateWeeklyStats = () => {
    if (!data.solvedProblems) return [];

    const today = new Date();
    const weeklyStats = Array(7).fill(0);
    
    Object.entries(data.solvedProblems).forEach(([dateStr, problems]) => {
      const problemDate = new Date(dateStr);
      const diffDays = Math.floor((today - problemDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays < 7) {
        weeklyStats[diffDays] = problems.length;
      }
    });

    return weeklyStats.reverse();
  };

  const weeklyStats = calculateWeeklyStats();
  const totalProblems = Object.values(data.solvedProblems || {}).reduce(
    (acc, problems) => acc + problems.length,
    0
  );

  return (
    <div className={styles.analytics}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>총 해결 문제</h3>
          <p className={styles.statValue}>{totalProblems}개</p>
        </div>
        <div className={styles.statCard}>
          <h3>총 획득 점수</h3>
          <p className={styles.statValue}>{data.totalScore}점</p>
        </div>
        <div className={styles.statCard}>
          <h3>연속 학습</h3>
          <p className={styles.statValue}>{data.streakDays}일</p>
        </div>
      </div>

      <div className={styles.chartSection}>
        <h3>주간 학습 통계</h3>
        <LearningChart data={weeklyStats} />
      </div>
    </div>
  );
}

export default LearningAnalytics; 