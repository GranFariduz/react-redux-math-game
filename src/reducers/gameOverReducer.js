import { GAME_OVER } from '../actions/actions';

const gameOverReducer = (state = false, action) => {
  switch (action.type) {
    case GAME_OVER:
      return action.isGameOver;
    default:
      return state;
  }
};

export default gameOverReducer;