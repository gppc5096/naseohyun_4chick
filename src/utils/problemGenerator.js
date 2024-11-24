import { DIFFICULTY_LEVELS, PROBLEM_TYPES } from '../types/problems';
import { SUBJECT_CATEGORIES } from '../types/learning';

// 파일 상단에 GRADE_LEVELS 상수 추가
export const GRADE_LEVELS = {
  GRADE1: 'GRADE1',
  GRADE2: 'GRADE2',
  GRADE5: 'GRADE5',
  GRADE6: 'GRADE6',
  // ... 필요한 학년 레벨 추가
};

// 사칙연산 문제 생성 함수 수정
const generateArithmeticProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const operations = ['+', '-'];
      const op = operations[Math.floor(Math.random() * operations.length)];
      const num1 = Math.floor(Math.random() * 50) + 1;
      const num2 = Math.floor(Math.random() * 50) + 1;
      const answer = op === '+' ? num1 + num2 : num1 - num2;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num1} ${op} ${num2} = ?`,
        options: [
          answer,
          answer + 1,
          answer - 1,
          answer + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(answer),
        explanation: `${num1}${op}${num2}=${answer}입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const num3 = Math.floor(Math.random() * 100) + 50;
      const num4 = Math.floor(Math.random() * 20) + 1;
      const multiplyAnswer = num3 * num4;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num3} × ${num4} = ?`,
        options: [
          multiplyAnswer,
          multiplyAnswer + num3,
          multiplyAnswer - num3,
          multiplyAnswer + num4
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(multiplyAnswer),
        explanation: `${num3}와 ${num4}를 곱하면 ${multiplyAnswer}입니다.`,
        points: 15,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      };

    case DIFFICULTY_LEVELS.HARD:
      const num5 = Math.floor(Math.random() * 1000) + 100;
      const num6 = Math.floor(Math.random() * 10) + 2;
      const divideAnswer = Math.floor(num5 / num6);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num5} ÷ ${num6} = ?`,
        options: [
          divideAnswer,
          divideAnswer + 1,
          divideAnswer - 1,
          divideAnswer + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(divideAnswer),
        explanation: `${num5}를 ${num6}로 나누면 ${divideAnswer}입니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      };

    default:
      return null;
  }
};

// 분수 문제 생성 함수
const generateFractionProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const denom1 = Math.floor(Math.random() * 5) + 2; // 2~6
      const num1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const num2 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const sum = num1 + num2;

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${num1}/${denom1}_${num2}/${denom1}`,
        question: `${num1}/${denom1} + ${num2}/${denom1} = ?`,
        correctAnswer: `${sum}/${denom1}`,
        explanation: `같은 분모의 분수는 분자끼리 더합니다. ${num1}/${denom1} + ${num2}/${denom1} = ${sum}/${denom1}`,
        points: 10,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const denom2 = Math.floor(Math.random() * 5) + 2;
      const whole = Math.floor(Math.random() * 3) + 1;
      const num3 = Math.floor(Math.random() * (denom2 - 1)) + 1;

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${whole}_${num3}/${denom2}`,
        question: `${whole} + ${num3}/${denom2} = ?`,
        correctAnswer: `${whole * denom2 + num3}/${denom2}`,
        explanation: `자연수 ${whole}를 분수로 바꾸면 ${whole * denom2}/${denom2}입니다. 따라서 ${whole * denom2}/${denom2} + ${num3}/${denom2} = ${whole * denom2 + num3}/${denom2}`,
        points: 15,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.HARD:
      // 약분이 필요한 분수 문제
      const factors = [2, 3, 4, 5];
      const factor = factors[Math.floor(Math.random() * factors.length)];
      const simplifiedNum = Math.floor(Math.random() * 5) + 1;
      const simplifiedDenom = Math.floor(Math.random() * 5) + simplifiedNum + 1;
      const num4 = simplifiedNum * factor;
      const denom3 = simplifiedDenom * factor;

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${num4}/${denom3}`,
        question: `${num4}/${denom3}를 약분하면?`,
        correctAnswer: `${simplifiedNum}/${simplifiedDenom}`,
        explanation: `${num4}와 ${denom3}의 최대약수는 ${factor}입니다. 분자와 분모를 ${factor}로 나누면 ${simplifiedNum}/${simplifiedDenom}이 됩니다.`,
        points: 20,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    default:
      return null;
  }
};

