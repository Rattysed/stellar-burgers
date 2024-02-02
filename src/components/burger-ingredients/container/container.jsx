import React from "react";
import styles from "./container.module.css";
import PropTypes from "prop-types";
import Card from "./card/card";
import {pieceProps} from "../../../utils/constants";

import {useSelector} from "react-redux";

const Container = ({ingredients, title, type}) => {

  const ingredientsConstructor = useSelector((store) => store.ingredientsConstructor)
  return (
    <section>
      <p className="text text_type_main-medium pb-6">
        {title}
      </p>
      <ul className={styles.cardContainer}>
        {ingredients.map((ingredient) => {
          const amount = ingredientsConstructor.amounts.has(ingredient._id)
            ? ingredientsConstructor.amounts.get(ingredient._id)
            : ingredientsConstructor.bun && ingredientsConstructor.bun._id === ingredient._id ? 1 : 0;
          return ingredient.type === type && (
            <Card
              key={ingredient._id}
              ingredient={ingredient}
              amount={amount}
            />
          )
        })}
      </ul>
    </section>
  );
}

Container.propTypes = {
  ingredients: PropTypes.arrayOf(pieceProps).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Container