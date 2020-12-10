import { CREATE_ITEM, UPDATE_ITEM_TIME, PLAY, STOP, REMOVE } from "./constants";

export const createItemAction = (name) => ({
  type: CREATE_ITEM,
  payload: {
    name,
  },
});

export const updateTrackerTimeAction = (id, time) => ({
  type: UPDATE_ITEM_TIME,
  payload: {
    id,
    time,
  },
});

export const playAction = (id) => ({
  type: PLAY,
  payload: {
    id,
  },
});

export const stopAction = (id) => ({
  type: STOP,
  payload: {
    id,
  },
});

export const removeAction = (id) => ({
  type: REMOVE,
  payload: {
    id,
  },
});
