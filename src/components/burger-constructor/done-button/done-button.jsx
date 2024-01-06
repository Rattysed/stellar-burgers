import styles from "./done-button.module.css"
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const DoneButton = ({onClick}) => {
  return (<>
    <Button htmlType="submit" onClick={onClick} type="primary" size="large">
      Оформить заказ
    </Button>
  </>)
}

DoneButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DoneButton;