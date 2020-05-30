import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2WGa_9y-c4JZ8l2G1uCRD5OJDm4y_5UA",
  authDomain: "angela-ezeh-clothing-db.firebaseapp.com",
  databaseURL: "https://angela-ezeh-clothing-db.firebaseio.com",
  projectId: "angela-ezeh-clothing-db",
  storageBucket: "angela-ezeh-clothing-db.appspot.com",
  messagingSenderId: "232298741672",
  appId: "1:232298741672:web:bc5ec058ad69b5958e679d",
  measurementId: "G-DD62PJ6KVZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
