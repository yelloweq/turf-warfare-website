import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

firebase.fireStore();

export default firebase;