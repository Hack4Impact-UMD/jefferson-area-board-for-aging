import {
  IconButton,
  InputAdornment,
  Modal,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavigationBar from "../../components/NavBar/NavBar";
import styles from "./UsersPage.module.css";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { getUsers } from "../../backend/FirestoreCalls";
import Loading from "../../components/LoadingScreen/Loading";
import magnifyingGlass from "../../assets/magnifying-glass.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddUser from "./AddUser/AddUser";
import EditUser from "./EditUser/EditUser";

type Status = {
  loading: boolean;
  error: boolean;
};

const UsersPage = () => {
  const [userList, setUserList] = useState<User[]>();
  const [status, setStatus] = useState<Status>({
    loading: true,
    error: false,
  });
  const [search, setSearch] = useState<string>("");
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<{
    user: User | null;
    open: boolean;
  }>({ user: null, open: false });

  useEffect(() => {
    setStatus({ ...status, loading: true });
    getUsers()
      .then((data) => {
        setUserList(data);
        setStatus({ loading: false, error: false });
      })
      .catch((error) => {
        setStatus({ loading: false, error: true });
      });
  }, []);
  return (
    <>
      <AddUser open={openAddModal} handleClose={() => setOpenAddModal(false)} />
      <EditUser
        user={openEditModal.user}
        open={openEditModal.open}
        handleClose={() => setOpenEditModal({ ...openEditModal, open: false })}
      />
      <NavigationBar />
      <div className={styles.background}>
        {status.loading ? (
          <Loading />
        ) : status.error ? (
          <>Error fetching user data. Please try again later.</>
        ) : (
          <>
            <Paper className={styles.muiBackground}>
              <p className={styles.title}>Existing Users</p>
              <div className={styles.secondRow}>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <img src={magnifyingGlass}></img>
                    </InputAdornment>
                  }
                  className={styles.searchBar}
                  sx={{
                    borderRadius: "20px",
                  }}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    console.log(userList);
                  }}
                />
                <IconButton
                  aria-label="add user"
                  size="medium"
                  onClick={() => setOpenAddModal(true)}
                >
                  <AddCircleIcon fontSize="inherit" sx={{ color: "blue" }} />
                </IconButton>
              </div>

              <TableContainer
                component={Paper}
                className={styles.tableContainer}
              >
                <Table className={styles.table} size="small" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "white",
                          width: "200px",
                          backgroundColor: "#013b46",
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          width: "400px",
                          backgroundColor: "#013b46",
                        }}
                      >
                        Email
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          width: "100px",
                          backgroundColor: "#013b46",
                        }}
                      >
                        Role
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userList!.map((row) =>
                      row.name!.toLowerCase().indexOf(search.toLowerCase()) >
                      -1 ? (
                        <TableRow
                          key={row.email}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            height: "30px !important",
                            "&:hover": {
                              cursor: "pointer",
                              backgroundColor: "#D3D3D3",
                            },
                          }}
                          onClick={() => {
                            if (row.role == "USER") {
                              setOpenEditModal({ user: row, open: true });
                            }
                          }}
                        >
                          <TableCell>{row.name.slice(0, 24)}</TableCell>
                          <TableCell>{row.email.slice(0, 48)}</TableCell>
                          <TableCell>{row.role}</TableCell>
                        </TableRow>
                      ) : (
                        <></>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </>
        )}
      </div>
    </>
  );
};

export default UsersPage;
