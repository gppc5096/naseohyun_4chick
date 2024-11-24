import React, { memo } from 'react';
import styles from './Progress.module.css';

const Progress = memo(function Progress({ value, total, label, color = '#4299e1' }) {
  const percentage = Math.round((value / total) * 100) || 0;
  
  return (
    <div className={styles.progressWrapper}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color
          }}
        >
          <span className={styles.progressText}>{percentage}%</span>
        </div>
      </div>
    </div>
  );
});

export default Progress; 