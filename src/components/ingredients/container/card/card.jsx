import React from 'react'
import styles from './card.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
// import IngredientDetails from '../../../ingredient-details/IngredientDetails'
import PropTypes from "prop-types";

Card.propTypes = {
  ingredient: PropTypes.object.isRequired,
  // onModalOpen: PropTypes.func.isRequired
}

export function Card({ ingredient, onModalOpen }) {

  function onIngredientOpen() {
    // const node = <IngredientDetails ingredient={ingredient} />
    // onModalOpen(node)
  }

  return (
    <li className={styles.card} onClick={onIngredientOpen}>
      <img src={ingredient.image} alt={ingredient.name} className={styles.image + " ml-4 mr-4"}/>
      <div className={styles.currencyContainer + " pt-1 pb-1"}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.title + " text text_type_main-default"}>
        {ingredient.name}
      </p>
      <Counter count={0} size={"default"} extraClass={styles.counter}/>
    </li>
  )
};

export default Card