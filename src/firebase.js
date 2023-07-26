import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDUtux2I4MHJlCCyiSbuU2kPnEvbSBLXhw",
  authDomain: "forum-e1e9e.firebaseapp.com",
  databaseURL: "https://forum-e1e9e-default-rtdb.firebaseio.com",
  projectId: "forum-e1e9e",
  storageBucket: "forum-e1e9e.appspot.com",
  messagingSenderId: "1093558897323",
  appId: "1:1093558897323:web:6eba02a8cf35c39dab85ee"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;