import {ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT} from "./actions";

export function DeleteIngredient(piece, id) {
  return {
    type: DELETE_INGREDIENT,
    ingredient: piece,
    id: id
  }
}

export function MoveIngredient(from, to) {
  return {
    type: MOVE_INGREDIENT,
    from: from,
    to: to
  }
}

export function AddIngredient(piece) {
  return {
    type: ADD_INGREDIENT,
    ingredient: piece
  }
}
