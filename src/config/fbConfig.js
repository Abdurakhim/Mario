import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxbatKxAV4nsUEp8jcus8rSH_80tjaAZk",
  authDomain: "abdurakhim-2nd-project-trial.firebaseapp.com",
  databaseURL: "https://abdurakhim-2nd-project-trial.firebaseio.com",
  projectId: "abdurakhim-2nd-project-trial",
  storageBucket: "abdurakhim-2nd-project-trial.appspot.com",
  messagingSenderId: "1070905500837"
};
firebase.initializeApp(config);

firebase.firestore();

export default firebase;