// 소수 문제 생성 함수 확장
const generateDecimalProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const decimal1 = Math.floor(Math.random() * 10) / 10;
      const decimal2 = Math.floor(Math.random() * 10) / 10;
      const decimalSum = +(decimal1 + decimal2).toFixed(1);

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${decimal1}_${decimal2}`,
        question: `${decimal1} + ${decimal2} = ?`,
        correctAnswer: String(decimalSum),
        explanation: `${decimal1} + ${decimal2} = ${decimalSum}입니다.`,
        points: 10,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const decimal3 = +(Math.random() * 5).toFixed(2);
      const decimal4 = +(Math.random() * 2).toFixed(2);
      const product = +(decimal3 * decimal4).toFixed(2);

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${decimal3}_${decimal4}`,
        question: `${decimal3} × ${decimal4} = ?`,
        correctAnswer: String(product),
        explanation: `${decimal3} × ${decimal4} = ${product}입니다.`,
        points: 15,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.HARD:
      const decimal5 = +(Math.random() * 10 + 1).toFixed(2);
      const decimal6 = +(Math.random() * 2 + 0.5).toFixed(2);
      const quotient = +(decimal5 / decimal6).toFixed(2);

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${decimal5}_${decimal6}`,
        question: `${decimal5} ÷ ${decimal6} = ?`,
        correctAnswer: String(quotient),
        explanation: `${decimal5} ÷ ${decimal6} = ${quotient}입니다.`,
        points: 20,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    default:
      return null;
  }
};

// 5학년용 도형 문제 생성
const generateGrade5GeometryProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 직육면체의 겉넓이
      const length = Math.floor(Math.random() * 10) + 5;
      const width = Math.floor(Math.random() * 10) + 5;
      const height = Math.floor(Math.random() * 10) + 5;
      const surfaceArea = 2 * ((length * width) + (length * height) + (width * height));

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `가로 ${length}cm, 세로 ${width}cm, 높이 ${height}cm인 직육면체의 겉넓이를 구하세요.`,
        options: [
          surfaceArea,
          surfaceArea + 10,
          surfaceArea - 10,
          surfaceArea + 20
        ].sort(() => Math.random() - 0.5).map(n => `${n}cm²`),
        correctAnswer: `${surfaceArea}cm²`,
        explanation: `직육면체의 겉넓이는 (가로×세로)×2 + (가로×높이)×2 + (세로×높이)×2입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.GEOMETRY
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 원기둥의 부피
      const radius = Math.floor(Math.random() * 5) + 3;
      const cylinderHeight = Math.floor(Math.random() * 10) + 5;
      const volume = Math.round(Math.PI * radius * radius * cylinderHeight);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `반지름이 ${radius}cm, 높이가 ${cylinderHeight}cm인 원기둥의 부피를 구. (π = 3.14)`,
        options: [
          volume,
          volume + radius * 2,
          volume - radius * 2,
          volume + cylinderHeight * 2
        ].sort(() => Math.random() - 0.5).map(n => `${n}cm³`),
        correctAnswer: `${volume}cm³`,
        explanation: `원기둥의 부피는 π × 반지름² × 높이입니다.`,
        points: 15,
        category: SUBJECT_CATEGORIES.GEOMETRY
      };

    case DIFFICULTY_LEVELS.HARD:
      // 각기둥의 전개
      const sides = Math.floor(Math.random() * 3) + 3; // 3~5각형

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${sides}각기둥의 전개도에서 옆면의 개수는 몇 개이고, 밑면의 개수는 몇 개인가요?`,
        options: [
          `옆면 ${sides}개, 밑면 2개`,
          `옆면 ${sides + 1}개, 밑면 2개`,
          `옆면 ${sides}개, 밑면 1개`,
          `옆면 ${sides - 1}개, 밑면 2개`
        ],
        correctAnswer: `옆면 ${sides}개, 밑면 2개`,
        explanation: `${sides}각기둥의 전개도는 옆면 ${sides}개와 밑면 2개로 구성됩니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.GEOMETRY
      };

    default:
      return null;
  }
};

// 6학년용 도형 문제 생성
const generateGrade6GeometryProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 원뿔의 전개도
      const coneRadius = Math.floor(Math.random() * 5) + 3;
      const arcLength = Math.round(2 * Math.PI * coneRadius);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `반지름이 ${coneRadius}cm인 원뿔의 전개도에서 호의 길이를 구하세요. (π = 3.14)`,
        options: [
          arcLength,
          arcLength + 2,
          arcLength - 2,
          arcLength + 4
        ].sort(() => Math.random() - 0.5).map(n => `${n}cm`),
        correctAnswer: `${arcLength}cm`,
        explanation: `원뿔의 전개도에서 호의 길이는 2 × π × 반지름입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.GEOMETRY
      };

    default:
      return null;
  }
};

// 측정 문제 생성 함수
const generateMeasurementProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const meters = Math.floor(Math.random() * 10) + 1;
      const centimeters = meters * 100;

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${meters}`,
        question: `${meters}m는 몇 cm인가요?`,
        correctAnswer: `${centimeters}cm`,
        explanation: `1m = 100cm이므로, ${meters}m = ${centimeters}cm입니다.`,
        points: 10,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const kilograms = Math.floor(Math.random() * 5) + 1;
      const grams = Math.floor(Math.random() * 900) + 100;
      const totalGrams = kilograms * 1000 + grams;

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${kilograms}_${grams}`,
        question: `${kilograms}kg ${grams}g은 모두 몇 g인가요?`,
        correctAnswer: `${totalGrams}g`,
        explanation: `1kg = 1000g이므로, ${kilograms}kg = ${kilograms * 1000}g입니다. 여기에 ${grams}g을 더하면 ${totalGrams}g이 됩니다.`,
        points: 15,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.HARD:
      const hours = Math.floor(Math.random() * 12) + 1;
      const minutes = Math.floor(Math.random() * 60);
      const totalMinutes = hours * 60 + minutes;

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${hours}_${minutes}`,
        question: `${hours}시간 ${minutes}분은 모두 몇 분인가요?`,
        correctAnswer: `${totalMinutes}분`,
        explanation: `1시간 = 60이므로, ${hours}시간 = ${hours * 60}분입니다. 여기에 ${minutes}분을 더하면 ${totalMinutes}분이 됩니다.`,
        points: 20,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    default:
      return null;
  }
};

