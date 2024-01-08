import {useMemo, useRef} from "react";

import {ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css"

import InsideIngredient from "./inside-ingridient/inside-ingredient";
import DoneButton from "./done-button/done-button";
import OrderDetails from "../order-details/order-details";


import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { AddIngredient, DeleteIngredient } from "../../services/actions/constructor-controls";
import { openOrderModal, closeOrderModal, makeOrder } from "../../services/actions/order";
import Modal from "../modal/modal";

const BurgerConstructor = () => {

  const dispatch = useDispatch()
  const ingredientsConstructor = useSelector( (store) => store.ingredientsConstructor )
  const order = useSelector((store) => store.order)

  const ref = useRef(null)
  const data = ingredientsConstructor.bun != null ? {
    ingredients: [...ingredientsConstructor.ingredients.map((item) => item.ingredient._id), ingredientsConstructor.bun._id, ingredientsConstructor.bun._id]
  } : null

  const [{ isHoverr }, dropRef] = useDrop({
    accept: "constructor",
    collect: (monitor) => ({
      isHoverr : monitor.isOver()
    })
  })

  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop({ ingredient }) {
      if ( ingredient.type === "bun" ) {
        if (ingredientsConstructor.bun != null) {
          dispatch(
            DeleteIngredient(
              ingredientsConstructor.bun,
              ingredientsConstructor.bun._id
            )
          );
        }
        dispatch(AddIngredient(ingredient));
      } else {
        if (ingredientsConstructor.bun != null) {
          dispatch(AddIngredient(ingredient));
        }
      }
    },
  });

  const bun = ingredientsConstructor.ingredients.filter((it) => it.ingredient.type === "bun");

  function onDoneClick() {
    dispatch(makeOrder(data))
    dispatch(openOrderModal())
  }

  return (
    <section className={"mt-25 ml-4 mr-4 " + styles.burger_constructor} ref={drop(dropRef(ref))}>
      <ConstructorElement
        extraClass={styles.piece + " ml-8"}
        type={"top"}
        text={bun.name + " (верх)"}
        thumbnail={bun.image}
        price={bun.price}
        isLocked={true}
      />
      <ul className={styles.main}>
        {ingredientsConstructor.ingredients.map((piece, index) =>
          (<InsideIngredient piece={piece} key={piece._id + index}/>)
        )}
      </ul>
      <ConstructorElement
        extraClass={styles.piece + " ml-8"}
        type={"bottom"}
        text={bun.name + " (низ)"}
        thumbnail={bun.image}
        price={bun.price}
        isLocked={true}
      />
      <section className={"mt-10 pr-4 " + styles.done}>
        <p className="text text_type_digits-medium mr-10">
          {ingredientsConstructor.price}
          <CurrencyIcon type={"primary"}/>
        </p>
        <DoneButton onClick={onDoneClick}/>
      </section>
      {order.open_modal && order.success &&
        <Modal onClose={() => dispatch(closeOrderModal())}>
          <OrderDetails id={order.id} status={order.status} name={order.name}/>
        </Modal>
      }
    </section>
  );
}

export default BurgerConstructor;