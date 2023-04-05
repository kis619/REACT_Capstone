import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInFailure,
  signInSuccess,
  signOutFailute,
  signOutSuccess,
  signUpFailure,
} from "./user.action";
import { act } from "react-dom/test-utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoasing: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoasing: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  } else if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  } else if (
    signInFailure.match(action) ||
    signOutFailute.match(action) ||
    signUpFailure.match(action)
  ) {
    return { ...state, error: action.payload };
  } else {
    return state;
  }
};
