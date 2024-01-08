import { combineReducers } from "redux";
import ingredientsList from "./ingredients-api";
import ingredientDetails from "./ingredient-details";
import ingredientsConstructor from "./constructor-controls";
import order from "./order";

const rootReducer = combineReducers({
  ingredientsList,
  ingredientDetails,
  ingredientsConstructor,
  order
})

export default rootReducer;