import React from "react";
import styles from "./trackerList.module.scss";
import { TrackerListItem } from "../index";
import { useSelector } from "react-redux";

export const TrackerList = () => {
  const trackers = useSelector((state) => state.listItems);

  const listItems = trackers.map((listItem) => {
    return (
      <TrackerListItem
        key={listItem.id}
        id={listItem.id}
        name={listItem.name}
        time={listItem.time}
        active={listItem.active}
      />
    );
  });

  return <div className={styles.container}>{listItems}</div>;
};
