import { useState, useEffect } from 'react';
import styles from './LoginSignInPage.module.css';
import { ReactComponent as SignIn } from '../../assets/signin_actual.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { UilEye as EyeOpened, UilEyeSlash as EyeClosed } from "@iconscout/react-unicons";

const LoginSignInPage = () => {

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
                <p><a href="gotoresgisterpagefromhere" className={styles.forgotPassword}>Forgot Password?</a></p>
              </div>
            </div>
            <div className={styles.loginBox}>
              <button className={styles.loginButton}>Login</button>
            </div>
              <div className={styles.registerBlurb}>
                <p>Not a User? <a href="gotoresgisterpagefromhere" className={styles.boldText}><b>Switch to User Login</b></a></p>
                <p>Don't have an account?<a href="gotoresgisterpagefromhere" className={styles.boldText}><b> Register</b></a></p>
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
  
export default LoginSignInPage;