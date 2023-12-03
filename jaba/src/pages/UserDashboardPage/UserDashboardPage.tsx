import { useState, useEffect } from 'react';
import styles from './UserDashboardPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import AdminHomeDashboard from '../../assets/adminhomedashboard.png';
import FilterIcon from '../../assets/filtericon.svg';
import TextField from "@mui/material/TextField";

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