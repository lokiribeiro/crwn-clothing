import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCiC69k-l6VUjmbBqrAUl3YWFXgoyP6Wiw',
  authDomain: 'crwn-db-9ec29.firebaseapp.com',
  projectId: 'crwn-db-9ec29',
  storageBucket: 'crwn-db-9ec29.appspot.com',
  messagingSenderId: '452676687489',
  appId: '1:452676687489:web:ff8168d58b4d339245df80',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;