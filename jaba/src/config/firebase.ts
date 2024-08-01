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
  apiKey: "AIzaSyAAy660iJsuQbCQ-E6lRea5P61WKhJ1bTM",
  authDomain: "jefferson-area-board-of-aging.firebaseapp.com",
  projectId: "jefferson-area-board-of-aging",
  storageBucket: "jefferson-area-board-of-aging.appspot.com",
  messagingSenderId: "826056367236",
  appId: "1:826056367236:web:8741115257905be4edb6d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, "us-east4");
export default app;
