import React, { useRef, useState } from 'react';
import { createBackup, restoreBackup } from '../../utils/backup';
import styles from './BackupRestore.module.css';

function BackupRestore() {
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState(null);

  const handleBackup = () => {
    const success = createBackup();
    setMessage(success 
      ? { type: 'success', text: '백업 파일이 생성되었습니다.' }
      : { type: 'error', text: '백업 생성에 실패했습니다.' }
    );
    setTimeout(() => setMessage(null), 3000);
  };

  const handleRestore = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const success = await restoreBackup(file);
    setMessage(success 
      ? { type: 'success', text: '백업이 복원되었습니다. 페이지를 새로고침합니다.' }
      : { type: 'error', text: '백업 복원에 실패했습니다.' }
    );

    if (success) {
      setTimeout(() => window.location.reload(), 2000);
    } else {
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className={styles.container}>
      <h2>데이터 백업 / 복원</h2>
      
      <div className={styles.actions}>
        <button 
          onClick={handleBackup}
          className={styles.backupButton}
        >
          백업 파일 생성
        </button>

        <div className={styles.restoreSection}>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className={styles.restoreButton}
          >
            백업 파일에서 복원
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleRestore}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      {message && (
        <div className={`${styles.message} ${styles[message.type]}`}>
          {message.text}
        </div>
      )}
    </div>
  );
}

export default BackupRestore; 