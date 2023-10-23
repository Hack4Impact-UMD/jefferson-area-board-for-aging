import { useState, useEffect } from 'react';
import styles from './LoginWelcomePage.module.css';
import Welcome from '../../assets/welcome.png';

const LoginWelcomePage = () => {
    const handleClick = () => {
    };

    return (
      <>
        <div className={styles.splitScreen}>
          <div className={styles.leftSide}>
          </div>
          <div className={styles.rightSide}>
            <img className={styles.rightImage} src={Welcome}/>
          </div>
        </div>
      </>
    );
  }
  
  export default LoginWelcomePage;