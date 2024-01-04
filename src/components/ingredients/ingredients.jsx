import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./ingredients.module.css";
import Tabs from "./tabs/tabs"
import Container from "./container/container";
import {pieceProps} from "../../utils/constants";

const Ingredients = (props) => {
  return (
    <section className={styles.ingredients}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
      <section>
        <Tabs currentTab="one"/>
      </section>
      <section className={"mt-10 " + styles.ingredients_container}>
        <Container title={"Булки"} type={"bun"} data={props.data}/>
        <Container title={"Соусы"} type={"sauce"} data={props.data}/>
        <Container title={"Начинки"} type={"main"} data={props.data}/>
      </section>
    </section>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(
    pieceProps
  ).isRequired,
}

export default Ingredients;