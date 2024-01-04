import styles from "./inside-ingredients.module.css"
import {pieceProps} from "../../../utils/constants";
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";


function InsideIngredient({piece}) {
  return (
    <li className={styles.piece}>
      <DragIcon type={"primary"}/>
      <ConstructorElement text={piece.name} thumbnail={piece.image} price={piece.price}/>
    </li>
  )
}

InsideIngredient.propTypes = {
  piece: pieceProps.isRequired
}

export default InsideIngredient;