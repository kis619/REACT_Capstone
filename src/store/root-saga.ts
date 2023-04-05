import { all, call } from "typed-redux-saga";
import { categoriesSage } from "./categories/categories.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(categoriesSage), call(userSagas)]);
}
