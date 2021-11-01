import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyChFdCQN_8tjlrkjMRDBVsJh6iet8grajs",
  authDomain: "turf-warfare.firebaseapp.com",
  projectId: "turf-warfare",
  storageBucket: "turf-warfare.appspot.com",
  messagingSenderId: "200296671812",
  appId: "1:200296671812:web:bda4bbb82541e9d12baa11",
  measurementId: "G-JHHHKQDBML"
});

export const auth = app.auth();
export default app;