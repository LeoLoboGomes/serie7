import { ADD_NUMBER, GIVE_OPERATOR, GET_RESULT, CLEAR_ALL } from "../actionTypes";
import { ADD, SUB, MULT, DIV } from "../operator";

const initialState = {
  firstNum: null,
  secondNum: null,
	operator: null,
	result: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER: {
			const { content } = action.payload;
			let first = state.firstNum;
			let second = state.secondNum;
			if(state.operator == null) {
				//adiciona numero no primeiro fator
				if(state.firstNum == null) {
					//primeiro numero
					first = content;
				} else {
					//nao eh o primeiro
					first = state.firstNum * 10 + content;
				}
			} else {
				//adiciona numero no segundo fator
				if(state.secondNum == null) {
					//primeiro numero
					second = content;
				} else {
					//nao eh o primeiro
					second = state.secondNum * 10 + content;
				}
			}
      return {
        ...state,
        firstNum: first,
        secondNum: second
      };
    }
    case GIVE_OPERATOR: {
      const { operator } = action.payload;
      return {
        ...state,
        operator: operator 
      };
    }
    case GET_RESULT: {
			let result = null;
			if(state.firstNum != null && state.secondNum != null && state.operator != null){
				switch (state.operator) {
					case ADD: {
						result = state.firstNum + state.secondNum;
						break;
					}
					case SUB: {
						result = state.firstNum - state.secondNum;
						break;
					}
					case MULT: {
						result = state.firstNum * state.secondNum;
						break;
					}
					case DIV: {
						result = state.firstNum / state.secondNum;
						break;
					}
				}
			}
			return {
				...state,
				firstNum: result,
				secondNum: null,
				operator: null,
				result: result
			};
		}
		case CLEAR_ALL: {

			return {
				...state,
				firstNum: null,
				secondNum: null,
				operator: null,
				result: null
			};
		}
    default:
      return state;
  }
}