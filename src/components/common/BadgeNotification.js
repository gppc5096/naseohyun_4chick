import React from 'react';
import styles from './BadgeNotification.module.css';
import { BADGE_REWARDS } from '../../types/rewards';

function BadgeNotification({ badgeType, onClose }) {
  const reward = BADGE_REWARDS[badgeType];

  return (
    <div className={styles.notification}>
      <div className={styles.content}>
        <h3>🎉 새로운 뱃지 획득!</h3>
        <p>{reward.message}</p>
        <div className={styles.rewards}>
          <p>보상: {reward.points} 포인트</p>
          {reward.unlockFeature && (
            <p>특별 해금: {reward.unlockFeature}</p>
          )}
        </div>
        <button onClick={onClose}>확인</button>
      </div>
    </div>
  );
}

export default BadgeNotification; 