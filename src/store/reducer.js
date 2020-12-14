import { v4 } from "uuid";
import { CREATE_ITEM, UPDATE_ITEM_TIME, PLAY, STOP, REMOVE } from "./constants";
import { getStoredTracks } from "./effects/sync";

const initialState = getStoredTracks() || [];

export function listItemsReducer(store = initialState, { type, payload }) {
  switch (type) {
    case CREATE_ITEM:
      return onCreateItem(store, payload);
    case UPDATE_ITEM_TIME:
      return onUpdateItem(store, payload);
    case PLAY:
      return onPlay(store, payload);
    case STOP:
      return onStop(store, payload);
    case REMOVE:
      return onRemove(store, payload);
    default:
      return store;
  }
}

function onCreateItem(store, payload) {
  const name = payload.name;
  const tracker = {
    id: v4(),
    name: name,
    time: 0,
    active: true,
  };
  return [...store, tracker];
}

function onUpdateItem(store, payload) {
  const searchedTracker = store.find((item) => {
    return item.id === payload.id;
  });
  return store.map((item) => {
    return item !== searchedTracker
      ? item
      : {
          ...searchedTracker,
          time: searchedTracker.time + 1,
        };
  });
}

function onPlay(store, payload) {
  return store.map((playTracker) => {
    return playTracker.id !== payload.id
      ? playTracker
      : {
          ...playTracker,
          active: true,
        };
  });
}

function onStop(store, payload) {
  return store.map((stopTracker) => {
    return stopTracker.id !== payload.id
      ? stopTracker
      : {
          ...stopTracker,
          active: false,
        };
  });
}

function onRemove(store, payload) {
  return store.filter((item) => {
    return item.id !== payload.id;
  });
}
