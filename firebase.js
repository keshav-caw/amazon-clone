import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqJBLXSNwYBgKcJVom-8YsyZoHpdEUpns",
  authDomain: "clone-8cd64.firebaseapp.com",
  projectId: "clone-8cd64",
  storageBucket: "clone-8cd64.appspot.com",
  messagingSenderId: "47585444188",
  appId: "1:47585444188:web:56c2c4a33de1f87dcd4199",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;