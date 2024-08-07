import { TYPES } from "../type";

// Initial State
const DEFAULT_STATE = {
  transactions: [],
  transction: {},
  isAddTransaction: false,
};

// Reducer
export const transactionsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case TYPES.SET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    case TYPES.ADD_TRANSACTION:
      return {
        ...state,
        isAddTransaction: action.payload,
      };
    default:
      return state;
  }
};
