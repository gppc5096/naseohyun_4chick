import { PROBLEM_TYPES, DIFFICULTY_LEVELS } from '../types/problems';
import { GRADE_LEVELS, SUBJECT_CATEGORIES } from '../types/learning';

export const sampleProblems = {
  [GRADE_LEVELS.GRADE_3]: {
    [SUBJECT_CATEGORIES.ARITHMETIC]: [
      {
        id: 'prob_3_arith_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '다음 중 15 + 27의 답으로 알맞은 것은?',
        options: ['32', '42', '52', '62'],
        correctAnswer: '42',
        explanation: '15와 27을 더하면 42가 됩니다.',
        points: 10
      },
      {
        id: 'prob_3_arith_002',
        type: PROBLEM_TYPES.SHORT_ANSWER,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '84 ÷ 4 = ?',
        correctAnswer: '21',
        explanation: '84를 4로 나누면 21이 됩니다.',
        points: 15
      },
      {
        id: 'prob_3_arith_003',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '72 - 35 = ?',
        options: ['27', '37', '47', '57'],
        correctAnswer: '37',
        explanation: '72에서 35를 빼면 37이 됩니다.',
        points: 15
      },
      {
        id: 'prob_3_arith_004',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '45 + 67 = ?',
        options: ['102', '112', '122', '132'],
        correctAnswer: '112',
        explanation: '45와 67을 더하면 112가 됩니다.',
        points: 10,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      },
      {
        id: 'prob_3_arith_005',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '156 - 89 = ?',
        options: ['57', '67', '77', '87'],
        correctAnswer: '67',
        explanation: '156에서 89를 빼면 67이 됩니다.',
        points: 15,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      },
      {
        id: 'prob_3_arith_006',
        type: PROBLEM_TYPES.SHORT_ANSWER,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '248 ÷ 8 = ?',
        correctAnswer: '31',
        explanation: '248을 8로 나누면 31이 됩니다.',
        points: 20,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      }
    ],
    [SUBJECT_CATEGORIES.FRACTION]: [
      {
        id: 'prob_3_frac_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '1/4 + 2/4 = ?',
        options: ['1/4', '2/4', '3/4', '4/4'],
        correctAnswer: '3/4',
        explanation: '같은 분모를 가진 분수의 덧셈은 분자만 더하면 됩니다.',
        points: 10
      },
      {
        id: 'prob_3_frac_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '다음 중 1/2와 같은 분수는?',
        options: ['2/3', '2/4', '3/6', '2/5'],
        correctAnswer: '2/4',
        explanation: '1/2 = 2/4 입니다. (분자와 분모에 같은 수를 곱하면 같은 크기의 분수가 됩니다)',
        points: 15
      },
      {
        id: 'prob_3_frac_003',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '2/6 + 3/6 = ?',
        options: ['3/6', '4/6', '5/6', '6/6'],
        correctAnswer: '5/6',
        explanation: '같은 분모의 분수는 분자끼리 더합니다. 2/6 + 3/6 = 5/6',
        points: 15,
        category: SUBJECT_CATEGORIES.FRACTION
      },
      {
        id: 'prob_3_frac_004',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '다음 중 3/4와 같은 크기의 분수는?',
        options: ['6/8', '5/8', '4/8', '7/8'],
        correctAnswer: '6/8',
        explanation: '3/4 = 6/8 입니다. (분자와 분모에 2를 곱했습니다)',
        points: 20,
        category: SUBJECT_CATEGORIES.FRACTION
      }
    ],
    [SUBJECT_CATEGORIES.MEASUREMENT]: [
      {
        id: 'prob_3_meas_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '1m는 몇 cm인가요?',
        options: ['10cm', '100cm', '1000cm', '10000cm'],
        correctAnswer: '100cm',
        explanation: '1m = 100cm입니다.',
        points: 10
      },
      {
        id: 'prob_3_meas_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '2kg 300g은 몇 g인가요?',
        options: ['230g', '2030g', '2300g', '23000g'],
        correctAnswer: '2300g',
        explanation: '1kg = 1000g이므로, 2kg = 2000g입니다. 2000g + 300g = 2300g',
        points: 15
      }
    ],
    [SUBJECT_CATEGORIES.STATISTICS]: [
      {
        id: 'prob_3_stat_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '다음 수들의 평균을 구하세요: 2, 4, 6, 8',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: '(2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5',
        points: 10
      }
    ],
    [SUBJECT_CATEGORIES.DECIMAL]: [
      {
        id: 'prob_3_dec_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '0.1은 10분의 몇을 의미하나요?',
        options: ['10분의 1', '10분의 2', '10분의 5', '10분의 10'],
        correctAnswer: '10분의 1',
        explanation: '0.1은 1을 10으로 나눈 것으로, 10분의 1을 의미합니다.',
        points: 10,
        category: SUBJECT_CATEGORIES.DECIMAL
      },
      {
        id: 'prob_3_dec_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '0.5 + 0.3 = ?',
        options: ['0.2', '0.4', '0.8', '1.0'],
        correctAnswer: '0.8',
        explanation: '0.5와 0.3을 더하면 0.8이 됩니다.',
        points: 15,
        category: SUBJECT_CATEGORIES.DECIMAL
      },
      {
        id: 'prob_3_dec_003',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '1 - 0.7 = ?',
        options: ['0.2', '0.3', '0.4', '0.5'],
        correctAnswer: '0.3',
        explanation: '1에서 0.7을 빼면 0.3이 됩니다.',
        points: 20,
        category: SUBJECT_CATEGORIES.DECIMAL
      }
    ],
    [SUBJECT_CATEGORIES.GEOMETRY]: [
      {
        id: 'prob_3_geo_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '다음 중 삼각형의 변의 개수는?',
        options: ['2개', '3개', '4개', '5개'],
        correctAnswer: '3개',
        explanation: '삼각형은 3개의 변으로 이루어져 있습니다.',
        points: 10,
        category: SUBJECT_CATEGORIES.GEOMETRY
      },
      {
        id: 'prob_3_geo_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '정사각형의 네 변의 길이는 어떤가요?',
        options: ['모두 다르다', '두 개씩 같다', '모두 같다', '알 수 없다'],
        correctAnswer: '모두 같다',
        explanation: '정사각형은 네 변의 길이가 모두 같은 사각형입니다.',
        points: 15,
        category: SUBJECT_CATEGORIES.GEOMETRY
      },
      {
        id: 'prob_3_geo_003',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '직사각형의 가로가 5cm, 세로가 3cm일 때 둘레의 길이는?',
        options: ['13cm', '14cm', '15cm', '16cm'],
        correctAnswer: '16cm',
        explanation: '직사각형의 둘레는 (가로 + 세로) × 2입니다. (5 + 3) × 2 = 16cm',
        points: 20,
        category: SUBJECT_CATEGORIES.GEOMETRY
      }
    ]
  },
  [GRADE_LEVELS.GRADE_4]: {
    [SUBJECT_CATEGORIES.ARITHMETIC]: [
      {
        id: 'prob_4_arith_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '342 + 258 = ?',
        options: ['500', '600', '700', '800'],
        correctAnswer: '600',
        explanation: '342와 258을 더하면 600이 됩니다.',
        points: 10,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      },
      {
        id: 'prob_4_arith_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '427 × 6 = ?',
        options: ['2562', '2462', '2362', '2262'],
        correctAnswer: '2562',
        explanation: '427에 6을 곱하면 2562가 됩니다.',
        points: 15,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      },
      {
        id: 'prob_4_arith_003',
        type: PROBLEM_TYPES.SHORT_ANSWER,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '728 ÷ 8 = ?',
        correctAnswer: '91',
        explanation: '728을 8로 나누면 91이 됩니다.',
        points: 20,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      }
    ],
    [SUBJECT_CATEGORIES.FRACTION]: [
      {
        id: 'prob_4_frac_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '2/5 + 1/5 = ?',
        options: ['2/5', '3/5', '4/5', '5/5'],
        correctAnswer: '3/5',
        explanation: '같은 분모의 분수는 분자를 더합니다. 2/5 + 1/5 = 3/5',
        points: 10,
        category: SUBJECT_CATEGORIES.FRACTION
      },
      {
        id: 'prob_4_frac_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '3/4 - 1/4 = ?',
        options: ['1/4', '2/4', '3/4', '4/4'],
        correctAnswer: '2/4',
        explanation: '같은 분모의 분수는 분자를 뺍니다. 3/4 - 1/4 = 2/4',
        points: 15,
        category: SUBJECT_CATEGORIES.FRACTION
      },
      {
        id: 'prob_4_frac_003',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '2/3 × 3 = ?',
        options: ['2', '3', '4', '6'],
        correctAnswer: '2',
        explanation: '분수에 자연수를 곱하면 분자에 자연수를 곱합니다. 2/3 × 3 = (2×3)/3 = 6/3 = 2',
        points: 20,
        category: SUBJECT_CATEGORIES.FRACTION
      }
    ],
    [SUBJECT_CATEGORIES.GEOMETRY]: [
      {
        id: 'prob_4_geo_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '정사각형의 한 변의 길이가 5cm일 때, 넓이는?',
        options: ['15cm²', '20cm²', '25cm²', '30cm²'],
        correctAnswer: '25cm²',
        explanation: '정사각형의 넓이는 한 변의 길이의 제곱입니다. 5 × 5 = 25',
        points: 15
      },
      {
        id: 'prob_4_geo_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '직사각형의 가로가 6cm, 세로가 4cm일 때 둘레의 길이는?',
        options: ['10cm', '16cm', '20cm', '24cm'],
        correctAnswer: '20cm',
        explanation: '직사각형의 둘레는 (가로 + 세로) × 2입니다. (6 + 4) × 2 = 20',
        points: 20
      }
    ],
    [SUBJECT_CATEGORIES.MEASUREMENT]: [
      {
        id: 'prob_4_meas_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '3.5km는 몇 m인가요?',
        options: ['350m', '3500m', '35000m', '350000m'],
        correctAnswer: '3500m',
        explanation: '1km = 1000m이므로, 3.5km = 3500m입니다.',
        points: 15
      },
      {
        id: 'prob_4_meas_002',
        type: PROBLEM_TYPES.SHORT_ANSWER,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '직사각형 모양의 운동장의 가로가 25m, 세로가 40m일 때, 운동장의 둘레를 구하세요. (단위: m)',
        correctAnswer: '130',
        explanation: '직사각형의 둘레 = (가로 + 세로) × 2 = (25 + 40) × 2 = 65 × 2 = 130m',
        points: 20
      }
    ],
    [SUBJECT_CATEGORIES.STATISTICS]: [
      {
        id: 'prob_4_stat_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '다음 수들의 중앙값을 구하세요: 3, 7, 8, 12, 15',
        options: ['7', '8', '9', '10'],
        correctAnswer: '8',
        explanation: '숫자들을 순서대로 나열했을 때 가운데 있는 수가 중앙값입니다.',
        points: 15
      },
      {
        id: 'prob_4_stat_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '한 반 학생들의 키를 조사했더니 다음과 같습니다: 130cm가 2명, 135cm가 4명, 140cm가 3명일 때, 가장 많은 학생들의 키는?',
        options: ['130cm', '135cm', '140cm', '145cm'],
        correctAnswer: '135cm',
        explanation: '135cm인 학생이 4명으로 가장 많습니다. 이것을 최빈값이라고 합니다.',
        points: 20
      }
    ],
    [SUBJECT_CATEGORIES.DECIMAL]: [
      {
        id: 'prob_4_dec_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '0.25 + 0.75 = ?',
        options: ['0.90', '1.00', '1.10', '1.25'],
        correctAnswer: '1.00',
        explanation: '0.25와 0.75를 더하면 1.00이 됩니다.',
        points: 10,
        category: SUBJECT_CATEGORIES.DECIMAL
      },
      {
        id: 'prob_4_dec_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '2.5 × 0.4 = ?',
        options: ['0.8', '1.0', '1.2', '1.4'],
        correctAnswer: '1.0',
        explanation: '2.5에 0.4를 곱하면 1.0이 됩니다.',
        points: 15,
        category: SUBJECT_CATEGORIES.DECIMAL
      },
      {
        id: 'prob_4_dec_003',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '3.6 ÷ 0.9 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
        explanation: '3.6을 0.9로 나누면 4가 됩니다.',
        points: 20,
        category: SUBJECT_CATEGORIES.DECIMAL
      },
      {
        id: 'prob_4_dec_004',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '다음 중 0.8과 같은 크기의 소수는?',
        options: ['0.80', '0.08', '0.800', '0.088'],
        correctAnswer: '0.80',
        explanation: '0.8 = 0.80입니다. (소수점 뒤에 0을 붙여도 같은 수입니다)',
        points: 15,
        category: SUBJECT_CATEGORIES.DECIMAL
      }
    ]
  }
}; 