import { useState, useEffect } from 'react';
import styles from './LoginSignInPage.module.css';
import { ReactComponent as SignIn } from '../../assets/signin_actual.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { UilEye as EyeOpened, UilEyeSlash as EyeClosed } from "@iconscout/react-unicons";
import {NavLink} from 'react-router-dom'

const LoginSignInAdminPage = () => {

  const [isVisiblePassword, setIsVisiblePassword] = useState(true);

  const toggleVisibilityPassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
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
              <p>Sign in as an Admin</p>
            </div>
            <div className={styles.loginContainer}>
              <p className={styles.labelProperties}>Email</p>
              <input className={styles.textBox} placeholder="Enter your email linked to your account" />
              <p className={styles.labelProperties}>Password</p>
              <div className={styles.passwordContainer}>
                <input
                  className={styles.textBox}
                  type={isVisiblePassword ? "text" : "password"}
                  placeholder="Enter your Password"
                />
                <button
                  className={styles.visiblityToggleButton}
                  onClick={toggleVisibilityPassword}
                >
                  {isVisiblePassword ? (
                    <EyeOpened className={styles.eyeImg} />
                  ) : (
                    <EyeClosed className={styles.eyeImg} />
                  )}
                </button>
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
                <p><NavLink to="/forgotPassword" className={styles.forgotPassword}>Forgot Password?</NavLink></p>
              </div>
            </div>
            <div className={styles.loginBox}>
              <NavLink to="navBar"> <button className={styles.loginButton}>Login</button></NavLink>
            </div>
              <div className={styles.registerBlurb}>

                <span>Not an Admin?<NavLink to="/userLogin" className={styles.boldText}>Switch to User Login</NavLink></span>
                <span>Don't have an account?<NavLink to="/requestAccount" className={styles.boldText}> Register</NavLink></span>
  
              </div>
            </div>
        </div>
        <div className={styles.rightSide}>
          <SignIn className={styles.rightImage} />
        </div>
      </div>
    </>
  );

}
  
export default LoginSignInAdminPage;