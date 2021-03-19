import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyC9e97B_zbseTZ57nl0YlBIkbxGkcC6wQA",
  authDomain: "vsimic-chat.firebaseapp.com",
  projectId: "vsimic-chat",
  storageBucket: "vsimic-chat.appspot.com",
  messagingSenderId: "539672796962",
  appId: "1:539672796962:web:23a6d40d441bc1810f8f7b",
  measurementId: "G-TV6BKNQXFT",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firestore, auth };
