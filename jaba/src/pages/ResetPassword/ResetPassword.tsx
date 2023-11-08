import { useState } from "react";
import styles from "./ResetPassword.module.css";
import { ReactComponent as ResetPasswordSideImage } from "../../assets/ResetPasswordSideImage.svg";
import { UilEye as EyeOpened, UilEyeSlash as EyeClosed } from "@iconscout/react-unicons";

function ResetPassword() {
  const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(true);

  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(true);

  const toggleVisibilityFirstEntry = () => {
    setIsVisibleNewPassword(!isVisibleNewPassword);
  };

  const toggleVisibilitySecondEntry = () => {
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
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
                type={isVisibleNewPassword ? "text" : "password"}
                placeholder="Enter a new password"
              />
              <button
                className={styles.visiblityToggleButton}
                onClick={toggleVisibilityFirstEntry}
              >
                {isVisibleNewPassword ? (
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
                type={isVisibleConfirmPassword ? "text" : "password"}
                placeholder="Re-enter a new password"
              />
              <button
                className={styles.visiblityToggleButton}
                onClick={toggleVisibilitySecondEntry}
              >
                {isVisibleConfirmPassword ? (
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
