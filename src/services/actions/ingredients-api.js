import {ingredientsPath} from "../../utils/constants";
import { GET_INGREDIENTS_FAILURE, GET_INGREDIENTS_OK } from "./actions";


function getIngredients() {
  return function (dispatch) {
    fetch(ingredientsPath)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: GET_INGREDIENTS_OK,
            ingredients: data.data
          })
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILURE
          })
        }
      })
      .catch(function(error) {
        dispatch({
          type: GET_INGREDIENTS_FAILURE
        })
      })
  }
};

export default getIngredients