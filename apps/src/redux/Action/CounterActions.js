import * as actionTypes from "./ActionTypes";
export const IncreaseCounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});
export const DecereaseCouneter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});
export const Increase_by_two_counter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
});
