import { useState, useEffect } from 'react';
import styles from './LoginWelcomePage.module.css';
import NavBar from '../../components/NavBar/NavBar';

const LoginWelcomePage = () => {
    const handleClick = () => {
    };

    const isAdmin = true;
    const props = {isAdmin};

    return (
      <>
        <NavBar {...props}/>
        <div className={styles.splitScreen}>
        </div>
      </>
    );
  }
  
  export default LoginWelcomePage;