// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
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
  appId: "1:155994837451:web:b0b7f77100f7207067664e",
  measurementId: "G-C1VRQPWRTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, "us-east4");
export default app;
