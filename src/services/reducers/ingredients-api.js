import { GET_INGREDIENTS_FAILURE, GET_INGREDIENTS_OK } from "../actions/actions"

const initialState = [
  {
    ingredients: [],
    success: false,
    loading: true
  }
]

const ingredientsList = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_OK:
      return {
        ...state,
        loading: false,
        success: true,
        ingredients: action.ingredients
      };
    case GET_INGREDIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        ingredients: [],
        success: false
      };
    default:
      return state;
  }
}

export default ingredientsList;