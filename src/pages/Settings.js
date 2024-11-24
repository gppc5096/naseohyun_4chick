import React from 'react';
import BackupRestore from '../components/Settings/BackupRestore';
import PrintSection from '../components/Settings/PrintSection';
import styles from './Settings.module.css';

function Settings() {
  const handleReset = () => {
    if (window.confirm('정말로 모든 데이터를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.titleIcon}>⚙️</span>
        설정
        <span className={styles.titleIcon}>🔧</span>
      </h1>

      <div className={styles.settingsGrid}>
        <div className={`${styles.section} ${styles.backupSection}`}>
          <h2>백업</h2>
          <BackupRestore />
        </div>
        
        <div className={`${styles.section} ${styles.printSection}`}>
          <h2>출력</h2>
          <PrintSection />
        </div>
        
        <div className={`${styles.section} ${styles.resetSection}`}>
          <h2>초기화</h2>
          <p>모든 학습 데이터와 설정을 초기화합니다.</p>
          <div className={styles.resetButtonContainer}>
            <button 
              className={styles.resetButton}
              onClick={handleReset}
            >
              모든 데이터 초기화
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings; 