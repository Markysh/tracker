import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { listItemsReducer } from "./reducer";
import trackerEffect from "./effects/tracker";
import { syncEffect } from "./effects/sync";

const rootReducer = combineReducers({
  listItems: listItemsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

trackerEffect(store);
syncEffect(store);
