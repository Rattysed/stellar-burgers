import React from "react";
import styles from "./container.module.css";
import PropTypes from "prop-types";
import Card from "./card/card";
import {pieceProps} from "../../../utils/constants";

const Container = ({title, data, type, onModalOpen}) => {
  return (
    <section>
      <p className="text text_type_main-medium pb-6">
        {title}
      </p>
      <ul className={styles.cardContainer}>
        {data.map((ingredient) => {
            return ingredient.type === type && (
              <Card key={ingredient._id} ingredient={ingredient} onModalOpen={onModalOpen}/>)
          }
        )}
      </ul>
    </section>
  );
}

Container.propTypes = {
  data: PropTypes.arrayOf(pieceProps).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Container