// 통계 문제 생성 함수
const generateStatisticsProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
      const sum = numbers.reduce((a, b) => a + b, 0);
      const average = sum / numbers.length;

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${numbers.join(', ')}`,
        question: `다음 숫자들의 평균을 구하세요: ${numbers.join(', ')}`,
        correctAnswer: String(average),
        explanation: `모든 수를 더한 후 개수로 나누면 됩니다. (${numbers.join(' + ')}) ÷ ${numbers.length} = ${average}`,
        points: 10,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1).sort((a, b) => a - b);
      const median = data.length % 2 === 0 
        ? (data[data.length/2 - 1] + data[data.length/2]) / 2
        : data[Math.floor(data.length/2)];

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${data.join(', ')}`,
        question: `다음 숫자들의 중앙값을 구하세요: ${data.join(', ')}`,
        correctAnswer: String(median),
        explanation: `숫자들을 순서대로 나열한 후 가운데 있는 값을 찾습니다.`,
        points: 15,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    case DIFFICULTY_LEVELS.HARD:
      const frequencies = {
        A: Math.floor(Math.random() * 5) + 1,
        B: Math.floor(Math.random() * 5) + 1,
        C: Math.floor(Math.random() * 5) + 1
      };
      const mode = Object.entries(frequencies)
        .sort((a, b) => b[1] - a[1])[0][0];

      return {
        id: `${PROBLEM_TYPES.MULTIPLE_CHOICE}_${frequencies.A}_${frequencies.B}_${frequencies.C}`,
        question: `A가 ${frequencies.A}번, B가 ${frequencies.B}, C가 ${frequencies.C}번 나왔을 때, 가장 많이 나온 것은?`,
        correctAnswer: mode,
        explanation: `A는 ${frequencies.A}번, B는 ${frequencies.B}번, C는 ${frequencies.C}번 나왔으므로, ${mode}가 가장 많이 나왔습니다.`,
        points: 20,
        category: PROBLEM_TYPES.MULTIPLE_CHOICE
      };

    default:
      return null;
  }
};

// 함수 정의 추가
const generateGeometryProblem = (difficulty) => {
  // 기하학 문제 생성 로직
};

// 5학년용 분수 문제 생성
const generateGrade5FractionProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 분수의 덧셈과 뺄셈 (같은 분모)
      const denom1 = Math.floor(Math.random() * 8) + 3; // 3~10
      const num1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const num2 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const isAddition = Math.random() > 0.5;
      const resultNum = isAddition ? num1 + num2 : Math.max(num1, num2) - Math.min(num1, num2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${Math.max(num1, num2)}/${denom1} ${isAddition ? '+' : '-'} ${Math.min(num1, num2)}/${denom1} = ?`,
        options: [
          `${resultNum}/${denom1}`,
          `${resultNum + 1}/${denom1}`,
          `${resultNum - 1}/${denom1}`,
          `${resultNum}/${denom1 + 1}`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${resultNum}/${denom1}`,
        explanation: `분모가 같은 분수는 분자끼리 ${isAddition ? '더하면' : '빼면'} 됩니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.FRACTION
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 분수의 곱셈
      const num3 = Math.floor(Math.random() * 5) + 2;  // 2~6
      const denom2 = Math.floor(Math.random() * 5) + 3;  // 3~7
      const num4 = Math.floor(Math.random() * 5) + 2;  // 2~6
      const denom3 = Math.floor(Math.random() * 5) + 3;  // 3~7
      const productNum = num3 * num4;
      const productDenom = denom2 * denom3;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num3}/${denom2} × ${num4}/${denom3} = ?`,
        options: [
          `${productNum}/${productDenom}`,
          `${productNum + 1}/${productDenom}`,
          `${productNum}/${productDenom + 1}`,
          `${productNum - 1}/${productDenom}`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${productNum}/${productDenom}`,
        explanation: `분수의 곱셈은 분자끼리 곱하고 분모끼리 곱합니다.`,
        points: 15,
        category: SUBJECT_CATEGORIES.FRACTION
      };

    case DIFFICULTY_LEVELS.HARD:
      // 분수의 나눗셈
      const num5 = Math.floor(Math.random() * 5) + 2;  // 2~6
      const denom4 = Math.floor(Math.random() * 5) + 3;  // 3~7
      const num6 = Math.floor(Math.random() * 5) + 2;  // 2~6
      const denom5 = Math.floor(Math.random() * 5) + 3;  // 3~7
      const divisionNum = num5 * denom5;
      const divisionDenom = denom4 * num6;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num5}/${denom4} ÷ ${num6}/${denom5} = ?`,
        options: [
          `${divisionNum}/${divisionDenom}`,
          `${divisionNum + 1}/${divisionDenom}`,
          `${divisionNum}/${divisionDenom + 1}`,
          `${divisionNum - 1}/${divisionDenom}`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${divisionNum}/${divisionDenom}`,
        explanation: `분수의 나눗셈은 첫 번째 분수에 두 번째 분수의 역수를 곱합니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.FRACTION
      };

    default:
      return null;
  }
};

