import { useCallback } from 'react';

const SOUNDS = {
  CORRECT: '/sounds/correct.mp3',
  INCORRECT: '/sounds/incorrect.mp3',
  LEVEL_UP: '/sounds/level-up.mp3',
  BADGE_EARNED: '/sounds/badge-earned.mp3',
  BUTTON_CLICK: '/sounds/button-click.mp3'
};

function useSound() {
  const playSound = useCallback((soundType) => {
    const audio = new Audio(SOUNDS[soundType]);
    audio.volume = 0.5; // 볼륨 50%로 설정
    
    try {
      audio.play().catch(error => {
        console.log('Sound play failed:', error);
      });
    } catch (error) {
      console.log('Sound play error:', error);
    }
  }, []);

  return { playSound };
}

export default useSound; 