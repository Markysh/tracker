export function syncEffect(store) {
  store.subscribe(() => {
    const createdTracks = store.getState().listItems;
    localStorage.setItem("createdTracks", JSON.stringify(createdTracks));
    localStorage.setItem("storedDate", new Date());
  });
}

export function getStoredTracks() {
  const storedTracks = JSON.parse(localStorage.getItem("createdTracks"));
  const storedDate = new Date(localStorage.getItem("storedDate"));
  const currentDate = new Date();
  const diff = Math.floor((currentDate - storedDate) / 1000);
  storedTracks
    .filter((storedTrack) => storedTrack.active)
    .forEach((storedTrack) => {
      storedTrack.time = storedTrack.time + diff;
    });

  return storedTracks;
}
