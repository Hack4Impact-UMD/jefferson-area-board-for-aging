import { getUsers, addSampleUser } from '../../backend/firestoreFunctions';

import { useState, useEffect } from 'react';
import { User } from '../../models/User';
import styles from './DisplayUsersPage.module.css';

const DisplayUsersPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
      getUsers()
        .then((allUsers) => {
          setUsers(allUsers);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }, []);

    const handleClick = () => {
      addSampleUser().then((sampleUser) => {
        setUsers([...users, sampleUser]);
        alert("Added Sample Test User To Backend");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    };

    return (
      <>
        <h1>Displaying Normal User Data</h1>
        <p>Click the button!</p>
        <button onClick={handleClick}>Add User</button>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <td className={styles.headerRow}>Name</td>
              <td className={styles.headerRow}>Title</td>
              <td className={styles.headerRow}>Address</td>
              <td className={styles.headerRow}>Phone</td>
              <td className={styles.headerRow}>Email</td>
              <td className={styles.headerRow}>Agency</td>
              <td className={styles.headerRow}>Is Admin</td>
            </tr>
          </thead>
          <tbody>
            {
              users.map( user => {
                return (
                  <tr>
                    <td className={styles.dataRow}>{user.id}</td>
                    <td className={styles.dataRow}>{user.title}</td>
                    <td className={styles.dataRow}>{user.address}</td>
                    <td className={styles.dataRow}>{user.phone}</td>
                    <td className={styles.dataRow}>{user.email}</td>
                    <td className={styles.dataRow}>{user.agency}</td>
                    <td className={styles.dataRow}>{user.admin}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    );
  }
  
  export default DisplayUsersPage;
  