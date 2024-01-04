import React, {useEffect} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import Ingredients from "../ingredients/ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {ingredientsPath} from "../../utils/constants";

const App = () => {
  const [state, setState] = React.useState({isLoading: true, error: ""});

  useEffect(() => {
    setState({
      ...state,
      isLoading: true
    })
    fetch(ingredientsPath)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status)
      })
      .then((res) => {
        if (!res.success) {
          console.log("А где");
          return Promise.reject(res);
        }
        setState({
          data: res["data"],
          isLoading: false,
          error: ""
        })
      })
      .catch((err) => {
        setState({
          ...state,
          isLoading: false,
          error: err
        })
      })
  }, []);
  const defaultData = state.isLoading || state.error ? [] : [
    state.data[2],
    state.data[2],
    state.data[3],
    state.data[3],
    state.data[3],
    state.data[3],
    state.data[4],
  ];
  return (
    <div className={styles.app}>
      {state.isLoading && "Загрузка"}
      {state.error && "Ошибка: " + state.error}
      {!state.isLoading && !state.error && (
        <>
          <AppHeader/>
          <main className={styles.app__main}>
            <Ingredients data={state.data}/>
            <BurgerConstructor bottom={state.data[0]} top={state.data[0]} main={defaultData}/>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
