import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { listItemsReducer } from "./reducer";
import trackerEffect from "./effects/tracker";

const rootReducer = combineReducers({
  listItems: listItemsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

trackerEffect(store);
store.subscribe(() => {
  const createdTracks = store.getState().listItems;
  localStorage.setItem("createdTracks", JSON.stringify(createdTracks));
});
