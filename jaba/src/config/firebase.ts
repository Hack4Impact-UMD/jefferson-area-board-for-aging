// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkQeokcnpcyhqzUX3_--AOeOCsaZ2fPe0",
  authDomain: "jaba-fbac4.firebaseapp.com",
  databaseURL: "https://jaba-fbac4-default-rtdb.firebaseio.com",
  projectId: "jaba-fbac4",
  storageBucket: "jaba-fbac4.appspot.com",
  messagingSenderId: "155994837451",
  appId: "1:155994837451:web:8c7d154578eefb9b67664e",
  measurementId: "G-SVSWCYK0X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, "us-east4");
export default app;
