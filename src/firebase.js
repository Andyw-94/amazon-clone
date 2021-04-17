import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiv9iKhEPQfRycGfU0vX95VwW4bD36sN8",
  authDomain: "amzn-clone-8f214.firebaseapp.com",
  projectId: "amzn-clone-8f214",
  storageBucket: "amzn-clone-8f214.appspot.com",
  messagingSenderId: "427085106429",
  appId: "1:427085106429:web:2afd18fa72797be0724294",
  measurementId: "G-P6QG38G05C",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
