import { all, call } from "redux-saga/effects";
import { categoriesSage } from "./categories/categories.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSage), call(userSagas)]);
}
