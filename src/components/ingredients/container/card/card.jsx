import React from 'react'
import styles from './card.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

import { useDispatch } from 'react-redux';
import { openIngredientDetails } from '../../../../services/actions/ingredient-details';
import { useDrag } from 'react-dnd';
export function Card({ ingredient, amount }) {

  const dispatch = useDispatch();

  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: { ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  function onIngredientOpen() {
    dispatch(openIngredientDetails(ingredient));
  }

  return (
    <li className={styles.card} onClick={onIngredientOpen} ref={drag}>
      <img src={ingredient.image} alt={ingredient.name} className={styles.image + " ml-4 mr-4"}/>
      <div className={styles.currencyContainer + " pt-1 pb-1"}>
        <p className="text text_type_digits-default">{ingredient.price}&nbsp;</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.title + " text text_type_main-default"}>
        {ingredient.name}
      </p>
      {amount > 0 &&
        <Counter count={amount} size="default" />
      }
    </li>
  )

}

Card.propTypes = {
  ingredient: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired
}

export default Card
