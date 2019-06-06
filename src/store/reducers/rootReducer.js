//This file collects all the data from other reducers and sends to directed place

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  //State of these two will be collected in here according to the data which they'are getting
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
