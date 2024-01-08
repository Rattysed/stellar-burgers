import { INGREDIENT_DETAILS_OPEN, INGREDIENT_DETAILS_CLOSE } from "../actions/actions"

const initialState = [
  {
    isModalOpen: false,
    ingredient: null
  }
]

const ingredientDetails = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_DETAILS_OPEN:
      return {
        ...state,
        ingredient: action.ingredient,
        isModalOpen: true
      };
    case INGREDIENT_DETAILS_CLOSE:
      return {
        ...state,
        isModalOpen: false
      };
    default:
      return state;
  }
}

export default ingredientDetails;