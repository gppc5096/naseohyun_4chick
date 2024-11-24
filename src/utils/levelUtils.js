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