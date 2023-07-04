import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_spQB0jHcXPVz4FaCijp35qLpVoVtacY",
  authDomain: "e-clone-c7839.firebaseapp.com",
  projectId: "e-clone-c7839",
  storageBucket: "e-clone-c7839.appspot.com",
  messagingSenderId: "1089756200468",
  appId: "1:1089756200468:web:f2da8367541fa52c6a3101",
  measurementId: "G-1V291RH0VG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
