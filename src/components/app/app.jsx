import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import Ingredients from "../ingredients/ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {ingredientsPath} from "../../utils/constants";
import Modal from "../modal/modal";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("err");

  const [ingredients, setIngredients] = useState([]);
  const [modalState, setModalState] = useState({open: false, node: (<></>)})

  const onModalOpen = (node) => {
    setModalState({
      open: true,
      node: node,
    })
  }

  const onModalClose = () => {
    setModalState({
      open: false,
      node: (<></>)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(ingredientsPath)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status)
      })
      .then((res) => {
        if (!res.success) {
          return Promise.reject(res);
        }
        setIngredients(res["data"])
        setIsLoading(false)
        setError("")
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
        setError(err)
      })
  }, []);

  const defaultData = isLoading || error ? [] : [
    ingredients[2],
    ingredients[2],
    ingredients[3],
    ingredients[3],
    ingredients[3],
    ingredients[3],
    ingredients[4],
  ];

  return (
    <div className={styles.app}>
      <AppHeader/>
      {modalState.open && !isLoading &&
        <Modal onClose={onModalClose}>
          {modalState.node}
        </Modal>
      }
      {isLoading && "Загрузка"}
      {error && "Ошибка: " + error}
      {!isLoading && !error && (
        <>
          <main className={styles.app__main}>
            <Ingredients data={ingredients} onModalOpen={onModalOpen}/>
            <BurgerConstructor bottom={ingredients[0]} top={ingredients[0]} main={defaultData}
                               onModalOpen={onModalOpen}/>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
