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
    <div className={styles.main_container}>
      <div className={styles.info_side}>
        <div className={styles.main_info}>
          <div className={styles.main_info_header}>Reset Password</div>
          <div className={styles.main_info_details}>
            We're here to help you get back into your account. Create a new
            password to secure your account and regain access!
          </div>
          <div className={styles.password_section}>
            <div className={styles.password_section_header}>New Password</div>
            <div className={styles.input_container}>
              <input
                type={isVisibleFirstEntry ? "text" : "password"}
                placeholder="Enter a new password"
              />
              <button
                className={styles.visible_input}
                onClick={toggleVisibilityFirstEntry}
              >
                {isVisibleFirstEntry ? (
                  <EyeOpened className={styles.eye_img} />
                ) : (
                  <EyeClosed className={styles.eye_img} />
                )}
              </button>
            </div>
          </div>
          <div className={styles.password_section}>
            <div className={styles.password_section_header}>
              Confirm Password
            </div>
            <div className={styles.input_container}>
              <input
                type={isVisibleSecondEntry ? "text" : "password"}
                placeholder="Re-enter a new password"
              />
              <button
                className={styles.visible_input}
                onClick={toggleVisibilitySecondEntry}
              >
                {isVisibleSecondEntry ? (
                  <EyeOpened className={styles.eye_img} />
                ) : (
                  <EyeClosed className={styles.eye_img} />
                )}
              </button>
            </div>
          </div>
          <button
            className={styles.reset_button}
            onClick={() => window.open("https://www.google.com", "_blank")}
          >
            Reset and Login
          </button>
        </div>
      </div>
      <div className={styles.image_container}>
        <ResetPasswordSideImage className={styles.svg_image} />
      </div>
    </div>
  );
}

export default ResetPassword;
