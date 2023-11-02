import { useState, useEffect } from 'react';
import styles from './LoginSignInPage.module.css';
import SignIn from '../../assets/signin.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

<head>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Inter:wght@600&family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
</head>

const LoginSignInPage = () => {
  const handleClick = () => {
  };

  return (
    <>
      <div className={styles.splitScreen}>
        <div className={styles.leftSide}>
          <div className={styles.loginRectangle}>
            <div className={styles.alignWelcome}>
              <p>Welcome!</p>
            </div>
            <div className={styles.alignWelcomeBlurb}>
              <p>Sign in as a User</p>
            </div >
            <div className={styles.loginContainer}>
              <p className={styles.labelProperties}>Email</p>
                <input className={styles.textBox} placeholder="Enter your email linked to your account" />
              <p className={styles.labelProperties}>Password</p>
                <input className={styles.textBox} placeholder="Enter your Password" />
            </div> 
            <div className={styles.flexContainer}>
              <div className={styles.checkboxProperty}>
              <FormControlLabel
                control={<Checkbox value="remember"  sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }} />}
                label={
                  <span style={{ color: '#4D4D4D', fontFamily: 'Inter', fontSize: '14px'}}>
                    Remember me
                  </span>
                }
              />
              </div>
              <div className={styles.forgotPassword}> 
                <p><a href="gotoresgisterpagefromhere" className={styles.forgotPassword}>Forgot Password?</a></p>
              </div>
    
            </div>
            <div className={styles.loginBox}>
              <button className={styles.loginButton}>Login</button>
            </div>

              <div className={styles.registerBlurb}>
                <p>Not a User? <a href="gotoresgisterpagefromhere" className={styles.boldText}><b>Switch to Admin Login</b></a></p>
                <p>Don't have an account?<a href="gotoresgisterpagefromhere" className={styles.boldText}><b> Register</b></a></p>
              </div>
            </div>
            <div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img className={styles.rightImage} src={SignIn}/>
        </div>
      </div>
    </>
  );
}
  
export default LoginSignInPage;