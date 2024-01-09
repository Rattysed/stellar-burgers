import {INGREDIENT_DETAILS_OPEN, INGREDIENT_DETAILS_CLOSE} from "./actions";

export function openIngredientDetails(ingredient) {
  return {
    type: INGREDIENT_DETAILS_OPEN,
    ingredient: ingredient
  }
}

export function closeIngredientDetails() {
  return {
    type: INGREDIENT_DETAILS_CLOSE
  }
}