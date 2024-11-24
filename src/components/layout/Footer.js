import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>© {year} 서현이와 함께하는 수학나라</p>
        <p className={styles.subText}>할아버지와 함께하는 즐거운 수학 공부</p>
      </div>
    </footer>
  );
}

export default Footer; 