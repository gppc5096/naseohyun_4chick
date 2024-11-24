const messages = {
  GENERAL: [
    '서현아, 오늘도 열심히 공부하는구나!',
    '할아버지가 늘 응원하고 있단다.',
    '우리 서현이가 이렇게 열심히 하다니 기쁘구나.',
    '오늘도 좋은 하루 보내렴.',
    '할아버지는 서현이가 자랑스럽단다.'
  ],
  ENCOURAGEMENT: [
    '조금 어려워도 포기하지 말고 천천히 해보자.',
    '틀려도 괜찮아. 다시 한번 해보는 게 중요하단다.',
    '실수는 누구나 할 수 있어. 그게 배움의 과정이란다.',
    '서현이는 할 수 있어! 할아버지가 믿는단다.',
    '조금만 더 노력하면 분명 좋은 결과가 있을 거야.'
  ],
  LEARNING: [
    '수학은 우리 생활 곳곳에 숨어있단다.',
    '차근차근 기초부터 하다 보면 어려운 문제도 풀 수 있을 거야.',
    '오늘 배운 걸 내일 복습하면 더 잘 기억할 수 있단다.',
    '문제를 잘 읽고 천천히 풀어보렴.',
    '수학은 생각하는 힘을 키워주는 멋진 과목이란다.'
  ],
  ACHIEVEMENT: [
    '와! 정말 대단하구나! 할아버지가 너무 기쁘다.',
    '이렇게 발전하는 모습이 보기 좋구나.',
    '서현이가 이렇게 성장하다니 너무 자랑스럽다!',
    '오늘도 멋진 성과를 이뤘구나!',
    '우리 서현이는 정말 최고란다!'
  ]
};

export const getRandomMessage = (category = 'GENERAL') => {
  const categoryMessages = messages[category] || messages.GENERAL;
  const randomIndex = Math.floor(Math.random() * categoryMessages.length);
  return categoryMessages[randomIndex];
}; 