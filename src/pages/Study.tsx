import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Study = () => {
  const navigate = useNavigate();
  const [selectedOperation, setSelectedOperation] = useState<string | null>(null);
  
  const operationTypes = [
    { id: '1', name: '덧셈', icon: '➕' },
    { id: '2', name: '뺄셈', icon: '➖' },
    { id: '3', name: '곱셈', icon: '✕' },
    { id: '4', name: '나눗셈', icon: '➗' }
  ];

  const mathProblems = [
    {
      id: '1-1',
      title: "덧셈 연습",
      description: "1부터 10까지의 덧셈을 연습해봐요",
      level: "초급",
      icon: "➕",
      examples: ["2 + 3 = ?", "4 + 5 = ?", "1 + 6 = ?"]
    },
    {
      id: '1-2',
      title: "덧셈 연습",
      description: "11부터 20까지의 덧셈을 연습해봐요",
      level: "중급",
      icon: "➕",
      examples: ["12 + 5 = ?", "15 + 4 = ?", "11 + 8 = ?"]
    },
    {
      id: '1-3',
      title: "덧셈 연습",
      description: "20 이상의 덧셈을 연습해봐요",
      level: "고급",
      icon: "➕",
      examples: ["23 + 12 = ?", "31 + 14 = ?", "25 + 16 = ?"]
    },
    {
      id: '2-1',
      title: "뺄셈 연습",
      description: "10 이하의 뺄셈을 연습해봐요",
      level: "초급",
      icon: "➖",
      examples: ["5 - 2 = ?", "7 - 3 = ?", "9 - 4 = ?"]
    },
    {
      id: '2-2',
      title: "뺄셈 연습",
      description: "20 이하의 뺄셈을 연습해봐요",
      level: "중급",
      icon: "➖",
      examples: ["15 - 7 = ?", "18 - 9 = ?", "16 - 8 = ?"]
    },
    {
      id: '2-3',
      title: "뺄셈 연습",
      description: "20 이상의 뺄셈을 연습해봐요",
      level: "고급",
      icon: "➖",
      examples: ["25 - 12 = ?", "31 - 14 = ?", "28 - 13 = ?"]
    },
    {
      id: '3-1',
      title: "곱셈 연습",
      description: "1단부터 3단까지 연습해봐요",
      level: "초급",
      icon: "×",
      examples: ["2 × 2 = ?", "3 × 2 = ?", "3 × 3 = ?"]
    },
    {
      id: '3-2',
      title: "곱셈 연습",
      description: "4단부터 6단까지 연습해봐요",
      level: "중급",
      icon: "×",
      examples: ["4 × 4 = ?", "5 × 5 = ?", "6 × 4 = ?"]
    },
    {
      id: '3-3',
      title: "곱셈 연습",
      description: "7단부터 9단까지 연습해봐요",
      level: "고급",
      icon: "×",
      examples: ["7 × 7 = ?", "8 × 6 = ?", "9 × 8 = ?"]
    },
    {
      id: '4-1',
      title: "나눗셈 연습",
      description: "10 이하의 나눗셈을 연습해봐요",
      level: "초급",
      icon: "➗",
      examples: ["6 ÷ 2 = ?", "8 ÷ 2 = ?", "9 ÷ 3 = ?"]
    },
    {
      id: '4-2',
      title: "나눗셈 연습",
      description: "20 이하의 나눗셈을 연습해봐요",
      level: "중급",
      icon: "➗",
      examples: ["15 ÷ 3 = ?", "16 ÷ 4 = ?", "18 ÷ 3 = ?"]
    },
    {
      id: '4-3',
      title: "나눗셈 연습",
      description: "30 이하의 나눗셈을 연습해봐요",
      level: "고급",
      icon: "➗",
      examples: ["27 ÷ 3 = ?", "28 ÷ 4 = ?", "30 ÷ 5 = ?"]
    }
  ];

  const filteredProblems = selectedOperation 
    ? mathProblems.filter(p => p.id.startsWith(selectedOperation))
    : mathProblems;

  const getLevelColor = (level: string) => {
    switch (level) {
      case '초급':
        return 'bg-green-100 text-green-800 border-green-200';
      case '중급':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case '고급':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-purple-100 text-purple-800 border-purple-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-8 text-center">
        오늘의 수학 문제
      </h1>

      {/* 연산 선택 탭 */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setSelectedOperation(null)}
          className={`px-6 py-3 rounded-lg transition-all ${
            !selectedOperation 
              ? 'bg-purple-600 text-white' 
              : 'bg-white text-gray-600 hover:bg-purple-50'
          }`}
        >
          전체
        </button>
        {operationTypes.map(op => (
          <button
            key={op.id}
            onClick={() => setSelectedOperation(op.id)}
            className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
              selectedOperation === op.id
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            <span className="text-xl">{op.icon}</span>
            {op.name}
          </button>
        ))}
      </div>

      {/* 문제 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.map((problem, index) => (
          <motion.div 
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-100"
            onClick={() => navigate(`/problem/${problem.id}`)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">{problem.icon}</span>
                  <h2 className="text-lg font-bold text-purple-600">
                    {problem.title}
                  </h2>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(problem.level)}`}>
                  {problem.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                {problem.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {problem.examples.map((example, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-50 px-3 py-1 rounded text-sm text-gray-600"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Study; 