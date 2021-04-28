import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApVrrxNUoq19bQiOx5JEQcfcdXL5x3CtE",
  authDomain: "instagram-clone-react-bfd9d.firebaseapp.com",
  projectId: "instagram-clone-react-bfd9d",
  storageBucket: "instagram-clone-react-bfd9d.appspot.com",
  messagingSenderId: "136144608656",
  appId: "1:136144608656:web:270dcee721f8e5da66a715",
  measurementId: "G-BNRPZ20VZV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
