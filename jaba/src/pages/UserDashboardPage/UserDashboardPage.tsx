import { useState, useEffect } from 'react';
import styles from './UserDashboardPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import AdminHomeDashboard from '../../assets/adminhomedashboard.png';
import FilterIcon from '../../assets/filtericon.svg';
import {
    getFirestore, collection, getDocs, query, where, getDoc, doc, onSnapshot, or
} from 'firebase/firestore'
import { db } from '../../config/firebase';


interface Resource {
    zip: string;
    primaryCategory: string;
    name: string;
    // Only include the fields you need in your component
  }

const UserDashboardPage = () => {
    const handleClick = () => {
    };

    const isAdmin = true;
    const props = {isAdmin};

    const [inputText, setInputText] = useState("");
    let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        //convert input text to lower case
        // var lowerCase = e.target.value.toLowerCase();
        setInputText(e.target.value);
    };


    
  const [results, setResults] = useState<Resource[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const queryName = query(collection(db, 'resources'), or(where('name', '==', inputText), where('physicalAddress.zip', '==', inputText), where('primaryCategory', '==', inputText)));

  //       const snapshot = await getDocs(queryName);

  //       const data: Resource[] = snapshot.docs.map(doc => ({
  //         name: doc.data().name,
  //         zip: doc.data().physicalAddress.zip,
  //         primaryCategory: doc.data().primaryCategory,
  //       })) as Resource[];

  //       setResults(data);
  //       console.log('Search results:', data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [inputText]);


    return (
      <>
        <NavBar />
        <div className={styles.background}>
            <div className={styles.innerBackground}>
                <div className={styles.topPart}>
                    <div className={styles.searchBar}>
                        <button className={styles.magnifyingGlassBox}></button>
                        <input className={styles.textBox} type="text" value={inputText} onChange={inputHandler} placeholder="testestest" />
                        <img className={styles.filterImage} alt="filterImage" src={FilterIcon}/>
                    </div>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.screens}>
                        <p className={styles.header}>Category</p>
                    </div>
                    <div className={styles.middleImageDiv}>
                        <img className={styles.middleImage} alt="middleImage" src={AdminHomeDashboard}/>
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