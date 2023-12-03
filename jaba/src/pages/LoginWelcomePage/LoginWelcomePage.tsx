import { useState, useEffect } from 'react';
import styles from './LoginWelcomePage.module.css';

import Welcome from '../../assets/welcome_actual.svg';

const LoginWelcomePage = () => {


    return (
      <>
        <div className={styles.splitScreen}>
          <div className={styles.leftSide}>
            <div className={styles.welcomeRectangle}>

              <div className={styles.alignWelcome}>
                Welcome!
              </div>
              <div className={styles.alignWelcomeBlurb}>
                We're excited to have you on board. How would you like to continue?
              </div>
              <div className={styles.signInUserBox}>
                <button className={styles.signInUserButton}>Sign in as User</button>
              </div>
              <div className={styles.signInAdminBox}>
                <button className={styles.signInAdminButton}>Sign in as Admin</button>
              </div>
              <div className={styles.registerBlurb}>
                <p>Don't have an Account? <a href="gotoresgisterpagefromhere" className={styles.boldText}><b>Register</b></a></p>
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