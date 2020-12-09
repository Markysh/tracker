import React from "react";
import styles from "./App.module.scss";
import { TrackerCreator } from "./components/index";
import { TrackerList } from "./components/index";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>tracker</div>
      <TrackerCreator />
      <TrackerList />
    </div>
  );
}

export default App;
