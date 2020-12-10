import React from "react";
import styles from "./trackerListItem.module.scss";
import classnames from "classnames";
import { playAction, stopAction, removeAction } from "../../store/actions";
import { useDispatch } from "react-redux";

export const TrackerListItem = (props) => {
  const id = props.id;
  const name = props.name;
  const time = props.time;
  const active = props.active;
  const dispatch = useDispatch();

  function onActiveClick() {
    if (active) {
      dispatch(stopAction(id));
    } else {
      dispatch(playAction(id));
    }
  }

  function onRemoveClick() {
    dispatch(removeAction(id));
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.details}>
        <div className={styles.time}>{time}</div>
        <span
          className={classnames("material-icons", styles.playBtn)}
          onClick={onActiveClick}
        >
          {active ? "pause_circle_outline" : "play_circle_outline"}
        </span>
        <span
          className={classnames("material-icons", styles.removeBtn)}
          onClick={onRemoveClick}
        >
          remove_circle_outline
        </span>
      </div>
    </div>
  );
};
