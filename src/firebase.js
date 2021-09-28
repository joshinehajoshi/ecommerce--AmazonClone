import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcS0AIkAp0v258lkeXYIse-lGgHxumKtw",
  authDomain: "clone-b9a5c.firebaseapp.com",
  projectId: "clone-b9a5c",
  storageBucket: "clone-b9a5c.appspot.com",
  messagingSenderId: "717226937377",
  appId: "1:717226937377:web:16cdd7d8908d964671a760"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};