import React from "react";
import classnames from "classnames";
import styles from "./trackerListItem.module.scss";
import { ReactComponent as PlayTack } from "../../icons/play.svg";
import { ReactComponent as StopTack } from "../../icons/pause.svg";
import { ReactComponent as RemoveTrack } from "../../icons/remove.svg";
import { playAction, stopAction, removeAction } from "../../store/actions";
import { useDispatch } from "react-redux";

export const TrackerListItem = (props) => {
  const id = props.id;
  const name = props.name;
  const time = props.time;
  const active = props.active;
  const nameClass = classnames(styles.name, { [styles.activeColor]: active });
  const timeClass = classnames(styles.time, { [styles.activeColor]: active });
  const containerClass = classnames(styles.container, {
    [styles.activeBg]: active,
  });
  const dispatch = useDispatch();

  function format(duration) {
    const hours = Math.floor(duration / 3600);
    const minutesFractional = duration - 3600 * hours;
    const minutes = Math.floor(minutesFractional / 60);
    const seconds = minutesFractional - minutes * 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  function pad(value) {
    return value.toString().padStart(2, "0");
  }

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
    <div className={containerClass}>
      <div className={nameClass}>{name}</div>
      <div className={styles.details}>
        <div className={timeClass}>{format(time)}</div>
        {active ? (
          <StopTack className={styles.activeBtn} onClick={onActiveClick} />
        ) : (
          <PlayTack className={styles.activeBtn} onClick={onActiveClick} />
        )}
        <RemoveTrack className={styles.removeBtn} onClick={onRemoveClick} />
      </div>
    </div>
  );
};
