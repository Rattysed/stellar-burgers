import doneIcon from "../../images/done.png"

const OrderDetails = () => {
  return (
    <>
      <p className="text text_type_digits-large mt-30">132456</p>
      <p className="text text_type_main-medium mt-8">
        идентификатор заказа.
      </p>
      <img src={doneIcon} alt="done" className="mt-15 "/>
      <p className="text text_type_main-small mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

export default OrderDetails