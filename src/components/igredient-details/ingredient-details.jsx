import styles from "./ingredient-details.module.css"
import {useSelector} from "react-redux";

const IngredientDetails = () => {
  const {ingredient} = useSelector((store) => store.ingredientDetails);
  return (
    <>
      <div className={styles.head + " pt-10"}>
        <p className="text text_type_main-large pl-10">
          Детали ингредиента
        </p>
      </div>
      <img src={ingredient.image} alt={ingredient.name} className={styles.image}/>
      <p className="text text_type_main-medium pt-4">
        {ingredient.name}
      </p>
      <ul className={styles.nutrients + " pt-8"}>
        <li className={styles.nutrient}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {ingredient.calories}
          </p>
        </li>
        <li className={styles.nutrient}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </li>
        <li className={styles.nutrient}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {ingredient.fat}
          </p>
        </li>
        <li className={styles.nutrient}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  )
}

export default IngredientDetails