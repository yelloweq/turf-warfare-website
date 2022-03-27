import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/database"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCkw22mRKzFfNmcTvQBN4C7Qg15LXN1Sug",
  authDomain: "trenchwarfare-25108.firebaseapp.com",
  databaseURL: "https://trenchwarfare-25108-default-rtdb.firebaseio.com",
  projectId: "trenchwarfare-25108",
  storageBucket: "trenchwarfare-25108.appspot.com",
  messagingSenderId: "110498318893",
  appId: "1:110498318893:web:cf113b55ed6e827bb346a4"
});

export const auth = app.auth();
export default app;