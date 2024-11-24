import React, { useState } from 'react';
import useSound from '../../hooks/useSound';
import styles from './Problem.module.css';

function Problem({ problem, onAnswer, progress }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(!!progress);
  const { playSound } = useSound();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = selectedAnswer === problem.correctAnswer;
    
    // 정답/오답 사운드 재생
    playSound(isCorrect ? 'CORRECT' : 'INCORRECT');
    
    onAnswer(isCorrect, problem.points);
    setShowResult(true);
  };

  // 이전에 풀었던 문제인 경우
  if (progress) {
    return (
      <div className={`${styles.problem} ${styles.solved}`}>
        <div className={styles.questionHeader}>
          <span className={styles.difficulty}>{problem.difficulty}</span>
          <span className={styles.solvedBadge}>
            {progress.correct ? '✅ 정답' : '❌ 오답'}
          </span>
        </div>
        <h3 className={styles.question}>{problem.question}</h3>
        <p className={styles.explanation}>{problem.explanation}</p>
      </div>
    );
  }

  const renderProblemInput = () => {
    if (problem.type === 'MULTIPLE_CHOICE') {
      return (
        <div className={styles.options}>
          {problem.options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                disabled={showResult}
              />
              {option}
            </label>
          ))}
        </div>
      );
    } else {
      return (
        <input
          type="text"
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
          disabled={showResult}
          className={styles.shortAnswer}
          placeholder="답을 입력하세요"
        />
      );
    }
  };

  return (
    <div className={styles.problem}>
      <div className={styles.questionHeader}>
        <span className={styles.difficulty}>{problem.difficulty}</span>
        <span className={styles.points}>{problem.points}점</span>
      </div>
      
      <h3 className={styles.question}>{problem.question}</h3>
      
      <form onSubmit={handleSubmit}>
        {renderProblemInput()}
        
        {!showResult && (
          <button type="submit" className={styles.submitButton}>
            정답 제출
          </button>
        )}
      </form>

      {showResult && (
        <div className={`${styles.result} ${selectedAnswer === problem.correctAnswer ? styles.correct : styles.incorrect}`}>
          <p>{selectedAnswer === problem.correctAnswer ? '정답입니다! 👏' : '틀렸습니다 😢'}</p>
          <p className={styles.explanation}>{problem.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Problem; 