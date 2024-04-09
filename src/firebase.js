import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDel5nTWSPshBw8UXdf3WYGB9aZdZDKVgA",
  authDomain: "facebook-clone-862ee.firebaseapp.com",
  databaseURL: "https://facebook-clone-862ee.firebaseio.com",
  projectId: "facebook-clone-862ee",
  storageBucket: "facebook-clone-862ee.appspot.com",
  messagingSenderId: "822447408726",
  appId: "1:822447408726:web:c0e27a49f11fafee309df7",
  measurementId: "G-FJHBS6LM6W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
