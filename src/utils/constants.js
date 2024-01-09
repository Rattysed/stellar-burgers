import PropTypes from "prop-types";

export const BASE_URL = "https://norma.nomoreparties.space/api"
export const ingredientsEndpoint = "/ingredients";
export const orderEndpoint = "/orders";

export const pieceProps = PropTypes.shape({
  name: PropTypes.string,
  type: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  _id: PropTypes.string
});