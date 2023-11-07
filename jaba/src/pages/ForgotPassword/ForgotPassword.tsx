import styles from "./ForgotPassword.module.css";
import { ReactComponent as ForgotPasswordSideImage } from "../../assets/ForgotPasswordSideImage.svg";

function ForgotPassword() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoSide}>
        <div className={styles.mainInfo}>
          <div className={styles.mainInfoHeader}>Forgot your password?</div>
          <div className={styles.mainInfoDetails}>
            Enter the email address associated with your account, and we'll send
            you a link to reset your password.
          </div>
          <div className={styles.emailSection}>
            <div className={styles.emailSectionHeader}>Email</div>
            <input
              type="text"
              placeholder="Enter your email linked to your account"
            />
          </div>
          <button
            className={styles.resetButton}
            onClick={() => window.open("https://www.google.com", "_blank")}
          >
            Send Reset Link
          </button>
          <div className={styles.loginSection}>
            <div className={styles.loginSectionContext}>
              Log in using another email?{" "}
              <a href="https://www.google.com">Log in here</a>
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
