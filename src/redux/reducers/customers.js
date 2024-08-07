import { TYPES } from "../type";

// Initial State
const DEFAULT_STATE = {
  customers: [],
  customer: {},
  isDeleteCustomer: false,
  isAddCustomer: false,
  idCustomer: 0,
};

// Reducer
export const customersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };
    case TYPES.SET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };
    case TYPES.ADD_CUSTOMER:
      return {
        ...state,
        isAddCustomer: action.payload,
      };
    case TYPES.DELETE_CUSTOMER:
      return {
        ...state,
        isDeleteCustomer: action.payload,
      };
    case TYPES.SET_ID_CUSTOMER:
      return {
        ...state,
        idCustomer: action.payload,
      };
    default:
      return state;
  }
};
