import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOx8JOIx6XoR4jc9I4BtFKvdYlL13cCPs",
  authDomain: "linkdin-clone-4d513.firebaseapp.com",
  projectId: "linkdin-clone-4d513",
  storageBucket: "linkdin-clone-4d513.appspot.com",
  messagingSenderId: "578299058267",
  appId: "1:578299058267:web:08c0f7d51d1fcff359077e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