// 6학년용 분수 문제 생성
const generateGrade6FractionProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 대분수의 덧셈과 뺄셈
      const whole1 = Math.floor(Math.random() * 3) + 1;  // 1~3
      const denom1 = Math.floor(Math.random() * 5) + 2;  // 2~6
      const num1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const whole2 = Math.floor(Math.random() * 3) + 1;  // 1~3
      const num2 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const isAddition = Math.random() > 0.5;

      const total1 = whole1 * denom1 + num1;
      const total2 = whole2 * denom1 + num2;
      const resultTotal = isAddition ? total1 + total2 : Math.max(total1, total2) - Math.min(total1, total2);
      const resultWhole = Math.floor(resultTotal / denom1);
      const resultNum = resultTotal % denom1;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${whole1} ${num1}/${denom1} ${isAddition ? '+' : '-'} ${whole2} ${num2}/${denom1} = ?`,
        options: [
          `${resultWhole} ${resultNum}/${denom1}`,
          `${resultWhole + 1} ${resultNum}/${denom1}`,
          `${resultWhole} ${resultNum + 1}/${denom1}`,
          `${resultWhole - 1} ${resultNum}/${denom1}`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${resultWhole} ${resultNum}/${denom1}`,
        explanation: `대분수를 가분수로 바꾼 후 계산하고, 다시 대분수로 바꿉니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.FRACTION
      };

    // ... 중간, 어려움 난이도 추가 ...

    default:
      return null;
  }
};

// 5학년용 소수 문제 생성
const generateGrade5DecimalProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 소수의 덧셈과 뺄셈 (소수점 둘째자리까지)
      const decimal1 = +(Math.random() * 10).toFixed(2);
      const decimal2 = +(Math.random() * 10).toFixed(2);
      const isAddition = Math.random() > 0.5;
      const result = isAddition ? 
        +(decimal1 + decimal2).toFixed(2) : 
        +(Math.max(decimal1, decimal2) - Math.min(decimal1, decimal2)).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${Math.max(decimal1, decimal2)} ${isAddition ? '+' : '-'} ${Math.min(decimal1, decimal2)} = ?`,
        options: [
          result,
          +(result + 0.1).toFixed(2),
          +(result - 0.1).toFixed(2),
          +(result + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(result),
        explanation: `소수점을 맞추어 계산하면 ${result}가 됩니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.DECIMAL
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 소수의 곱셈
      const decimal3 = +(Math.random() * 5).toFixed(1);
      const decimal4 = +(Math.random() * 5).toFixed(1);
      const product = +(decimal3 * decimal4).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${decimal3} × ${decimal4} = ?`,
        options: [
          product,
          +(product + 0.1).toFixed(2),
          +(product - 0.1).toFixed(2),
          +(product + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(product),
        explanation: `${decimal3} × ${decimal4} = ${product}입니다.`,
        points: 15,
        category: SUBJECT_CATEGORIES.DECIMAL
      };

    case DIFFICULTY_LEVELS.HARD:
      // 소수의 나눗셈
      const dividend = +(Math.random() * 10 + 1).toFixed(1);
      const divisor = +(Math.random() * 2 + 1).toFixed(1);
      const quotient = +(dividend / divisor).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${dividend} ÷ ${divisor} = ? (소수점 둘째자리까지 구하시오)`,
        options: [
          quotient,
          +(quotient + 0.1).toFixed(2),
          +(quotient - 0.1).toFixed(2),
          +(quotient + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(quotient),
        explanation: `${dividend} ÷ ${divisor} = ${quotient}입니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.DECIMAL
      };

    default:
      return null;
  }
};

