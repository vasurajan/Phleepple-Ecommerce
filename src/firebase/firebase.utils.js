import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyADcaKxQAQyV4X6iz92LXpSuH267Qa1lMM",
  authDomain: "fashiony-db.firebaseapp.com",
  databaseURL: "https://fashiony-db.firebaseio.com",
  projectId: "fashiony-db",
  storageBucket: "fashiony-db.appspot.com",
  messagingSenderId: "365837300063",
  appId: "1:365837300063:web:13da339d95d59c0bbf86ea",
  measurementId: "G-TCPGDZVN40"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
