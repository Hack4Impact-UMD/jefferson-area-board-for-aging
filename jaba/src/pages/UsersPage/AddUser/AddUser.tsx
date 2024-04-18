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
import styles from "./AddUser.module.css";
import { useState } from "react";
import { createUser } from "../../../backend/AuthFunctions";
import Loading from "../../../components/LoadingScreen/Loading";

type Fields = {
  name: string;
  email: string;
  role: string;
};
type Status = {
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

const AddUser = ({ open, handleClose }: any) => {
  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
  };
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    role: "USER",
  });
  const [status, setStatus] = useState<Status>({
    loading: false,
    error: false,
    errorMessage: "",
  });

  const handleSubmit = () => {
    setStatus({ ...status, loading: true });
    createUser(fields.name, fields.email, fields.role.toUpperCase())
      .then(() => setStatus({ ...status, loading: true, errorMessage: "none" }))
      .catch((error) => {
        setStatus({ error: true, errorMessage: error.message, loading: false });
      });
  };
  const handleFullClose = () => {
    setFields({
      name: "",
      email: "",
      role: "USER",
    });
    setStatus({ loading: false, error: false, errorMessage: "" });
    handleClose();
    if (!status.error && status.errorMessage == "none") {
      window.location.reload();
    }
  };
  return (
    <>
      <Modal open={open} onClose={handleFullClose}>
        <Paper className={styles.background}>
          {status.error ? (
            <div className={styles.center}>{status.errorMessage}</div>
          ) : status.errorMessage == "none" ? (
            <div className={styles.center}>User created successfully</div>
          ) : (
            <>
              <p className={styles.header}>Create New User</p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
                className={styles.form}
              >
                <TextField
                  required
                  label="Name"
                  placeholder="Enter Name"
                  value={fields.name}
                  onChange={(event) => {
                    setFields({ ...fields, name: event.target.value });
                  }}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    style,
                  }}
                  className={styles.muInput}
                />
                <TextField
                  required
                  label="Email"
                  placeholder="Enter Email"
                  type="email"
                  value={fields.email}
                  onChange={(event) => {
                    setFields({ ...fields, email: event.target.value });
                  }}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    style,
                  }}
                  className={styles.muiInput}
                />
                <Select
                  value={fields.role}
                  onChange={(event) => {
                    setFields({ ...fields, role: event.target.value });
                  }}
                  sx={{
                    width: "150px",
                    "& .MuiSelect-select": {
                      paddingRight: 4,
                      paddingLeft: 2,
                      paddingTop: 1,
                      paddingBottom: 1,
                      textAlign: "center",
                    },
                  }}
                  className={styles.select}
                >
                  <MenuItem value={"USER"}>User</MenuItem>
                  <MenuItem value={"ADMIN"}>Admin</MenuItem>
                </Select>
                {status.loading ? (
                  <Loading />
                ) : (
                  <Button
                    type="submit"
                    variant="outlined"
                    className={styles.submitButton}
                  >
                    Submit
                  </Button>
                )}
              </form>
            </>
          )}
        </Paper>
      </Modal>
    </>
  );
};
export default AddUser;
