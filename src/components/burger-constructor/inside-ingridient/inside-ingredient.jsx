import styles from "./inside-ingredients.module.css"
import {pieceProps} from "../../../utils/constants";
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {deleteIngredient, moveIngredient} from '../../../services/actions/constructor-controls';

import {useDrag, useDrop} from 'react-dnd';
import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from "prop-types";


function InsideIngredient({piece, id}) {

  const ref = useRef(null)
  const dispatch = useDispatch()

  const [, dragRef] = useDrag({
    type: "constructor",
    item: {id},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{isHover}, dropRef] = useDrop({
    accept: "constructor",
    collect: (monitor) => ({
      isHover: monitor.isOver()
    }),

    drop: (item) => {
      dispatch(moveIngredient(item.id, id))
    },
  })

  const hover = isHover ? styles.hover : ""
  return (
    <li className={styles.piece + " " + hover} ref={dragRef(dropRef(ref))}>
      <DragIcon type={"primary"}/>
      <ConstructorElement
        text={piece.name}
        thumbnail={piece.image}
        price={piece.price}
        handleClose={() =>
          dispatch(deleteIngredient(piece, id))
        }
      />
    </li>
  )
}

InsideIngredient.propTypes = {
  piece: pieceProps.isRequired,
  id: PropTypes.number.isRequired
}

export default InsideIngredient;