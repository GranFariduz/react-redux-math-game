import { TIMER } from '../actions/actions';

const timerReducer = (state = 100, action) => {
  switch (action.type) {
    case TIMER:
      return action.setTime === 100 ? 100 : state - 10;
    default:
      return state;
  }
};

export default timerReducer;