import styles from "./ForgotPassword.module.css";
import { ReactComponent as ForgotPasswordSideImage } from "../../assets/ForgotPasswordSideImage.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { sendResetEmail } from "../../backend/AuthFunctions";

function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleSubmit = () => {
    if (email != "") {
      sendResetEmail(email);
      setSubmitted(true);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoSide}>
        <div className={styles.mainInfo}>
          {submitted ? (
            <>
              <div className={styles.mainInfoHeaderSubmitted}>Email Sent</div>
              <div className={styles.mainInfoDetailsSubmitted}>
                Please check your email, a password reset email has been sent.
              </div>
            </>
          ) : (
            <>
              <div className={styles.mainInfoHeader}>Forgot Password?</div>
              <div className={styles.mainInfoDetails}>
                Enter the email address associated with your account, and we'll
                send you a link to reset your password.
              </div>
              <div className={styles.emailSection}>
                <div className={styles.emailSectionHeader}>Email</div>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email linked to your account"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className={styles.resetButton}
                onClick={() => handleSubmit()}
              >
                Send Reset Link
              </button>
            </>
          )}
          <div className={styles.loginSection}>
            <div className={styles.loginSectionContext}>
              Log in using another email?{" "}
              <NavLink to="/login">Log in here</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <ForgotPasswordSideImage className={styles.svgImage} />
      </div>
    </div>
  );
}

export default ForgotPassword;
