import { orderPath } from "../../utils/constants";
import { MAKE_ORDER_FAILURE, MAKE_ORDER_OK, ORDER_MODAL_CLOSE, ORDER_MODAL_OPEN } from "./actions";

export function closeOrderModal() {
  return { type: ORDER_MODAL_CLOSE };
}
export function openOrderModal() {
  return { type: ORDER_MODAL_OPEN };
}

export function makeOrder(data) {
  return function (dispatch) {
    fetch(orderPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Произошла ошибка: ${res.status}`);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: MAKE_ORDER_OK,
            id: data.order.number,
            name: data.name
          });
          dispatch(openOrderModal());
        } else {
          dispatch({ type: MAKE_ORDER_FAILURE });
        }
      })
      .catch(() => {
        dispatch({ type: MAKE_ORDER_FAILURE });
      });
  };
}
