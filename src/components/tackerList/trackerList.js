import React from "react";
import styles from "./trackerList.module.scss";
import { TrackerListItem } from "../index";

export const TrackerList = () => {
  return (
    <div className={styles.container}>
      <TrackerListItem />
      <TrackerListItem />
      <TrackerListItem />
    </div>
  );
};