// 6학년용 소수 문제 생성
const generateGrade6DecimalProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 복합 소수 계산 (덧셈, 뺄셈)
      const decimal1 = +(Math.random() * 10).toFixed(2);
      const decimal2 = +(Math.random() * 10).toFixed(2);
      const decimal3 = +(Math.random() * 10).toFixed(2);
      const result = +(decimal1 + decimal2 - decimal3).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${decimal1} + ${decimal2} - ${decimal3} = ?`,
        options: [
          result,
          +(result + 0.1).toFixed(2),
          +(result - 0.1).toFixed(2),
          +(result + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(result),
        explanation: `순서대로 계산하면 ${result}가 됩니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.DECIMAL
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 소수의 곱셈과 나눗셈
      const decimal4 = +(Math.random() * 10).toFixed(2);
      const decimal5 = +(Math.random() * 5).toFixed(2);
      const decimal6 = +(Math.random() * 2 + 1).toFixed(2);
      const complexResult = +((decimal4 * decimal5) / decimal6).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `(${decimal4} × ${decimal5}) ÷ ${decimal6} = ?`,
        options: [
          complexResult,
          +(complexResult + 0.1).toFixed(2),
          +(complexResult - 0.1).toFixed(2),
          +(complexResult + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(complexResult),
        explanation: `1. ${decimal4} × ${decimal5} = ${(decimal4 * decimal5).toFixed(2)}\n2. ${(decimal4 * decimal5).toFixed(2)} ÷ ${decimal6} = ${complexResult}`,
        points: 15,
        category: SUBJECT_CATEGORIES.DECIMAL
      };

    case DIFFICULTY_LEVELS.HARD:
      // 복합 소수 계산 (곱셈, 나눗셈, 덧셈)
      const decimal7 = +(Math.random() * 10).toFixed(2);
      const decimal8 = +(Math.random() * 5).toFixed(2);
      const decimal9 = +(Math.random() * 2 + 1).toFixed(2);
      const decimal10 = +(Math.random() * 5).toFixed(2);
      const hardResult = +((decimal7 * decimal8) / decimal9 + decimal10).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `(${decimal7} × ${decimal8} ÷ ${decimal9}) + ${decimal10} = ?`,
        options: [
          hardResult,
          +(hardResult + 0.1).toFixed(2),
          +(hardResult - 0.1).toFixed(2),
          +(hardResult + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(hardResult),
        explanation: `1. ${decimal7} × ${decimal8} = ${(decimal7 * decimal8).toFixed(2)}\n2. ${(decimal7 * decimal8).toFixed(2)} ÷ ${decimal9} = ${((decimal7 * decimal8) / decimal9).toFixed(2)}\n3. ${((decimal7 * decimal8) / decimal9).toFixed(2)} + ${decimal10} = ${hardResult}`,
        points: 20,
        category: SUBJECT_CATEGORIES.DECIMAL
      };

    default:
      return null;
  }
};

