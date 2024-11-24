import React from 'react';
import Badge from '../Common/Badge';
import styles from './BadgeProgress.module.css';

function BadgeProgress({ badgeData }) {
  return (
    <div className={styles.badgeCard}>
      <div className={styles.badgeContent}>
        <div className={styles.badgeIconSection}>
          <Badge 
            type={badgeData.type} 
            size="large" 
          />
        </div>
        <div className={styles.progressSection}>
          <div className={styles.progressInfo}>
            <p>목표: {badgeData.target}개 달성하기</p>
            <p className={styles.currentProgress}>
              현재 진행도: {badgeData.progress}/{badgeData.target}
            </p>
          </div>
          {badgeData.status === 'COMPLETED' && badgeData.nextLevel && (
            <div className={styles.nextChallenge}>
              <h4>다음 도전 과제</h4>
              <p>{badgeData.nextLevel.displayText}</p>
              <p>목표: {badgeData.nextLevel.target} 문제 해결</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BadgeProgress; 