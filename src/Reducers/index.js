import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer
});
