import React from 'react';
import { motion } from 'framer-motion';
import { useMath } from '../contexts/MathContext';

const Garden = () => {
  const { consecutiveCorrect, operationScores: scores } = useMath();

  const operationCards = [
    {
      id: 1,
      name: '덧셈',
      icon: '➕',
      score: scores['1'],
      color: 'from-pink-100 to-pink-200',
      borderColor: 'border-pink-300',
      progressColor: {
        low: 'bg-pink-200',
        medium: 'bg-pink-400',
        high: 'bg-pink-600'
      },
      character: '🦄',
      message: '덧셈의 요정이 되어볼까요?',
      bgColor: 'bg-pink-50'
    },
    {
      id: 2,
      name: '뺄셈',
      icon: '➖',
      score: scores['2'],
      color: 'from-blue-100 to-blue-200',
      borderColor: 'border-blue-300',
      progressColor: {
        low: 'bg-blue-200',
        medium: 'bg-blue-400',
        high: 'bg-blue-600'
      },
      character: '🐬',
      message: '뺄셈 실력을 키워볼까요?',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      name: '곱셈',
      icon: '×',
      score: scores['3'],
      color: 'from-purple-100 to-purple-200',
      borderColor: 'border-purple-300',
      progressColor: {
        low: 'bg-purple-200',
        medium: 'bg-purple-400',
        high: 'bg-purple-600'
      },
      character: '🦋',
      message: '곱셈과 친구가 되어볼까요?',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      name: '나눗셈',
      icon: '➗',
      score: scores['4'],
      color: 'from-green-100 to-green-200',
      borderColor: 'border-green-300',
      progressColor: {
        low: 'bg-green-200',
        medium: 'bg-green-400',
        high: 'bg-green-600'
      },
      character: '🐢',
      message: '차근차근 시작해볼까요?',
      bgColor: 'bg-green-50'
    }
  ];

  const getScoreEmoji = (score: number) => {
    if (score >= 90) return '🌟🌟🌟';
    if (score >= 70) return '🌟🌟';
    return '🌟';
  };

  const getProgressColor = (score: number, colors: { low: string; medium: string; high: string }) => {
    if (score >= 80) return colors.high;
    if (score >= 40) return colors.medium;
    return colors.low;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <motion.h1 
          className="text-3xl font-bold text-purple-600 mb-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          서현이의 수학실력 성장기록 📈
        </motion.h1>
        <motion.p 
          className="text-lg text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          우리 서현이의 멋진 수학 성적표예요! ✨
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {operationCards.map((op) => (
          <div key={op.id} className="space-y-4">
            {/* 각 연산별 점수 메시지 */}
            {op.score > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${op.bgColor} rounded-lg p-4 text-center border ${op.borderColor}`}
              >
                <p className="text-black">
                  <span className="font-bold">{op.name}</span> 점수: 
                  <span className="font-bold text-xl ml-2">{op.score}</span> 점
                  {consecutiveCorrect > 0 && op.score > 0 && (
                    <span className="ml-2">
                      ({consecutiveCorrect}문제 연속 정답! 🔥)
                    </span>
                  )}
                </p>
              </motion.div>
            )}

            {/* 기존 카드 내용 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: op.id * 0.1 }}
              className={`bg-gradient-to-br ${op.color} rounded-lg p-6 border-2 ${op.borderColor} shadow-lg`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-black">{op.icon}</span>
                  <h2 className="text-xl font-bold text-black">{op.name}</h2>
                </div>
                <div className="text-3xl">{op.character}</div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-black">달성도</span>
                  <span className="text-sm font-bold text-black">{op.score}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${op.score}%` }}
                    transition={{ duration: 1, delay: op.id * 0.2 }}
                    className={`h-full rounded-full ${getProgressColor(op.score, op.progressColor)}`}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-black">{op.message}</p>
                <div className="text-lg">{getScoreEmoji(op.score)}</div>
              </div>

              {op.score >= 80 && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-3 bg-white bg-opacity-50 rounded-lg p-2 text-center text-black"
                >
                  🎉 대단해요! 수학 천재!
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-black">
          <span className="font-medium text-purple-600">할아버지의 한마디:</span>
          <span className="ml-2">
            "서현아, 정말 잘하고 있어! 할아버지가 매우 자랑스러워~ 💝"
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Garden; 