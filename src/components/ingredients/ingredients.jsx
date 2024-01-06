import React from 'react';
import PropTypes from 'prop-types';
import styles from "./ingredients.module.css";
import Tabs from "./tabs/tabs"
import Container from "./container/container";
import {pieceProps} from "../../utils/constants";

const Ingredients = ({data, onModalOpen}) => {
  return (
    <section className={styles.ingredients}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
      <section>
        <Tabs currentTab="one"/>
      </section>
      <section className={"mt-10 " + styles.ingredients_container}>
        <Container title={"Булки"} type={"bun"} data={data} onModalOpen={onModalOpen}/>
        <Container title={"Соусы"} type={"sauce"} data={data} onModalOpen={onModalOpen}/>
        <Container title={"Начинки"} type={"main"} data={data} onModalOpen={onModalOpen}/>
      </section>
    </section>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(
    pieceProps
  ).isRequired,
  onModalOpen: PropTypes.func
}

export default Ingredients;