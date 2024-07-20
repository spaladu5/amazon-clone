import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZRb-KkiN-PSpp4VCNIwWn3sjrM_g_tT0",
  authDomain: "clone-14891.firebaseapp.com",
  projectId: "clone-14891",
  storageBucket: "clone-14891.appspot.com",
  messagingSenderId: "1094226883397",
  appId: "1:1094226883397:web:2fe43152919462de01c42c",
  measurementId: "G-BW4CWY2KNQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
