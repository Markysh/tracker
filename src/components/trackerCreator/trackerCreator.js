import React from "react";
import styles from "./trackerCreator.module.scss";
import classnames from "classnames";

export const TrackerCreator = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter tracker name"
        className={styles.trackerField}
      />
      <span className={classnames("material-icons", styles.button)}>
        arrow_drop_down_circle
      </span>
    </div>
  );
};
