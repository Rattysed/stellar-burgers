import {ingredientsEndpoint} from "../../utils/constants";
import {GET_INGREDIENTS_FAILURE, GET_INGREDIENTS_OK} from "./actions";
import {request} from "../../utils/api";

function getIngredients() {
  return function (dispatch) {
    request(ingredientsEndpoint)
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_OK,
          ingredients: data.data
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: GET_INGREDIENTS_FAILURE
        })
      })
  }
}

export default getIngredients