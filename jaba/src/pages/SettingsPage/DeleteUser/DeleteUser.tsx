import { Button, Modal, Paper } from "@mui/material";
import styles from "./DeleteUser.module.css";
import { useState } from "react";

import { User } from "../../../types/User";
import { deleteUser } from "../../../backend/AuthFunctions";
import Loading from "../../../components/LoadingScreen/Loading";
import { useAuth } from "../../../auth/AuthProvider";
import { deleteSelf } from "../../../backend/AuthFunctions";

const DeleteUser = ({ open, handleClose }: any) => {
  const auth = useAuth();
  const [status, setStatus] = useState<{
    loading: boolean;
    error: boolean;
    submitted: boolean;
  }>({ loading: false, error: false, submitted: false });
  const handleSubmit = () => {
    setStatus({ ...status, loading: true });
    deleteSelf(auth.user.uid)
      .then(() => {
        setStatus({ loading: false, error: false, submitted: true });
      })
      .catch((error) => {
        setStatus({ loading: false, error: true, submitted: true });
      });
  };
  const handleFullClose = () => {
    if (status.submitted && !status.error) {
      window.location.reload();
    } else {
      setStatus({ loading: false, error: false, submitted: false });
      handleClose();
    }
  };
  return (
    <>
      <Modal open={open} onClose={handleFullClose}>
        <Paper className={styles.background}>
          <div className={styles.center}>
            <p className={styles.header}>Delete User</p>
            {status.submitted ? (
              <p className={styles.text}>
                {status.error
                  ? "Error deleting user. Please try again later."
                  : "Successfully deleted user"}
              </p>
            ) : (
              <p className={styles.text}>
                Are you sure you want to delete your account?
              </p>
            )}

            {status.loading ? (
              <Loading />
            ) : status.submitted ? (
              <></>
            ) : (
              <Button
                type="submit"
                variant="outlined"
                className={styles.submitButton}
                onClick={() => handleSubmit()}
              >
                Delete Account
              </Button>
            )}
          </div>
        </Paper>
      </Modal>
    </>
  );
};
export default DeleteUser;
