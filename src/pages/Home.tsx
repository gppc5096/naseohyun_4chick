import React from 'react';
import { motion } from 'framer-motion';
import Seony from '../components/characters/Seony';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold text-purple-600 mb-8"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          안녕! 사랑하는 서현아... 🌟
        </motion.h1>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <img
              src="/seohyun.jpg"
              alt="서현이"
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-200"
            />
            <motion.div
              className="absolute -bottom-2 -right-2 bg-purple-100 rounded-full p-2 border-2 border-purple-300"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐️
            </motion.div>
          </div>
        </motion.div>

        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          오늘도 할아버지와 함께 수학모험 시작해 볼까?
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-4 left-4 text-sm text-gray-500 font-medium"
      >
        <div className="bg-white bg-opacity-70 px-3 py-1 rounded-lg shadow-sm">
          2024년 12월 5일 생일날🎁<br />
          할아버지가 서현이에게...
        </div>
      </motion.div>

      <Seony emotion="happy" message="서현아! 오늘도 재미있게 공부해보자!" />
    </div>
  );
};

export default Home; 