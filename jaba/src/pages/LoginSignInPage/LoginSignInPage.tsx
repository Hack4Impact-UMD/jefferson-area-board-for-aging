import { useState, useEffect } from 'react';
import styles from './LoginSignInPage.module.css';
import SignIn from '../../assets/signin.png';

const LoginSignInPage = () => {
  const handleClick = () => {
  };

  return (
    <>
      <div className={styles.splitScreen}>
        <div className={styles.leftSide}>
        </div>
        <div className={styles.rightSide}>
          <img className={styles.rightImage} src={SignIn}/>
        </div>
      </div>
    </>
  );
}
  
export default LoginSignInPage;