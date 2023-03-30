import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnchancer = compose(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancer
);
export const persistor = persistStore(store);
