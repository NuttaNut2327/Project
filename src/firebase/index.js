// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEvQmZWCPgXSn8PY-SbSGordeCLH9sTHs",
  authDomain: "plzzz-7c447.firebaseapp.com",
  projectId: "plzzz-7c447",
  storageBucket: "plzzz-7c447.appspot.com",
  messagingSenderId: "898009392543",
  appId: "1:898009392543:web:029f8ebfd4b5adea6749aa",
  measurementId: "G-115HZ3LH7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };