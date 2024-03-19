// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-kccoL8K20oy0USy6swyDB1JXLrY8yak",
  authDomain: "expense-tracker-6f672.firebaseapp.com",
  projectId: "expense-tracker-6f672",
  storageBucket: "expense-tracker-6f672.appspot.com",
  messagingSenderId: "436101774455",
  appId: "1:436101774455:web:a2358154c781566f439a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)