import { ADD_NUMBER, GIVE_OPERATOR, GET_RESULT, CLEAR_ALL } from "./actionTypes";


export const addNumber = content => ({
  type: ADD_NUMBER,
  payload: { content }
});

export const giveOperator = operator => ({
  type: GIVE_OPERATOR,
  payload: { operator }
});

export const getResult = () => ({
    type: GET_RESULT,
});

export const clearAll = () => ({
    type: CLEAR_ALL,
});