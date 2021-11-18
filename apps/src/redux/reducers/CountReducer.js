import * as ActionTypes from "../Action/ActionTypes";
const counterReducer = (state = 0, action) => {
  let NewState;
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
      return (NewState = state + action.payload);
    case ActionTypes.DECREASE_COUNTER:
      return (NewState = state + action.payload);

    case ActionTypes.INCREASE_BY_TWO_COUNTER:
      return (NewState = state + action.payload);

    default:
      return state
  }
};
export default counterReducer
