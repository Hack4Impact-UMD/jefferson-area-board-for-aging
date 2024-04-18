import {
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import styles from "./EditUser.module.css";
import { useState } from "react";
import { createUser } from "../../../backend/AuthFunctions";
import Loading from "../../../components/LoadingScreen/Loading";
import { User } from "../../../types/User";
import DeleteUser from "./DeleteUser/DeleteUser";
import ChangeRole from "./ChangeRole/ChangeRole";

const EditUser = ({ user, open, handleClose }: any) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openChangeRoleModal, setOpenChangeRoleModal] =
    useState<boolean>(false);

  return (
    <>
      <DeleteUser
        user={user}
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
      />
      <ChangeRole
        user={user}
        open={openChangeRoleModal}
        handleClose={() => setOpenChangeRoleModal(false)}
      />

      <Modal open={open} onClose={handleClose}>
        <Paper className={styles.background}>
          <div className={styles.center}>
            <p className={styles.header}>Edit Existing User</p>

            <Button
              type="submit"
              variant="outlined"
              className={styles.submitButton}
              onClick={() => {
                setOpenChangeRoleModal(true);
                handleClose();
              }}
            >
              Make User an Admin
            </Button>
            <Button
              type="submit"
              variant="outlined"
              className={styles.submitButton}
              onClick={() => {
                setOpenDeleteModal(true);
                handleClose();
              }}
            >
              Delete User
            </Button>
          </div>
        </Paper>
      </Modal>
    </>
  );
};
export default EditUser;
