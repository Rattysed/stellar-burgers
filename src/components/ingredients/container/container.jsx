import React from "react";
import styles from "./container.module.css";
import PropTypes from "prop-types";
import Card from "./card/card";

const Container = ({title, data, type}) => {
  return (
    <section>
      <p className="text text_type_main-medium pb-6">
        {title}
      </p>
      <ul className={styles.cardContainer}>
        {data.map((ingredient) => {
            return ingredient.type === type && (
              <Card key={ingredient._id} ingredient={ingredient}/>)
          }
        )}
      </ul>
    </section>
  );
}

Container.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Container