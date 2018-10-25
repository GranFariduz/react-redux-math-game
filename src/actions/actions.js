export const TIMER = 'TIMER';
export const GENERATE_RANDOM = 'GENERATE_RANDOM';
export const GAME_OVER = 'GAME_OVER';
export const SCORE = 'SCORE';

export const timer = (setTime = '') => ({
  type: TIMER,
  setTime
});

export const generateRandom = (num1, num2, result) => ({
  type: GENERATE_RANDOM,
  num1,
  num2,
  result
});

export const gameOver = (isGameOver) => ({
  type: GAME_OVER,
  isGameOver
});

export const scoreUpdate = (setScore = '') => ({
  type: SCORE,
  setScore
});

