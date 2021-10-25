import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChFdCQN_8tjlrkjMRDBVsJh6iet8grajs",
  authDomain: "turf-warfare.firebaseapp.com",
  projectId: "turf-warfare",
  storageBucket: "turf-warfare.appspot.com",
  messagingSenderId: "200296671812",
  appId: "1:200296671812:web:bda4bbb82541e9d12baa11",
  measurementId: "G-JHHHKQDBML"
};

firebase.initializeApp(firebaseConfig);

export default firebase;