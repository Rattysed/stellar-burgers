import {useEffect} from "react";

import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import Ingredients from "../ingredients/ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import {useDispatch, useSelector} from 'react-redux';
import getIngredients from '../../services/actions/ingredients-api';


const App = () => {
  const ingredientsList = useSelector((store) => store.ingredientsList)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [])


  return (
    <div className={styles.app}>
      <AppHeader/>
      {!ingredientsList.loading ? (ingredientsList.success ?
            <>
              <main className={styles.app__main}>
                <DndProvider backend={HTML5Backend}>
                  <>
                    <Ingredients/>
                    <BurgerConstructor/>
                  </>
                </DndProvider>
              </main>
            </> :
            <p className="text text_type_main-large">
              Произошла непредвиденная ошибка
            </p>
        ) :
        <p className="text text_type_main-large">
          Идёт загрузка
        </p>}
    </div>
  );
}

export default App;
