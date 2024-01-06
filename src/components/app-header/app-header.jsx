import React from 'react';
import styles from "./app-header.module.css"
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components"

const AppHeader = () => {
  return (
    <header className={"text text_type_main-default " + styles.header}>
      <div className={styles.header__container}>
        <section className={styles.header__item + " mt-4 mb-4"}>
          <a className={"ml-5 mr-5 text text_type_main-default " + styles.header__button + " " + styles.header__text} href="/">
            <BurgerIcon type="primary"/>
            Конструктор
          </a>
        </section>
        <section className={styles.header__item + " mt-4 mb-4"}>
          <a className={"ml-5 mr-5 text text_type_main-default text_color_inactive " + styles.header__button} href="/">
            <ListIcon type="secondary"/>
            Лента заказов
          </a>
        </section>
        <section className={styles.header__item + " mt-4 mb-4"}>
          <section>
            <Logo/>
          </section>
        </section>
        <section className={styles.header__item + " mt-4 mb-4"}>
          <a className={"ml-5 mr-5 text text_type_main-default text_color_inactive " + styles.header__button} href="/">
            <ProfileIcon type="secondary"/>
            Личный кабинет
          </a>
        </section>
      </div>
    </header>
  )
}
export default AppHeader;
