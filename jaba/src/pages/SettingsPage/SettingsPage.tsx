import styles from "./SettingsPage.module.css";
import { ReactComponent as EmailImage } from "../../assets/email.svg";
import { ReactComponent as PencilImage } from "../../assets/pencil.svg";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavBar/NavBar";
import { User } from "../../types/User";
import { getAuth } from "firebase/auth";
import { getUserByAuthId } from "../../backend/FirestoreCalls";
import Loading from "../../components/LoadingScreen/Loading";

type Status = {
  loading: boolean;
  error: boolean;
};

const SettingsPage = () => {
  const auth = getAuth();
  const [user, setUser] = useState<User>();
  const [status, setStatus] = useState<Status>({
    loading: true,
    error: false,
  });
  useEffect(() => {
    if (auth.currentUser) {
      getUserByAuthId(auth.currentUser.uid)
        .then((result: User[]) => {
          if (result.length > 0) {
            setUser(result[0]);
            setStatus({ loading: false, error: false });
          } else {
            setStatus({ loading: false, error: true });
          }
        })
        .catch((error) => {
          setStatus({ loading: false, error: true });
        });
    }
  }, [auth]);

  return (
    <>
      <NavigationBar />
      <div className={styles.background}>
        {status.loading ? (
          <Loading />
        ) : status.error ? (
          "Error fetching your data"
        ) : (
          <div className={styles.contentContainer}>
            <div className={styles.header}>Settings</div>
            <div className={styles.profileContainer}>
              <div className={styles.profileHeaderContainer}>
                {/* <button
                className={styles.editButton}
                onClick={() => {
                  window.open("https://www.google.com", "_blank");
                }}
              >
                <PencilImage className={styles.editButton} />
              </button> */}
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Full Name</div>
                <p>{user?.name}</p>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Email</div>
                <input
                  type="email"
                  className="email_input"
                  value="john.adams@org.com"
                />
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Password</div>
                <input type="text" className="tel_input" value="******" />
              </div>
            </div>
            <button className={styles.resetButton}>Delete Account</button>

            {false && (
              <div className={styles.deleteConfirmation}>
                <div className={styles.popupHeader}>Are you sure?</div>
                <div className={styles.popupContent}>
                  To delete your profile, check the email inbox associated with
                  this account. We have sent you a confirmation email containing
                  a verification to continue the profile deletion process.
                </div>
                <EmailImage className={styles.emailImage} />
                <div className={styles.buttonContainer}>
                  <button className={styles.popupButton}>Okay</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SettingsPage;
