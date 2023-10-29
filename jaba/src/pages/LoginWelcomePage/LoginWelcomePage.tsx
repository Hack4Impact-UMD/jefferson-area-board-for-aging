import { useState, useEffect } from 'react';
import styles from './LoginWelcomePage.module.css';
import Welcome from '../../assets/welcome.png';

<head>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Inter:wght@600&family=Poppins&display=swap" rel="stylesheet"></link>
</head>
const LoginWelcomePage = () => {
    const handleClick = () => {
    };

    return (
      <>
        <div className={styles.splitScreen}>
          <div className={styles.leftSide}>
            <div className={styles.welcomeRectangle}>
              <div className={styles.alignWelcome}>
                <p>Welcome!</p>
              </div>
                <div className={styles.alignWelcomeBlurb}>
                  <p>We're excited to have you on board. How would you like to continue?</p>
                </div >
              <div className={styles.signInUserBox}>
                <button className={styles.signInUserButton}>Sign in as User</button>
              </div>
              <div className={styles.signInAdminBox}>
                <button className={styles.signInAdminButton}>Sign in as Admin</button>
              </div>
              <div className={styles.registerBlurb}>
                <p>Don’t have an Account? <a href="gotoresgisterpagefromhere" className={styles.boldText}><b>Register</b></a></p>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img className={styles.rightImage} src={Welcome}/>
          </div>
        </div>
      </>
    );
  }
  
  export default LoginWelcomePage;