// 5학년용 측정 문제 생성
const generateGrade5MeasurementProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 부피 단위 변환 (cm³ → m³)
      const cubicCm = Math.floor(Math.random() * 1000000) + 1000000;
      const cubicM = cubicCm / 1000000;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${cubicCm}cm³는 몇 m³인가요?`,
        options: [
          cubicM,
          cubicM + 1,
          cubicM - 1,
          cubicM + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(cubicM),
        explanation: `1m³ = 1,000,000cm³이므로, ${cubicCm}cm³ = ${cubicM}m³입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.MEASUREMENT
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 들이 단위 변환 (mL → L)
      const milliliters = Math.floor(Math.random() * 9000) + 1000;
      const liters = milliliters / 1000;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${milliliters}mL는 몇 L인가요?`,
        options: [
          liters,
          liters + 0.5,
          liters - 0.5,
          liters + 1
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(liters),
        explanation: `1L = 1,000mL이므로, ${milliliters}mL = ${liters}L입니다.`,
        points: 15,
        category: SUBJECT_CATEGORIES.MEASUREMENT
      };

    case DIFFICULTY_LEVELS.HARD:
      // 복합 단위 변환
      const kg = Math.floor(Math.random() * 10) + 1;
      const g = Math.floor(Math.random() * 900) + 100;
      const totalG = kg * 1000 + g;
      const mg = totalG * 1000;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${kg}kg ${g}g은 몇 mg인가요?`,
        options: [
          mg,
          mg + 1000,
          mg - 1000,
          mg + 2000
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(mg),
        explanation: `먼저 ${kg}kg ${g}g을 g으로 바꾸면 ${totalG}g이고, 이를 mg로 바꾸면 ${mg}mg입니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.MEASUREMENT
      };

    default:
      return null;
  }
};

// 6학년용 측정 문제 생성
const generateGrade6MeasurementProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 속력 계산 (거리 ÷ 시간)
      const distance = Math.floor(Math.random() * 100) + 50; // 50~150km
      const time = Math.floor(Math.random() * 3) + 1; // 1~3시간
      const speed = distance / time;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${distance}km를 ${time}시간 동안 달렸습니다. 평균 속력은 몇 km/h인가요?`,
        options: [
          speed,
          speed + 5,
          speed - 5,
          speed + 10
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(speed),
        explanation: `속력 = 거리 ÷ 시간이므로, ${distance} ÷ ${time} = ${speed}km/h입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.MEASUREMENT
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 넓이와 시간 이용한 복합 문제
      const area = Math.floor(Math.random() * 100) + 50; // 50~150m²
      const workPerHour = Math.floor(Math.random() * 10) + 5; // 5~15m²/시간
      const totalHours = Math.ceil(area / workPerHour);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${area}m²의 벽을 페인트칠하는데, 1시간에 ${workPerHour}m²씩 칠할 수 있습니다. 전체 작업을 마치는데 몇 시간이 걸리나요?`,
        options: [
          totalHours,
          totalHours + 1,
          totalHours - 1,
          totalHours + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(totalHours),
        explanation: `전체 면적을 시간당 작업량으로 나누면 됩니다. ${area} ÷ ${workPerHour} = ${totalHours}시간`,
        points: 15,
        category: SUBJECT_CATEGORIES.MEASUREMENT
      };

    case DIFFICULTY_LEVELS.HARD:
      // 복합 단위 변환과 속력 계산
      const meters = Math.floor(Math.random() * 1000) + 500; // 500~1500m
      const minutes = Math.floor(Math.random() * 10) + 5; // 5~15분
      const seconds = Math.floor(Math.random() * 60); // 0~59초
      const totalSeconds = minutes * 60 + seconds;
      const speedMPS = +(meters / totalSeconds).toFixed(2);
      const speedKPH = +((speedMPS * 3600) / 1000).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${meters}m를 ${minutes}분 ${seconds}초 동안 달렸습니다. 평균 속력은 몇 km/h인가요?`,
        options: [
          speedKPH,
          +(speedKPH + 1.5).toFixed(2),
          +(speedKPH - 1.5).toFixed(2),
          +(speedKPH + 3).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(speedKPH),
        explanation: `1. 시간을 초로 변환: ${minutes}분 ${seconds}초 = ${totalSeconds}초\n2. m/s 속력 계산: ${meters}m ÷ ${totalSeconds}초 = ${speedMPS}m/s\n3. km/h로 변환: ${speedMPS} × (3600/1000) = ${speedKPH}km/h`,
        points: 20,
        category: SUBJECT_CATEGORIES.MEASUREMENT
      };

    default:
      return null;
  }
};

// 5학년용 통계 문제 생성
const generateGrade5StatisticsProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 평균 구하기 (소수점 있는 경우)
      const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
      const sum = numbers.reduce((a, b) => a + b, 0);
      const average = +(sum / numbers.length).toFixed(1);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `다음 숫자들의 평균을 구하세요 (소수점 첫째자리까지): ${numbers.join(', ')}`,
        options: [
          average,
          +(average + 0.5).toFixed(1),
          +(average - 0.5).toFixed(1),
          +(average + 1).toFixed(1)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(average),
        explanation: `모든 수의 합 ${sum}을 개수 ${numbers.length}로 나누면 ${average}입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.STATISTICS
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 비율과 백분율
      const total = Math.floor(Math.random() * 100) + 50; // 50~150
      const part = Math.floor(Math.random() * total);
      const percentage = Math.round((part / total) * 100);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `전체 ${total}명 중 ${part}명이 참여했습니다. 참여율은 몇 %인가요?`,
        options: [
          percentage,
          percentage + 5,
          percentage - 5,
          percentage + 10
        ].sort(() => Math.random() - 0.5).map(n => `${n}%`),
        correctAnswer: `${percentage}%`,
        explanation: `(${part} ÷ ${total}) × 100 = ${percentage}%`,
        points: 15,
        category: SUBJECT_CATEGORIES.STATISTICS
      };

    case DIFFICULTY_LEVELS.HARD:
      // 상대도수 구하기
      const frequencies = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);
      const totalFreq = frequencies.reduce((a, b) => a + b, 0);
      const targetIndex = Math.floor(Math.random() * frequencies.length);
      const relativeFreq = +(frequencies[targetIndex] / totalFreq).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `어떤 조사에서 A는 ${frequencies[0]}회, B는 ${frequencies[1]}회, C는 ${frequencies[2]}회, D는 ${frequencies[3]}회 나왔습니다. ${['A', 'B', 'C', 'D'][targetIndex]}의 상대도수는 얼마인가요?`,
        options: [
          relativeFreq,
          +(relativeFreq + 0.1).toFixed(2),
          +(relativeFreq - 0.1).toFixed(2),
          +(relativeFreq + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(relativeFreq),
        explanation: `${['A', 'B', 'C', 'D'][targetIndex]}의 도수 ${frequencies[targetIndex]}를 전체 도수 ${totalFreq}로 나누면 ${relativeFreq}입니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.STATISTICS
      };

    default:
      return null;
  }
};

// 6학년용 통계 문제 생성
const generateGrade6StatisticsProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      // 띠그래프 해석
      const activityCategories = ['운동', '독서', '게임', '공부'];
      const activityData = Array.from({ length: 4 }, () => Math.floor(Math.random() * 30) + 10);
      const activityTotal = activityData.reduce((a, b) => a + b, 0);
      const activityPercentages = activityData.map(p => Math.round((p / activityTotal) * 100));
      const selectedActivityIndex = Math.floor(Math.random() * activityCategories.length);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `방과 후 활동 시간을 조사한 띠그래프에서 ${activityCategories[selectedActivityIndex]}이(가) 차지하는 비율은 몇 %인가요?\n(${activityCategories.map((cat, i) => `${cat}: ${activityPercentages[i]}%`).join(', ')})`,
        options: [
          activityPercentages[selectedActivityIndex],
          activityPercentages[selectedActivityIndex] + 5,
          activityPercentages[selectedActivityIndex] - 5,
          activityPercentages[selectedActivityIndex] + 10
        ].sort(() => Math.random() - 0.5).map(n => `${n}%`),
        correctAnswer: `${activityPercentages[selectedActivityIndex]}%`,
        explanation: `띠그래프에서 ${activityCategories[selectedActivityIndex]}이(가) 차지하는 비율은 ${activityPercentages[selectedActivityIndex]}%입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.STATISTICS
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      // 원그래프 해석과 비율 계산
      const studentTotal = Math.floor(Math.random() * 300) + 200; // 200~500
      const activityParts = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 10);
      const activitySum = activityParts.reduce((a, b) => a + b, 0);
      const partPercentages = activityParts.map(p => Math.round((p / activitySum) * 100));
      const selectedPartIndex = Math.floor(Math.random() * activityParts.length);
      const activityTypes = ['학원', '운동', '독서', '게임', '기타'];

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `전체 학생 ${studentTotal}명을 대상으로 방과 후 활동을 조사했습니다. 원그래프에서 ${activityTypes[selectedPartIndex]}이(가) ${partPercentages[selectedPartIndex]}%를 차지할 때, ${activityTypes[selectedPartIndex]}를 선택한 학생은 몇 명인가요?`,
        options: [
          Math.round((studentTotal * partPercentages[selectedPartIndex]) / 100),
          Math.round((studentTotal * (partPercentages[selectedPartIndex] + 5)) / 100),
          Math.round((studentTotal * (partPercentages[selectedPartIndex] - 5)) / 100),
          Math.round((studentTotal * (partPercentages[selectedPartIndex] + 10)) / 100)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(Math.round((studentTotal * partPercentages[selectedPartIndex]) / 100)),
        explanation: `전체의 ${partPercentages[selectedPartIndex]}%는 ${studentTotal} × ${partPercentages[selectedPartIndex]}/100 = ${Math.round((studentTotal * partPercentages[selectedPartIndex]) / 100)}명입니다.`,
        points: 15,
        category: SUBJECT_CATEGORIES.STATISTICS
      };

    case DIFFICULTY_LEVELS.HARD:
      // 평균과 총합 관련 복합 문제
      const groupCount = Math.floor(Math.random() * 3) + 3; // 3~5개 그룹
      const groupSizes = Array.from({ length: groupCount }, () => Math.floor(Math.random() * 10) + 5);
      const groupAverages = Array.from({ length: groupCount }, () => Math.floor(Math.random() * 20) + 70);
      const totalStudents = groupSizes.reduce((a, b) => a + b, 0);
      const totalSum = groupSizes.reduce((acc, size, i) => acc + (size * groupAverages[i]), 0);
      const totalAverage = Math.round(totalSum / totalStudents);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${groupCount}개 반의 수학 시험 결과입니다.\n${groupSizes.map((size, i) => 
          `${i + 1}반: ${size}명 (평균 ${groupAverages[i]}점)`).join('\n')}\n전체 학생들의 평균 점수는 몇 점인가요?`,
        options: [
          totalAverage,
          totalAverage + 2,
          totalAverage - 2,
          totalAverage + 4
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(totalAverage),
        explanation: `각 반의 (학생 수 × 평균 점수)의 합을 전체 학생 수로 나누면 됩니다.\n` +
          `전체 합: ${totalSum}점\n전체 학생 수: ${totalStudents}명\n` +
          `따라서 전체 평균은 ${totalSum} ÷ ${totalStudents} = ${totalAverage}점입니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.STATISTICS
      };

    default:
      return null;
  }
};

