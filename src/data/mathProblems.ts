export interface MathProblem {
  question: string;
  answer: number;
  encouragement: string;
}

export interface ProblemSet {
  id: string;
  title: string;
  description: string;
  level: string;
  generateProblems: () => MathProblem[];
}

const encouragements = [
  "잘했어요! 서현이는 수학 천재!",
  "대단해요! 완벽하게 맞췄어요!",
  "멋져요! 이렇게 잘할 수 있다니!",
  "훌륭해요! 할아버지가 자랑스러워요!",
  "완벽해요! 서현이는 최고예요!",
  "정확해요! 아주 잘했어요!",
  "와우! 서현이가 또 해냈네요!",
  "굉장해요! 이제 식은 죽 먹기죠?",
  "놀라워요! 서현이는 수학의 달인!",
  "최고예요! 할아버지가 감동했어요!"
];

const getRandomEncouragement = () => {
  return encouragements[Math.floor(Math.random() * encouragements.length)];
};

export const mathProblemSets: Record<string, ProblemSet> = {
  '1-1': {
    id: '1-1',
    title: "덧셈 연습 (초급)",
    description: "1부터 10까지의 덧셈",
    level: "초급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 5) + 1; // 1~5
        const num2 = Math.floor(Math.random() * 5) + 1; // 1~5
        problems.push({
          question: `${num1} + ${num2} = ?`,
          answer: num1 + num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '1-2': {
    id: '1-2',
    title: "덧셈 연습 (중급)",
    description: "11부터 20까지의 덧셈",
    level: "중급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 5) + 6; // 6~10
        const num2 = Math.floor(Math.random() * 5) + 6; // 6~10
        problems.push({
          question: `${num1} + ${num2} = ?`,
          answer: num1 + num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '1-3': {
    id: '1-3',
    title: "덧셈 연습 (고급)",
    description: "20 이상의 덧셈",
    level: "고급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 10) + 11; // 11~20
        const num2 = Math.floor(Math.random() * 10) + 11; // 11~20
        problems.push({
          question: `${num1} + ${num2} = ?`,
          answer: num1 + num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },

  '2-1': {
    id: '2-1',
    title: "뺄셈 연습 (초급)",
    description: "10 이하의 뺄셈",
    level: "초급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 5) + 6; // 6~10
        const num2 = Math.floor(Math.random() * 5) + 1; // 1~5
        problems.push({
          question: `${num1} - ${num2} = ?`,
          answer: num1 - num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '2-2': {
    id: '2-2',
    title: "뺄셈 연습 (중급)",
    description: "20 이하의 뺄셈",
    level: "중급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 10) + 11; // 11~20
        const num2 = Math.floor(Math.random() * 10) + 1; // 1~10
        problems.push({
          question: `${num1} - ${num2} = ?`,
          answer: num1 - num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '2-3': {
    id: '2-3',
    title: "뺄셈 연습 (고급)",
    description: "20 이상의 뺄셈",
    level: "고급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 10) + 21; // 21~30
        const num2 = Math.floor(Math.random() * 15) + 1; // 1~15
        problems.push({
          question: `${num1} - ${num2} = ?`,
          answer: num1 - num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },

  '3-1': {
    id: '3-1',
    title: "곱셈 연습 (초급)",
    description: "1단부터 3단까지",
    level: "초급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 3) + 1; // 1~3
        const num2 = Math.floor(Math.random() * 5) + 1; // 1~5
        problems.push({
          question: `${num1} × ${num2} = ?`,
          answer: num1 * num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '3-2': {
    id: '3-2',
    title: "곱셈 연습 (중급)",
    description: "4단부터 6단까지",
    level: "중급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 3) + 4; // 4~6
        const num2 = Math.floor(Math.random() * 5) + 1; // 1~5
        problems.push({
          question: `${num1} × ${num2} = ?`,
          answer: num1 * num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '3-3': {
    id: '3-3',
    title: "곱셈 연습 (고급)",
    description: "7단부터 9단까지",
    level: "고급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 3) + 7; // 7~9
        const num2 = Math.floor(Math.random() * 5) + 1; // 1~5
        problems.push({
          question: `${num1} × ${num2} = ?`,
          answer: num1 * num2,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },

  '4-1': {
    id: '4-1',
    title: "나눗셈 연습 (초급)",
    description: "10 이하의 나눗셈",
    level: "초급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num2 = 2; // 2로 나누기
        const answer = Math.floor(Math.random() * 4) + 1; // 1~4
        const num1 = num2 * answer; // 나누어 떨어지는 수 생성
        problems.push({
          question: `${num1} ÷ ${num2} = ?`,
          answer: answer,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '4-2': {
    id: '4-2',
    title: "나눗셈 연습 (중급)",
    description: "20 이하의 나눗셈",
    level: "중급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num2 = Math.floor(Math.random() * 2) + 2; // 2~3
        const answer = Math.floor(Math.random() * 4) + 2; // 2~5
        const num1 = num2 * answer; // 나누어 떨어지는 수 생성
        problems.push({
          question: `${num1} ÷ ${num2} = ?`,
          answer: answer,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  },
  '4-3': {
    id: '4-3',
    title: "나눗셈 연습 (고급)",
    description: "30 이하의 나눗셈",
    level: "고급",
    generateProblems: () => {
      const problems: MathProblem[] = [];
      for (let i = 0; i < 10; i++) {
        const num2 = Math.floor(Math.random() * 3) + 3; // 3~5
        const answer = Math.floor(Math.random() * 4) + 3; // 3~6
        const num1 = num2 * answer; // 나누어 떨어지는 수 생성
        problems.push({
          question: `${num1} ÷ ${num2} = ?`,
          answer: answer,
          encouragement: getRandomEncouragement()
        });
      }
      return problems;
    }
  }
}; 