import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCiW7ifulWqJgcXv1Tkg_lDOER39dxzpjA",
  authDomain: "todo-app-cp-46382.firebaseapp.com",
  databaseURL: "https://todo-app-cp-46382.firebaseio.com",
  projectId: "todo-app-cp-46382",
  storageBucket: "todo-app-cp-46382.appspot.com",
  messagingSenderId: "830247344658",
  appId: "1:830247344658:web:36860b03713c2582c2d6cb",
  measurementId: "G-8BJC6QVLNH",
});

const db = firebaseApp.firestore();

export default db;
