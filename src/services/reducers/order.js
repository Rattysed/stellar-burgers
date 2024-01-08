import {MAKE_ORDER_FAILURE, MAKE_ORDER_OK, ORDER_MODAL_CLOSE, ORDER_MODAL_OPEN} from "../actions/actions";

const initialState = {
  id: 0,
  status: "",
  open_modal: false,
  success: false,
  name: ""
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_MODAL_OPEN:
      return {
        ...state,
        open_modal: true,
      };
    case ORDER_MODAL_CLOSE:
      return {
        ...state,
        open_modal: false,
      };
    case MAKE_ORDER_OK:
      return {
        ...state,
        id: action.id,
        success: true,
        name: action.name,
        status: "Ваш заказ начали готовить",
      };
    case MAKE_ORDER_FAILURE:
      return {
        ...state,
        id: 0,
        status: "",
        name: "",
        success: false,
      };
    default:
      return state;
  }
};
export default order;