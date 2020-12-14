import { updateTrackerTimeAction } from "../actions";

const timers = new Map();

const trackersSelector = (store) => {
  return store.getState().listItems;
};

const diff = (trackers, oldTrackers) => {
  return oldTrackers.filter((oldTracker) => {
    return !trackers.some((tracker) => tracker.id === oldTracker.id);
  });
};

const startTimer = (id, callback) => {
  timers.set(id, setInterval(callback, 1000));
};

const clearTimer = (id) => {
  clearInterval(timers.get(id));
  timers.delete(id);
};

const filterActive = (trackers) => {
  return trackers
    .filter((tracker) => tracker.active)
    .filter((tracker) => !timers.has(tracker.id));
};

const onItemsChange = (store, listener) => {
  let items = trackersSelector(store);

  store.subscribe(() => {
    const newItems = trackersSelector(store);

    if (items !== newItems) {
      listener(newItems, items);
      items = newItems;
    }
  });
};

const onPlay = (store, listener) => {
  onItemsChange(store, (trackers) => {
    filterActive(trackers).forEach((tracker) => listener(tracker));
  });
};

const onPause = (store, listener) => {
  onItemsChange(store, (trackers) => {
    trackers
      .filter((tracker) => !tracker.active)
      .filter((tracker) => timers.has(tracker.id))
      .forEach((tracker) => listener(tracker));
  });
};

const onRemove = (store, listener) => {
  onItemsChange(store, (trackers, oldTrackers) => {
    diff(trackers, oldTrackers).forEach((tracker) => listener(tracker));
  });
};

const onPlayTracker = (onTick) => {
  return (tracker) => {
    startTimer(tracker.id, () => onTick(tracker));
  };
};

const onPauseTracker = (tracker) => clearTimer(tracker.id);

const effect = (store) => {
  const playTrackerEffect = onPlayTracker((tracker) => {
    store.dispatch(updateTrackerTimeAction(tracker.id));
  });

  filterActive(trackersSelector(store)).forEach(playTrackerEffect);

  onPlay(store, playTrackerEffect);
  onPause(store, onPauseTracker);
  onRemove(store, onPauseTracker);
};

export default effect;
