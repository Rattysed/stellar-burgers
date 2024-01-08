import {useRef, useMemo} from "react";

import {ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css"

import InsideIngredient from "./inside-ingridient/inside-ingredient";
import DoneButton from "./done-button/done-button";
import OrderDetails from "../order-details/order-details";


import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addIngredient, deleteIngredient} from "../../services/actions/constructor-controls";
import {openOrderModal, closeOrderModal, makeOrder} from "../../services/actions/order";
import Modal from "../modal/modal";

const BurgerConstructor = () => {

  const dispatch = useDispatch()
  const ingredientsConstructor = useSelector((store) => store.ingredientsConstructor)
  const order = useSelector((store) => store.order)

  const ref = useRef(null)
  const data = ingredientsConstructor.bun != null ? {
    ingredients: [...ingredientsConstructor.ingredients.map((item) => item.ingredient._id), ingredientsConstructor.bun._id, ingredientsConstructor.bun._id]
  } : null

  const [, dropRef] = useDrop({
    accept: "constructor",
    collect: (monitor) => ({
      isHoverSecond: monitor.isOver()
    })
  })

  const [, drop] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHoverFirst: monitor.isOver(),
    }),
    drop({ingredient}) {
      if (ingredient.type === "bun") {
        if (ingredientsConstructor.bun != null) {
          dispatch(
            deleteIngredient(
              ingredientsConstructor.bun,
              ingredientsConstructor.bun._id
            )
          );
        }
        dispatch(addIngredient(ingredient));
      } else {
        if (ingredientsConstructor.bun != null) {
          dispatch(addIngredient(ingredient));
        }
      }
    },
  });
  const bun = ingredientsConstructor.bun;

  function onDoneClick() {
    dispatch(makeOrder(data))
    dispatch(openOrderModal())
  }

  const price = useMemo(() => {
    let suma = bun ? bun.price * 2 : 0;
    ingredientsConstructor.ingredients.forEach(({ingredient}) => {
      suma += ingredient.price;
    })
    return suma;
  }, [ingredientsConstructor.ingredients, bun])


  return (
    <section className={"mt-25 ml-4 mr-4 " + styles.burger_constructor} ref={drop(dropRef(ref))}>
      {bun ? (
        <ConstructorElement
          extraClass={styles.piece + " ml-8"}
          type={"top"}
          text={bun.name + " (верх)"}
          thumbnail={bun.image}
          price={bun.price}
          isLocked={true}
        />
      ) : <p className={"text text_type_main-large"}>Добавьте булку</p>}
      <ul className={styles.main}>
        {ingredientsConstructor.ingredients.map((ingredient) => {
            return (<InsideIngredient id={ingredient.id} piece={ingredient.ingredient} key={ingredient.id}/>)
          }
        )}
      </ul>
      {bun && (
        <ConstructorElement
          extraClass={styles.piece + " ml-8"}
          type={"bottom"}
          text={bun.name + " (низ)"}
          thumbnail={bun.image}
          price={bun.price}
          isLocked={true}
        />
      )}
      <section className={"mt-10 pr-4 " + styles.done}>
        <p className="text text_type_digits-medium mr-10">
          {price}
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