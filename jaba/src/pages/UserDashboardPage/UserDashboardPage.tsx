import { useState, useEffect } from 'react';
import styles from './UserDashboardPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import AdminHomeDashboard from '../../assets/adminhomedashboard.png';

const UserDashboardPage = () => {
    const handleClick = () => {
    };

    const isAdmin = true;
    const props = {isAdmin};

    return (
      <>
        <NavBar {...props}/>
        <div className={styles.background}>
            <div className={styles.innerBackground}>
                <div className={styles.topPart}>
                    <div>
                    </div>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.screens}>
                    </div>
                    <div className={styles.screens}>
                        <img className={styles.middleImage} src={AdminHomeDashboard}/>
                    </div>
                    <div className={styles.screens}>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default UserDashboardPage;