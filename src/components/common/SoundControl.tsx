import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../../utils/sound';

const SoundControl = () => {
  const [isMuted, setIsMuted] = useState(soundManager.getIsMuted());
  const [isHovered, setIsHovered] = useState(false);

  const toggleSound = () => {
    const newMutedState = soundManager.toggleMute();
    setIsMuted(newMutedState);
    // 클릭 효과음 재생
    if (!newMutedState) {
      soundManager.playEffect('click');
    }
  };

  return (
    <motion.div
      className="fixed top-20 right-4 z-50 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleSound}
        className="bg-white rounded-full p-3 shadow-lg"
      >
        {isMuted ? '🔇' : '🔊'}
      </motion.button>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-2 bg-white px-2 py-1 rounded text-sm shadow-md text-black"
        >
          {isMuted ? '소리 켜기' : '소리 끄기'}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SoundControl; 