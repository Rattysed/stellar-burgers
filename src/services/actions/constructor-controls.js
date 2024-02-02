import {ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT} from "./actions";

export function deleteIngredient(piece, id) {
  return {
    type: DELETE_INGREDIENT,
    ingredient: piece,
    id: id
  }
}

export function moveIngredient(from, to) {
  return {
    type: MOVE_INGREDIENT,
    from: from,
    to: to
  }
}

export function addIngredient(piece) {
  return {
    type: ADD_INGREDIENT,
    ingredient: piece
  }
}
