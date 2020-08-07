import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZhGaSWTki8g1P6nrL3kxULDMMrd_xZyA",
  authDomain: "instagram-clone-dca7e.firebaseapp.com",
  databaseURL: "https://instagram-clone-dca7e.firebaseio.com",
  projectId: "instagram-clone-dca7e",
  storageBucket: "instagram-clone-dca7e.appspot.com",
  messagingSenderId: "392197873340",
  appId: "1:392197873340:web:84418205db51a59e40bab9",
  measurementId: "G-L38CFVQQW2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
