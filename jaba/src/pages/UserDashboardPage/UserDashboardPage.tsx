import { useState, useEffect } from 'react';
import styles from './UserDashboardPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import AdminHomeDashboard from '../../assets/adminhomedashboard.png';
import FilterIcon from '../../assets/filtericon.svg';

import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs, query, where, getDoc, doc, onSnapshot
} from 'firebase/firestore'


const UserDashboardPage = () => {
    const handleClick = () => {
    };

    const isAdmin = true;
    const props = {isAdmin};

    const [inputText, setInputText] = useState("");
    let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

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

    initializeApp(firebaseConfig)


    const db = getFirestore()

    const collectionReference = collection(db, 'resources')

    // const q = query(collectionReference, where("zip", "==", "12345"))

    getDocs(collectionReference)
        .then((snapshot) => {
            let resources: { id: string; }[] = []
            snapshot.docs.forEach((doc) => {
                resources.push({ ...doc.data(), id: doc.id })
            })
            console.log(resources)
        })

        .catch(err => {
            console.log(err.message)
        })

    const docRef = doc(db, 'resources', '8jaI6WBs9gZGNjzwbfIP')

    getDoc(docRef)
        .then((doc) => {
            console.log(doc.data, doc.id)
        })
    
    return (
      <>
        <NavBar {...props}/>
        <div className={styles.background}>
            <div className={styles.innerBackground}>
                <div className={styles.topPart}>
                    <div className={styles.searchBar}>
                        <button className={styles.magnifyingGlassBox}></button>
                        <input className={styles.textBox} type="text" value={inputText} onChange={inputHandler} placeholder="testestest" />
                        <img className={styles.filterImage} src={FilterIcon}/>
                    </div>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.screens}>
                        <p className={styles.header}>Category</p>
                    </div>
                    <div className={styles.middleImageDiv}>
                        <img className={styles.middleImage} src={AdminHomeDashboard}/>
                        <button className={styles.searchButton}>Search</button>
                    </div>
                    <div className={styles.screens}>
                        <p className={styles.header}>Region</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default UserDashboardPage;