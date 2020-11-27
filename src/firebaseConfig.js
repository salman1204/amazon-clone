import firebase from 'firebase/app'
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtV_acoxxdqrZ98wvXRuis3ZCyH1iVkeU",
  authDomain: "clone-ad9dc.firebaseapp.com",
  databaseURL: "https://clone-ad9dc.firebaseio.com",
  projectId: "clone-ad9dc",
  storageBucket: "clone-ad9dc.appspot.com",
  messagingSenderId: "873512296247",
  appId: "1:873512296247:web:6759da4511dfaff78cc4b2"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };