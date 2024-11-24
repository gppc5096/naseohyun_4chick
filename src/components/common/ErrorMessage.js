import React from 'react';
import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorIcon}>❌</div>
      <h3 className={styles.errorTitle}>오류가 발생했습니다</h3>
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryButton}>
          다시 시도
        </button>
      )}
    </div>
  );
}

export default ErrorMessage; 