import React, { useState } from "react";
import styles from "./trackerCreator.module.scss";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { createItemAction } from "../../store/actions";

export const TrackerCreator = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function onChange(event) {
    setName(event.target.value);
  }

  function onButtonClick() {
    dispatch(createItemAction(name));
    setName("");
  }
  //form + submit
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={name}
        placeholder="Enter tracker name"
        className={styles.trackerField}
        onChange={onChange}
      />
      <span
        className={classnames("material-icons", styles.button)}
        onClick={onButtonClick}
      >
        arrow_drop_down_circle
      </span>
    </div>
  );
};
