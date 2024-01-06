import PropTypes from "prop-types";

export const ingredientsPath = "https://norma.nomoreparties.space/api/ingredients";

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