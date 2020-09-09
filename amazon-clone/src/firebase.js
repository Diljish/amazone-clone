import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyBob4y19t_7CGBG0FdlG4UrWZkevM6Z5yk",
  authDomain: "clone-98e46.firebaseapp.com",
  databaseURL: "https://clone-98e46.firebaseio.com",
  projectId: "clone-98e46",
  storageBucket: "clone-98e46.appspot.com",
  messagingSenderId: "222591343364",
  appId: "1:222591343364:web:0f97a5900479b9995a8e51",

});

// const db =firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
