import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css"
import {ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import InsideIngredient from "./inside-ingridient/inside-ingredient";
import DoneButton from "./done-button/done-button";
import {pieceProps} from "../../utils/constants";


const BurgerConstructor = ({bottom, top, main}) => {
  function onDoneClick(event) {
    event.preventDefault()
  }


  return (
      <section className={"mt-25 ml-4 mr-4 " + styles.burger_constructor}>
        <ConstructorElement
          extraClass={styles.piece + " ml-8"}
          type={"top"}
          text={top.name + " (верх)"}
          thumbnail={top.image}
          price={top.price}
          isLocked={true}
        />
        <ul className={styles.main}>
          {main.map((piece) =>
            (<InsideIngredient piece={piece}/>)
          )}
        </ul>
        <ConstructorElement
          extraClass={styles.piece + " ml-8"}
          type={"bottom"}
          text={bottom.name + " (низ)"}
          thumbnail={bottom.image}
          price={bottom.price}
          isLocked={true}
        />
        <section className={"mt-10 pr-4 " + styles.done}>
          <p className="text text_type_digits-medium mr-10">
            348
            <CurrencyIcon type={"primary"}/>
          </p>
          <DoneButton onClick={onDoneClick}/>
        </section>
      </section>
  );
}

BurgerConstructor.propTypes = {
  bottom: pieceProps.isRequired,
  top: pieceProps.isRequired,
  main: PropTypes.arrayOf(pieceProps).isRequired,
}

export default BurgerConstructor;