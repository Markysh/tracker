import React from "react";
import styles from "./trackerListItem.module.scss";
import classnames from "classnames";

export const TrackerListItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Tracker name #1</div>
      <div className={styles.details}>
        <div className={styles.time}>00:00:00</div>
        {/* <span className="material-icons">pause_circle_outline</span> */}
        <span className={classnames("material-icons", styles.playBtn)}>
          play_circle_outline
        </span>
        <span className={classnames("material-icons", styles.removeBtn)}>
          remove_circle_outline
        </span>
      </div>
    </div>
  );
};
