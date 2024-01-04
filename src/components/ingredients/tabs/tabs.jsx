import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import styles from "./tabs.module.css";


const Tabs = ({currentTab}) => {
  return(
    <div className={styles.tabs_container}>
      <Tab value="one" active={currentTab === 'one'}>
        Булки
      </Tab>
      <Tab value="two" active={currentTab === 'two'}>
        Соусы
      </Tab>
      <Tab value="three" active={currentTab === 'three'}>
        Начинки
      </Tab>
    </div>)
}

Tabs.propTypes = {
  currentTab: PropTypes.string.isRequired,
}
export default Tabs;