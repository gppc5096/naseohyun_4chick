import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mathProblemSets } from '../data/mathProblems';
import { useMath } from '../contexts/MathContext';
import Seony from '../components/characters/Seony';
import { soundManager } from '../utils/sound';

// 파일 상단에 타입 정의 추가
interface MathProblem {
  question: string;
  answer: number;
  encouragement: string;
}

const ProblemSolving = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState('');
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [feedback, setFeedback] = useState<{
    isCorrect?: boolean;
    message?: string;
  }>({});
  
  const { 
    addScore, 
    updateConsecutiveCorrect, 
    updateGardenProgress,
    updateOperationScore,
    score,
    consecutiveCorrect
  } = useMath();

  const [isCompleted, setIsCompleted] = useState(false);
  const problemSet = mathProblemSets[id as string];
  const [problems, setProblems] = useState<MathProblem[]>([]);

  useEffect(() => {
    // 페이지 로드 시 새로운 문제 세트 생성
    if (problemSet) {
      setProblems(problemSet.generateProblems());
    }
  }, [id]);

  const currentProblem = problems[currentProblemIndex];

  const [seonyEmotion, setSeonyEmotion] = useState<'thinking' | 'happy' | 'cheering'>('thinking');
  const [seonyMessage, setSeonyMessage] = useState('어떤 답이 맞을까요?');

  const checkAnswer = () => {
    if (!userAnswer) {
      setSeonyEmotion('thinking');
      setSeonyMessage('정답을 입력해주세요!');
      soundManager.playEffect('click');
      return;
    }

    const isCorrect = Number(userAnswer) === currentProblem.answer;
    const operationType = id?.charAt(0);
    
    if (isCorrect) {
      soundManager.playEffect('correct');
      setSeonyEmotion('cheering');

      // 마지막 문제인 경우
      if (currentProblemIndex === problems.length - 1) {
        setIsCompleted(true);
        setSeonyMessage('모든 문제를 다 풀었어요! 돌아가기 버튼을 클릭하세요.');
        soundManager.playEffect('success');
        if (consecutiveCorrect > 10) {
          updateConsecutiveCorrect(true);
        }
      } else {
        setSeonyMessage(currentProblem.encouragement);
      }

      if (score < 100) {
        addScore(10);
      }
      if (consecutiveCorrect < 10) {
        updateConsecutiveCorrect(true);
      }
      updateGardenProgress();
      if (operationType) {
        updateOperationScore(operationType, 10);
      }
    } else {
      soundManager.playEffect('incorrect');
      setSeonyEmotion('thinking');
      setSeonyMessage('다시 한번 생각해볼까요?');
      updateConsecutiveCorrect(false);
    }

    setFeedback({
      isCorrect,
      message: isCorrect 
        ? currentProblemIndex === problems.length - 1
          ? "모든 문제를 완료했어요! 돌아가기 버튼을 클릭하세요."
          : currentProblem.encouragement
        : "아쉽네요. 다시 한번 생각해볼까요?"
    });
  };

  const handleNextProblem = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
      setUserAnswer('');
      setFeedback({});
      setSeonyEmotion('thinking');
      setSeonyMessage('어떤 답이 맞을까요?');
    } else {
      setIsCompleted(true);
      setSeonyEmotion('cheering');
      setSeonyMessage('10문제를 모두 풀었어요! 정말 잘했어요! 🎉');
      soundManager.playEffect('success');
      if (consecutiveCorrect > 10) {
        updateConsecutiveCorrect(true);
      }
    }
  };

  // 다음 문제 버튼 표시 조건 수정
  const showNextButton = feedback.isCorrect && !isCompleted;

  if (!currentProblem) {
    return <div>문제를 찾을 수 없습니다.</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <button 
        onClick={() => navigate('/study')}
        className="mb-6 text-purple-600 hover:text-purple-800"
      >
        ← 돌아가기
      </button>
      
      <h1 className="text-3xl font-bold text-purple-600 mb-8 text-center">
        {problemSet.title}
      </h1>
      
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-8"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.4 }}
      >
        <div className="text-center mb-8">
          <p className="text-4xl font-bold text-gray-700">
            {currentProblem.question}
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-32 text-center text-2xl p-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
            placeholder="정답 입력"
          />
          
          {feedback.message && (
            <div className={`text-center p-4 rounded-lg ${
              feedback.isCorrect 
                ? 'bg-green-100 text-green-700' 
                : feedback.isCorrect === false 
                  ? 'bg-red-100 text-red-700'
                  : 'bg-yellow-100 text-yellow-700'
            }`}>
              {feedback.message}
            </div>
          )}

          <div className="flex gap-4">
            <button 
              onClick={checkAnswer}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              정답 확인하기
            </button>

            {showNextButton && (
              <button 
                onClick={handleNextProblem}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                다음 문제로
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {isCompleted && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div 
            className="bg-white rounded-lg p-8 shadow-2xl max-w-md mx-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                축하합니다!
              </h2>
              <p className="text-gray-600 mb-6">
                10문제를 모두 완료했어요!<br/>
                서현이는 정말 대단해요!
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/study')}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                학습 목록으로 돌아가기
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Seony emotion={seonyEmotion} message={seonyMessage} />
    </motion.div>
  );
};

export default ProblemSolving; 