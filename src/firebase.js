import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDDv009PXMJV0hNz_4nqoMnLhflF3XSihg',
    authDomain: 'discord-clone-9d6be.firebaseapp.com',
    projectId: 'discord-clone-9d6be',
    storageBucket: 'discord-clone-9d6be.appspot.com',
    messagingSenderId: '86952304715',
    appId: '1:86952304715:web:59b9b1d7a1fcb14df5edce',
    measurementId: 'G-BBQJ7ERWQQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
