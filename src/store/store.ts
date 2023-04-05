import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger"
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};
const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware].filter((middleware): middleware is Middleware =>  Boolean(middleware));

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnchancer = compose(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancer
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
