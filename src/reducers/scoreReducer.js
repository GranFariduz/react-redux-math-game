import { SCORE } from '../actions/actions';

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case SCORE:
      return action.setScore === 0 ? 0 : state + 100;
    default:
      return state;
  }
};

export default scoreReducer;