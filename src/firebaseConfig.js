import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2fr45baRMItBa8nQhgoDU2hueNlt1-WI",
  authDomain: "typing-speed-test-040.firebaseapp.com",
  projectId: "typing-speed-test-040",
  storageBucket: "typing-speed-test-040.appspot.com",
  messagingSenderId: "646043720009",
  appId: "1:646043720009:web:e0eed7ab53712ebd30e298",
  measurementId: "G-FZRCH01G0B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db}; 
