import { TYPES } from "../type";

// Initial State
const DEFAULT_STATE = {
  products: [],
  product: {},
  isDeleteProduct: false,
  isAddProduct: false,
  idProduct: 0,
  isLoading: false,
};

// Reducer
export const productsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case TYPES.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case TYPES.ADD_PRODUCT:
      return {
        ...state,
        isAddProduct: action.payload,
      };
    case TYPES.DELETE_PRODUCT:
      return {
        ...state,
        isDeleteProduct: action.payload,
      };
    case TYPES.SET_ID_PRODUCT:
      return {
        ...state,
        idProduct: action.payload,
      };
    case TYPES.SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
