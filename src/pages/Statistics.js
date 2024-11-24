import React from 'react';
import LearningAnalytics from '../components/Statistics/LearningAnalytics';
import BadgeProgressList from '../components/Statistics/BadgeProgressList';
import styles from './Statistics.module.css';

function Statistics() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.titleIcon}>📊</span>
        학습 통계
        <span className={styles.titleIcon}>📈</span>
      </h1>
      <div className={styles.content}>
        <LearningAnalytics />
        <BadgeProgressList />
      </div>
    </div>
  );
}

export default Statistics; 