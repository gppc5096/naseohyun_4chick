import React from 'react';
import { printLearningRecord } from '../../utils/print';
import useLearningProgress from '../../hooks/useLearningProgress';
import { sampleProblems } from '../../data/sampleProblems';
import styles from './PrintSection.module.css';

function PrintSection() {
  const { learningData } = useLearningProgress();

  const handlePrint = () => {
    // 모든 문제 데이터를 하나의 배열로 변환
    const allProblems = Object.values(sampleProblems).flatMap(gradeProblems => 
      Object.values(gradeProblems).flat()
    );
    
    printLearningRecord(learningData, allProblems);
  };

  return (
    <div className={styles.container}>
      <h2>학습 기록 프린트</h2>
      <p>서현이의 학습 기록을 프린트할 수 있습니다.</p>
      <button onClick={handlePrint} className={styles.printButton}>
        학습 기록 프린트하기
      </button>
    </div>
  );
}

export default PrintSection; 