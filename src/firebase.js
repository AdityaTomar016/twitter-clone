
import firebase from "firebase";
// import { initializeApp } from 'firebase/compat/app';
// import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU3zsP2OZUxvqjW_Zj2C2C_B4l3EWnAPE",
  authDomain: "twitter-clone-54ef2.firebaseapp.com",
  projectId: "twitter-clone-54ef2",
  storageBucket: "twitter-clone-54ef2.appspot.com",
  messagingSenderId: "546259271534",
  appId: "1:546259271534:web:a9dcf24d6e489290390b7f",
  measurementId: "G-7BP47Q91KQ"
};


  
const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

  
  export default db;