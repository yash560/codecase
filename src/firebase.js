import React from "react";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCysiYVxGPw5dn6KVnLRs-NSoJhGRhr-JI",
  authDomain: "portfoliowebsite-e935d.firebaseapp.com",
  projectId: "portfoliowebsite-e935d",
  storageBucket: "portfoliowebsite-e935d.appspot.com",
  messagingSenderId: "59874007199",
  appId: "1:59874007199:web:5cdc42967b37f1f059eaaa",
  measurementId: "G-9ZV34DQF5N",
});
const db = firebaseApp.firestore();

export default db;
