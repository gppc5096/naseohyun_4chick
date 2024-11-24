import React from 'react';
import styles from './LoadingSpinner.module.css';

function LoadingSpinner({ size = 'medium', message = '로딩 중...' }) {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={`${styles.spinner} ${styles[size]}`}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default LoadingSpinner; 