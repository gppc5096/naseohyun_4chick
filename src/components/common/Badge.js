import React from 'react';
import styles from './Badge.module.css';
import { BADGE_TYPES } from '../../types/rewards';

function Badge({ type, size = 'medium', showProgress = false, progress = 0 }) {
  if (!type || !BADGE_TYPES[type]) {
    return (
      <div className={`${styles.badge} ${styles[size]}`}>
        <div className={styles.badgeIcon}>🏆</div>
        <div className={styles.badgeInfo}>
          <h4>알 수 없는 뱃지</h4>
        </div>
      </div>
    );
  }

  const badgeInfo = BADGE_TYPES[type];
  const progressPercent = Math.min((progress / badgeInfo.target) * 100, 100);

  return (
    <div className={`${styles.badge} ${styles[size]}`}>
      <div className={styles.badgeIcon}>
        {badgeInfo.icon}
      </div>
      <div className={styles.badgeInfo}>
        <h4>{badgeInfo.displayName}</h4>
        <p>{badgeInfo.description}</p>
        {showProgress && (
          <div className={styles.progressWrapper}>
            <div 
              className={styles.progressBar}
              style={{ width: `${progressPercent}%` }}
            />
            <span className={styles.progressText}>
              {progress}/{badgeInfo.target}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Badge; 