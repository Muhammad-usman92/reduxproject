import { ActionType } from "../constant/actionType";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  if (type== "SET_PRODUCT") {
    return { ...state, products: payload };
  } else {
    return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  if (ActionType.SELECTED_PRODUCT == "SELECTED_PRODUCT") {
    return { ...state, ...payload };
  } else {
    return state;
  }
};
