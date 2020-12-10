import React, { useState } from "react";
import styles from "./trackerCreator.module.scss";
import { useDispatch } from "react-redux";
import { ReactComponent as AddTrack } from "../../icons/add.svg";
import { createItemAction } from "../../store/actions";

export const TrackerCreator = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function onChange(event) {
    setName(event.target.value);
  }

  function onCreateTracker() {
    dispatch(createItemAction(name));
    setName("");
  }

  function onButtonClick() {
    onCreateTracker();
  }

  function onSubmit(event) {
    event.preventDefault();
    onCreateTracker();
  }

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Enter tracker name"
        className={styles.trackerField}
        onChange={onChange}
      />
      <AddTrack className={styles.button} onClick={onButtonClick} />
    </form>
  );
};
