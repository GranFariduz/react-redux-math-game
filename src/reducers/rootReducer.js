import { combineReducers } from 'redux';

import timer from './timerReducer';
import randomizer from './randomReducer';
import isGameOver from './gameOverReducer';
import score from './scoreReducer';

const rootReducer = combineReducers({
  timer,
  randomizer,
  isGameOver,
  score
});

export default rootReducer;