// 각 학년별 문제 생성기 매핑 업데이트
const gradeGenerators = {
  [GRADE_LEVELS.GRADE_1]: {
    [SUBJECT_CATEGORIES.ARITHMETIC]: generateArithmeticProblem,
    [SUBJECT_CATEGORIES.FRACTION]: generateFractionProblem,
    [SUBJECT_CATEGORIES.DECIMAL]: generateDecimalProblem,
    [SUBJECT_CATEGORIES.GEOMETRY]: generateGrade5GeometryProblem,
    [SUBJECT_CATEGORIES.MEASUREMENT]: generateMeasurementProblem,
    [SUBJECT_CATEGORIES.STATISTICS]: generateStatisticsProblem,
    // ... 다른 과목들
  },
  [GRADE_LEVELS.GRADE_2]: {
    [SUBJECT_CATEGORIES.ARITHMETIC]: generateArithmeticProblem,
    [SUBJECT_CATEGORIES.FRACTION]: generateFractionProblem,
    [SUBJECT_CATEGORIES.DECIMAL]: generateDecimalProblem,
    [SUBJECT_CATEGORIES.GEOMETRY]: generateGrade5GeometryProblem,
    [SUBJECT_CATEGORIES.MEASUREMENT]: generateMeasurementProblem,
    [SUBJECT_CATEGORIES.STATISTICS]: generateStatisticsProblem,
    // ... 다른 과목들
  },
  [GRADE_LEVELS.GRADE_5]: {
    [SUBJECT_CATEGORIES.FRACTION]: generateGrade5FractionProblem,
    [SUBJECT_CATEGORIES.DECIMAL]: generateGrade5DecimalProblem,
    [SUBJECT_CATEGORIES.GEOMETRY]: generateGrade5GeometryProblem,
    [SUBJECT_CATEGORIES.MEASUREMENT]: generateGrade5MeasurementProblem,
    [SUBJECT_CATEGORIES.STATISTICS]: generateGrade5StatisticsProblem,
    // ... 다른 과목들
  },
  [GRADE_LEVELS.GRADE_6]: {
    [SUBJECT_CATEGORIES.FRACTION]: generateGrade6FractionProblem,
    [SUBJECT_CATEGORIES.DECIMAL]: generateGrade6DecimalProblem,
    [SUBJECT_CATEGORIES.GEOMETRY]: generateGrade6GeometryProblem,
    [SUBJECT_CATEGORIES.MEASUREMENT]: generateGrade6MeasurementProblem,
    [SUBJECT_CATEGORIES.STATISTICS]: generateGrade6StatisticsProblem,
    // ... 다른 과목들
  }
};

