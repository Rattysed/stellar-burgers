import {ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT} from "../actions/actions"

const initialState = {
  ingredients: [],
  amounts: new Map(),
  price: 0,
  lastId: 0,
  bun: null
}

const ingredientsConstructor = (state = initialState, action) => {
  let ingredientId

  switch (action.type) {
    case ADD_INGREDIENT:
      ingredientId = action.ingredient._id
      if (action.ingredient.type === "bun") {
        return {
          ...state,
          bun: action.ingredient,
          price: state.price + action.ingredient.price * 2
        };
      }
      state.amounts.set(
        ingredientId,
        state.amounts.has(ingredientId) ?
          state.amounts.get(ingredientId) + 1
          : 1
      )
      return {
        ...state,
        price: state.price + action.ingredient.price,
        ingredients: [
          {ingredient: action.ingredient, id: state.lastId},
          ...state.ingredients,
        ],
        lastId: state.lastId + 1,
      };

    case MOVE_INGREDIENT:
      const oldId = state.ingredients.findIndex(
        (item) => item.id === action.from
      );
      const newId = state.ingredients.findIndex(
        (item) => item.id === action.to
      );

      if (oldId < newId) {
        state.ingredients.splice(newId, 0, state.ingredients[oldId]);
        state.ingredients.splice(oldId, 1);
      } else {
        state.ingredients.splice(newId, 0, state.ingredients[oldId]);
        state.ingredients.splice(oldId + 1, 1);
      }
      return {...state}

    case DELETE_INGREDIENT:
      ingredientId = action.ingredient._id
      if (action.ingredient.type === "bun") {
        return {
          ...state,
          price: state.price - action.ingredient.price * 2,
          bun: null
        };
      }
      state.amounts.set(ingredientId, state.amounts.get(ingredientId) - 1)
      return {
        ...state,
        price: state.price - action.ingredient.price,
        ingredients: state.ingredients.filter((item) => item.id !== action.id)
      };

    default:
      return state
  }
}

export default ingredientsConstructor