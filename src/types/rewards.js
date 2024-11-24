export const BADGE_TYPES = {
  STUDYING_HARD: {
    id: 'STUDYING_HARD',
    displayName: '열심히 공부하는 중',
    description: '50문제를 해결하면 획득할 수 있어요!',
    icon: '📚',
    target: 50
  },
  CONTINUOUS_3DAYS: {
    id: 'CONTINUOUS_3DAYS',
    displayName: '3일 연속 학습',
    description: '3일 연속으로 학습하면 획득할 수 있어요!',
    icon: '🌱',
    target: 3
  },
  CONTINUOUS_7DAYS: {
    id: 'CONTINUOUS_7DAYS',
    displayName: '일주일 연속 학습',
    description: '7일 연속으로 학습하면 획득할 수 있어요!',
    icon: '🌳',
    target: 7
  },
  ACCURATE_CALCULATOR: {
    id: 'ACCURATE_CALCULATOR',
    displayName: '정확한 계산왕',
    description: '연속으로 10문제를 맞히면 획득할 수 있어요!',
    icon: '🧮',
    target: 10
  },
  PERFECT_SOLVER: {
    id: 'PERFECT_SOLVER',
    displayName: '완벽한 해결사',
    description: '어려운 문제 5개를 연속으로 해결하면 획득할 수 있어요!',
    icon: '🏆',
    target: 5
  },
  MATH_MASTER: {
    id: 'MATH_MASTER',
    displayName: '수학 마스터',
    description: '모든 카테고리에서 각각 10문제 이상 해결하면 획득할 수 있어요!',
    icon: '👑',
    target: 10
  }
};

export const BADGE_REWARDS = {
  STUDYING_HARD: {
    points: 500,
    message: '대단해요! 50문제를 해결했어요!',
    unlockFeature: '특별 문제 세트'
  },
  CONTINUOUS_3DAYS: {
    points: 300,
    message: '3일 연속 학습 달성! 대단해요!',
    unlockFeature: '새로운 문제 유형'
  },
  CONTINUOUS_7DAYS: {
    points: 700,
    message: '7일 연속 학습 달성! 정말 성실해요!',
    unlockFeature: '특별 보상 상자'
  },
  ACCURATE_CALCULATOR: {
    points: 400,
    message: '연속 10문제 정답! 정확한 계산 실력이에요!',
    unlockFeature: '계산기 테마'
  },
  PERFECT_SOLVER: {
    points: 1000,
    message: '어려운 문제도 완벽하게 해결했어요!',
    unlockFeature: '고급 문제 도전권'
  },
  MATH_MASTER: {
    points: 2000,
    message: '모든 분야의 진정한 마스터가 되었어요!',
    unlockFeature: '마스터 뱃지'
  }
};

export const LEVELS = [
  { level: 1, name: '수학 새싹', minScore: 0, icon: '🌱' },
  { level: 2, name: '수학 꽃봉오리', minScore: 100, icon: '🌿' },
  { level: 3, name: '수학 나무', minScore: 300, icon: '🌳' },
  { level: 4, name: '수학 달인', minScore: 600, icon: '🎓' },
  { level: 5, name: '수학 천재', minScore: 1000, icon: '🧠' }
];

export const calculateLevel = (score) => {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (score >= LEVELS[i].minScore) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}; 