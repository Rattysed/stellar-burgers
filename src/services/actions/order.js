import {orderEndpoint} from "../../utils/constants";
import {MAKE_ORDER_FAILURE, MAKE_ORDER_OK, ORDER_MODAL_CLOSE, ORDER_MODAL_OPEN} from "./actions";
import {request} from "../../utils/api";

export function closeOrderModal() {
  return {type: ORDER_MODAL_CLOSE};
}

export function openOrderModal() {
  return {type: ORDER_MODAL_OPEN};
}

export function makeOrder(data) {
  return function (dispatch) {
    request(orderEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        dispatch({
          type: MAKE_ORDER_OK,
          id: data.order.number,
          name: data.name
        });
        dispatch(openOrderModal());
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: MAKE_ORDER_FAILURE});
      })
  };
}
