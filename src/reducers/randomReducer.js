import { GENERATE_RANDOM } from '../actions/actions';

const isCorrectReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_RANDOM:
      return {
        num1: action.num1,
        num2: action.num2,
        result: action.result,
        isCorrect: action.num1 + action.num2 === action.result
      };
    default:
      return state;
  }
};

export default isCorrectReducer;