// 주제별 문제 생성기 매핑
const problemGenerators = {
  [SUBJECT_CATEGORIES.ARITHMETIC]: generateArithmeticProblem,
  [SUBJECT_CATEGORIES.FRACTION]: generateFractionProblem,
  [SUBJECT_CATEGORIES.DECIMAL]: generateDecimalProblem,
  [SUBJECT_CATEGORIES.GEOMETRY]: generateGeometryProblem,
  [SUBJECT_CATEGORIES.MEASUREMENT]: generateMeasurementProblem,
  [SUBJECT_CATEGORIES.STATISTICS]: generateStatisticsProblem,
  // ... 나머지 주제들도 매핑
};

// 새로운 문제 생성 함수
export const generateNewProblem = (grade, category, difficulty) => {
  // 학년별 문제 생성기 사용
  const gradeGenerator = gradeGenerators[grade];
  if (gradeGenerator) {
    const categoryGenerator = gradeGenerator[category];
    if (categoryGenerator) {
      const problem = categoryGenerator(difficulty);
      if (problem) {
        return {
          ...problem,
          id: `prob_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          grade,
          category,
          difficulty
        };
      }
    }
  }

  // 기본 문제 생성기 사용 (fallback)
  const generator = problemGenerators[category];
  if (!generator) return null;

  const problem = generator(difficulty);
  if (!problem) return null;

  return {
    ...problem,
    id: `prob_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    grade,
    category,
    difficulty
  };
};

// 문제 풀이 이력에 따라 음 문제의 난이도 결정
export const getNextDifficulty = (solvedProblems) => {
  const recentProblems = Object.values(solvedProblems).slice(-5);
  const correctCount = recentProblems.filter(p => p.correct).length;
  
  if (correctCount >= 4) {
    return DIFFICULTY_LEVELS.HARD;
  } else if (correctCount >= 2) {
    return DIFFICULTY_LEVELS.MEDIUM;
  } else {
    return DIFFICULTY_LEVELS.EASY;
  }
}; 