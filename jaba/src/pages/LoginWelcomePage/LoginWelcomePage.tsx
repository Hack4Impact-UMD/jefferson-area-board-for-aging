import { useState, useEffect } from 'react';
import styles from './LoginWelcomePage.module.css';

import Welcome from '../../assets/welcome_actual.svg';
import {NavLink} from 'react-router-dom';

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
                <NavLink to = "/userLogin"><button className={styles.signInUserButton}>Sign in as User</button></NavLink>
              </div>
              <div className={styles.signInAdminBox}>
                <NavLink to="/adminLogin"><button className={styles.signInAdminButton}>Sign in as Admin</button></NavLink>
              </div>
              <div className={styles.registerBlurb}>
                <span>Don't have an Account? <NavLink to="/requestAccount" className={styles.navlink}>Register</NavLink></span>
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