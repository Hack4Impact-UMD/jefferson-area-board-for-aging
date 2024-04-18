import { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import { ReactComponent as SignIn } from "../../assets/signin_actual.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  UilEye as EyeOpened,
  UilEyeSlash as EyeClosed,
} from "@iconscout/react-unicons";
import { NavLink, useNavigate } from "react-router-dom";
import { authenticateUser } from "../../backend/AuthFunctions";
import { AuthError } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const [failureMessage, setFailureMessage] = useState<string>("");
  const [loginDetails, setLoginDetails] = useState<{
    email: string;
    pass: string;
  }>({ email: "", pass: "" });

  const handleSignIn = async () => {
    setFailureMessage("");
    if (loginDetails.email != "" && loginDetails.pass != "") {
      authenticateUser(loginDetails.email, loginDetails.pass)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          const code = (error as AuthError).code;
          if (code === "auth/too-many-requests") {
            setFailureMessage(
              "*Access to this account has been temporarily disabled due to many failed login attempts. You can reset your password or try again later."
            );
          } else {
            setFailureMessage("*Incorrect email address or password");
          }
        });
    } else {
      setFailureMessage("*Incorrect email address or password");
    }
  };

  return (
    <>
      <div className={styles.splitScreen}>
        <div className={styles.leftSide}>
          <div className={styles.loginRectangle}>
            <div className={styles.alignWelcome}>
              <p>Welcome!</p>
            </div>
            <div className={styles.loginContainer}>
              <p className={styles.labelProperties}>Email</p>
              <input
                className={styles.textBoxEmail}
                placeholder="Enter your email linked to your account"
                value={loginDetails.email}
                onChange={(event) =>
                  setLoginDetails({
                    ...loginDetails,
                    email: event?.target.value,
                  })
                }
              />
              <p className={styles.labelProperties}>Password</p>
              <div className={styles.passwordContainer}>
                <input
                  className={styles.textBoxPass}
                  type={isVisiblePassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  value={loginDetails.pass}
                  onChange={(event) =>
                    setLoginDetails({
                      ...loginDetails,
                      pass: event?.target.value,
                    })
                  }
                />
                <button
                  className={styles.visiblityToggleButton}
                  onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                >
                  {isVisiblePassword ? (
                    <EyeOpened className={styles.eyeImg} />
                  ) : (
                    <EyeClosed className={styles.eyeImg} />
                  )}
                </button>
              </div>
              {failureMessage != "" ? (
                <div>
                  <p className={styles.errorMessage}>*{failureMessage}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.forgotPassword}>
                <p>
                  <NavLink
                    to="/forgotPassword"
                    className={styles.forgotPassword}
                  >
                    Forgot Password?
                  </NavLink>
                </p>
              </div>
            </div>
            <div className={styles.loginBox}>
              <button
                className={styles.loginButton}
                onClick={(event) => handleSignIn()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <SignIn className={styles.rightImage} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
