import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkQeokcnpcyhqzUX3_--AOeOCsaZ2fPe0",
    authDomain: "jaba-fbac4.firebaseapp.com",
    databaseURL: "https://jaba-fbac4-default-rtdb.firebaseio.com",
    projectId: "jaba-fbac4",
    storageBucket: "jaba-fbac4.appspot.com",
    messagingSenderId: "155994837451",
    appId: "1:155994837451:web:43027c84df3fdbef67664e",
    measurementId: "G-86HY6DRMGQ"
  };
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);



  

  