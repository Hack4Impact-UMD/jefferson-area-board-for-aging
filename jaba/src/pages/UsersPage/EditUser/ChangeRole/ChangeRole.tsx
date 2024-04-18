import { Button, Modal, Paper } from "@mui/material";
import styles from "./ChangeRole.module.css";
import { useState } from "react";

import { setUserRole } from "../../../../backend/AuthFunctions";
import Loading from "../../../../components/LoadingScreen/Loading";

const ChangeRole = ({ user, open, handleClose }: any) => {
  const [status, setStatus] = useState<{
    loading: boolean;
    error: boolean;
    submitted: boolean;
  }>({ loading: false, error: false, submitted: false });
  const handleSubmit = () => {
    setStatus({ ...status, loading: true });
    setUserRole(user.auth_id, "ADMIN")
      .then(() => {
        console.log(status);
        setStatus({ loading: false, error: false, submitted: true });
        console.log(status);
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
            <p className={styles.header}>Edit Existing User</p>
            {status.submitted ? (
              <p className={styles.text}>
                {status.error
                  ? "Error promoting user. Please try again later."
                  : "Successfully promoted user"}
              </p>
            ) : (
              <p className={styles.text}>
                Are you sure you want to promote the user with the email&nbsp;
                {user?.email} to an admin?
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
                Promote User
              </Button>
            )}
          </div>
        </Paper>
      </Modal>
    </>
  );
};
export default ChangeRole;
