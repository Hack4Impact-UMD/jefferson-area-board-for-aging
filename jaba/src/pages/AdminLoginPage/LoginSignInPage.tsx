import { useState, useEffect } from 'react';
import styles from './LoginSignInPage.module.css';
import SignIn from '../../assets/signin_actual.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import invisibleeye from '../../assets/invisibleeye.svg';
import EyeClosed from "../../assets/eye-closed.svg";
import EyeOpened from "../../assets/eye-opened.png";
// import UilReact from '@iconscout/react-unicons/icons/uil-react'

<head>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Inter:wght@600&family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="https://unicons.iconscout.com/release-pro/v4.0.0/css/solid.css"></link>
</head>

const LoginSignInPage = () => {
  
  // return <UilReact size="140" color="#61DAFB" />

  const handleClick = () => {
  };

  // const [isVisibleFirstEntry, setIsVisibleFirstEntry] = useState(true);

  // const [isVisibleSecondEntry, setIsVisibleSecondEntry] = useState(true);

  // const toggleVisibilityFirstEntry = () => {
  //   setIsVisibleFirstEntry(!isVisibleFirstEntry);
  // };

  // const toggleVisibilitySecondEntry = () => {
  //   setIsVisibleSecondEntry(!isVisibleSecondEntry);
  // };

  return (
    <>
      <div className={styles.splitScreen}>
        <div className={styles.leftSide}>
          <div className={styles.loginRectangle}>
            <div className={styles.welcomeBox}>
              <div className={styles.alignWelcome}>
                <p>Welcome!</p>
              </div>
              <div className={styles.alignWelcomeBlurb}>
                <p>Sign in as a Admin</p>
              </div >
            </div>
            <div className={styles.loginContainer}>
              <p className={styles.labelProperties}>Email</p>
                <input className={styles.textBox} placeholder="Enter your email linked to your account" />
              <p className={styles.labelProperties}>Password</p>
                <div className={styles.passwordContainer}>
                  <input 
                  // type={isVisibleSecondEntry ? "text" : "password"}
                  className={styles.textBox} placeholder="Enter your Password" 
                  />
                 {/* <button
                    className={styles.visible_input}
                    onClick={toggleVisibilitySecondEntry}
                  >
                     {isVisibleSecondEntry ? (
                      <EyeOpened className={styles.eye_img} />
                    ) : (
                      <EyeClosed className={styles.eye_img} />
                    )}
                  </button> */}
                </div>
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
                <p>Not a Admin? <a href="gotoresgisterpagefromhere" className={styles.boldText}><b>Switch to User Login</b></a></p>
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