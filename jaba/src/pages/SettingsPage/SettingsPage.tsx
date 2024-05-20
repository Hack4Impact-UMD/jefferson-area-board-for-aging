import styles from "./SettingsPage.module.css";
import { ReactComponent as EmailImage } from "../../assets/email.svg";
import PencilImage from "../../assets/pencil.svg";
import { useEffect, useState } from "react";
import NavigationBar from "../../components/NavBar/NavBar";
import { User } from "../../types/User";
import { getAuth } from "firebase/auth";
import { getUserByAuthId } from "../../backend/FirestoreCalls";
import Loading from "../../components/LoadingScreen/Loading";
import { useAuth } from "../../auth/AuthProvider";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import ChangePassword from "./ChangePassword/ChangePassword";
import DeleteUser from "./DeleteUser/DeleteUser";

type Status = {
  loading: boolean;
  error: boolean;
};

const SettingsPage = () => {
  const auth = useAuth();
  const [user, setUser] = useState<User>();
  const [status, setStatus] = useState<Status>({
    loading: true,
    error: false,
  });
  const [openChangeEmailModal, setOpenChangeEmailModal] =
    useState<boolean>(false);
  const [openChangePasswordModal, setOpenChangePasswordModal] =
    useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    if (auth.user) {
      getUserByAuthId(auth.user.uid)
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
      <ChangeEmail
        open={openChangeEmailModal}
        handleClose={() => setOpenChangeEmailModal(false)}
      />
      <ChangePassword
        open={openChangePasswordModal}
        handleClose={() => setOpenChangePasswordModal(false)}
      />
      <DeleteUser
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
      />

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
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Full Name</div>
                <p className={styles.name}>{user?.name}</p>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Email</div>
                <div className={styles.inputLine}>
                  <input
                    className={styles.input}
                    value={user?.email}
                    disabled
                  />
                  <button
                    className={styles.editButton}
                    onClick={() => {
                      setOpenChangeEmailModal(true);
                    }}
                  >
                    <img src={PencilImage} className={styles.editImage}></img>
                  </button>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Password</div>
                <div className={styles.inputLine}>
                  <input
                    type="text"
                    className={styles.input}
                    value="*********"
                    disabled
                  />
                  <button
                    className={styles.editButton}
                    onClick={() => {
                      setOpenChangePasswordModal(true);
                    }}
                  >
                    <img src={PencilImage} className={styles.editImage}></img>
                  </button>
                </div>
              </div>
              <div className={styles.buttonMargin}>
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    setOpenDeleteModal(true);
                  }}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SettingsPage;
