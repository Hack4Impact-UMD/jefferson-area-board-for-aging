/* eslint-disable react/jsx-pascal-case */
import styles from "./ResetPassword.module.css";
import { ReactComponent as ResetPasswordSideImage } from "../../assets/ResetPasswordSideImage.svg";
import { ReactComponent as EyeClosed } from "../../assets/eye-closed.svg";
import { ReactComponent as EyeOpened } from "../../assets/eye-opened.svg";
import { useState } from "react";

function ResetPassword() {
  const [isVisibleFirstEntry, setIsVisibleFirstEntry] = useState(true);

  const [isVisibleSecondEntry, setIsVisibleSecondEntry] = useState(true);

  const toggleVisibilityFirstEntry = () => {
    setIsVisibleFirstEntry(!isVisibleFirstEntry);
  };

  const toggleVisibilitySecondEntry = () => {
    setIsVisibleSecondEntry(!isVisibleSecondEntry);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoSide}>
        <div className={styles.mainInfo}>
          <div className={styles.mainInfoHeader}>Reset Password</div>
          <div className={styles.mainInfoDetails}>
            We're here to help you get back into your account. Create a new
            password to secure your account and regain access!
          </div>
          <div className={styles.passwordSection}>
            <div className={styles.passwordSectionHeader}>New Password</div>
            <div className={styles.inputContainer}>
              <input
                type={isVisibleFirstEntry ? "text" : "password"}
                placeholder="Enter a new password"
              />
              <button
                className={styles.visibleInput}
                onClick={toggleVisibilityFirstEntry}
              >
                {isVisibleFirstEntry ? (
                  <EyeOpened className={styles.eyeImg} />
                ) : (
                  <EyeClosed className={styles.eyeImg} />
                )}
              </button>
            </div>
          </div>
          <div className={styles.passwordSection}>
            <div className={styles.passwordSectionHeader}>Confirm Password</div>
            <div className={styles.inputContainer}>
              <input
                type={isVisibleSecondEntry ? "text" : "password"}
                placeholder="Re-enter a new password"
              />
              <button
                className={styles.visibleInput}
                onClick={toggleVisibilitySecondEntry}
              >
                {isVisibleSecondEntry ? (
                  <EyeOpened className={styles.eyeImg} />
                ) : (
                  <EyeClosed className={styles.eyeImg} />
                )}
              </button>
            </div>
          </div>
          <button
            className={styles.resetButton}
            onClick={() => window.open("https://www.google.com", "_blank")}
          >
            Reset and Login
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <ResetPasswordSideImage className={styles.svgImage} />
      </div>
    </div>
  );
}

export default ResetPassword;
