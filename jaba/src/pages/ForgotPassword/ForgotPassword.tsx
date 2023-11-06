import styles from "./ForgotPassword.module.css";
import { ReactComponent as ForgotPasswordSideImage } from "../../assets/ForgotPasswordSideImage.svg";

function ForgotPassword() {
  return (
    <div className={styles.main_container}>
      <div className={styles.info_side}>
        <div className={styles.main_info}>
          <div className={styles.main_info_header}>Forgot your password?</div>
          <div className={styles.main_info_details}>
            Enter the email address associated with your account, and we'll send
            you a link to reset your password.
          </div>
          <div className={styles.email_section}>
            <div className={styles.email_section_header}>Email</div>
            <input
              type="text"
              placeholder="Enter your email linked to your account"
            />
          </div>
          <button
            onClick={() => window.open("https://www.google.com", "_blank")}
          >
            Send Reset Link
          </button>
          <div className={styles.login_section}>
            <div className={styles.login_section_context}>
              Log in using another email?{" "}
              <a href="https://www.google.com">Log in here</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <ForgotPasswordSideImage className={styles.svg_image} />
      </div>
    </div>
  );
}

export default ForgotPassword;
