import React from 'react';
import styles from "./ingredients.module.css";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Container from "./container/container";

import {useDispatch, useSelector} from 'react-redux';
import {closeIngredientDetails} from '../../services/actions/ingredient-details';

import IngredientDetails from "../igredient-details/ingredient-details";
import Modal from '../modal/modal';

const Ingredients = () => {
  const scrollRef = React.useRef(window);
  const [current, setCurrent] = React.useState('bun')

  const dispatch = useDispatch();

  const ingredientList = useSelector(
    (store) => store.ingredientsList
  )

  const ingredientDetails = useSelector((store) => store.ingredientDetails)

  const onScroll = () => {
    if (scrollRef.current.scrollTop < 200) {
      setCurrent("bun")
    } else if (scrollRef.current.scrollTop >= 200 && scrollRef.current.scrollTop < 775) {
      setCurrent("sauce")
    } else {
      setCurrent("main")
    }
  }

  function onBunClick() {
    scrollRef.current.scrollTop = 0;
  }

  function onSauceClick() {
    scrollRef.current.scrollTop = 267;
  }

  function onMainClick() {
    scrollRef.current.scrollTop = 790;
  }

  React.useEffect(() => {
    scrollRef.current.addEventListener("scroll", onScroll);
    return () => scrollRef.current.removeEventListener("scroll", onScroll);
  });

  function onModalClose() {
    dispatch(closeIngredientDetails());
  }

  return (
    <>
      {ingredientDetails.isModalOpen &&
        <Modal onClose={onModalClose}>
          <IngredientDetails ingredient={ingredientDetails.ingredient}/>
        </Modal>
      }
      <section className={styles.ingredients}>
        <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
        <div className={styles.tabs_container + " pt-5 pb-10 "}>
          <Tab value="bun" active={current === 'bun'} onClick={onBunClick}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={onSauceClick}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={onMainClick}>
            Начинки
          </Tab>
        </div>
        {ingredientList.success &&
          <section className={"mt-10 " + styles.ingredients_container} ref={scrollRef}>
            <Container title={"Булки"} type={"bun"} ingredients={ingredientList.ingredients}/>
            <Container title={"Соусы"} type={"sauce"} ingredients={ingredientList.ingredients}/>
            <Container title={"Начинки"} type={"main"} ingredients={ingredientList.ingredients}/>
          </section>
        }
      </section>
    </>
  );
}


export default Ingredients;