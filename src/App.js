import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import styles from "./App.module.scss";
import { TrackerCreator } from "./components/index";
import { TrackerList } from "./components/index";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.mainContainer}>
        <div className={styles.title}>tracker</div>
        <div className={styles.trackerWrapper}>
          <TrackerCreator />
          <TrackerList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
