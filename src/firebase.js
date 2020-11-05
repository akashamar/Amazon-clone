import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkC7BXK8FEw3PjI0FiZzoV_bnrVwLQvbw",
  authDomain: "clone-9c35d.firebaseapp.com",
  databaseURL: "https://clone-9c35d.firebaseio.com",
  projectId: "clone-9c35d",
  storageBucket: "clone-9c35d.appspot.com",
  messagingSenderId: "787563819740",
  appId: "1:787563819740:web:4f1bfcd3f7e9586e583a19",
  measurementId: "G-H819S47BQZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};