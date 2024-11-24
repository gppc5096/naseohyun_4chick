import React from 'react';
import { GRADE_LEVELS, SUBJECT_CATEGORIES } from '../../types/learning';
import styles from './CategorySelector.module.css';

function CategorySelector({ selectedGrade, selectedCategory, onGradeChange, onCategoryChange }) {
  return (
    <div className={styles.selector}>
      <div className={styles.gradeSection}>
        <h3>학년 선택</h3>
        <div className={styles.buttonGrid}>
          {Object.entries(GRADE_LEVELS).map(([key, value]) => (
            <button
              key={key}
              onClick={() => onGradeChange(value)}
              className={`${styles.button} ${selectedGrade === value ? styles.selected : ''}`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {selectedGrade && (
        <div className={styles.categorySection}>
          <h3>주제 선택</h3>
          <div className={styles.buttonGroup}>
            {Object.entries(SUBJECT_CATEGORIES).map(([key, value]) => (
              <button
                key={key}
                onClick={() => onCategoryChange(value)}
                className={`${styles.button} ${selectedCategory === value ? styles.selected : ''}`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategorySelector; 