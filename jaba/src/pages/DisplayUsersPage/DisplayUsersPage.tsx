import { getTestUsers, addSampleTestUser } from '../../backend/firestoreFunctions';

import { useState, useEffect } from 'react';
import { TestUser } from '../../models/TestUser';
import styles from './DisplayUsersPage.module.css';

const DisplayUsersPage = () => {

    const [testUsers, setTestUsers] = useState<TestUser[]>([]);

    useEffect(() => {
      getTestUsers()
        .then((allTestUsers) => {
          setTestUsers(allTestUsers);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }, []);

    const handleClick = () => {
      addSampleTestUser().then((sampleTestUser) => {
        setTestUsers([...testUsers, sampleTestUser]);
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
        <button onClick={handleClick}>Add Test User</button>
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
              testUsers.map( testUser => {
                return (
                  <tr>
                    <td className={styles.dataRow}>{testUser.id}</td>
                    <td className={styles.dataRow}>{testUser.title}</td>
                    <td className={styles.dataRow}>{testUser.address}</td>
                    <td className={styles.dataRow}>{testUser.phone}</td>
                    <td className={styles.dataRow}>{testUser.email}</td>
                    <td className={styles.dataRow}>{testUser.agency}</td>
                    <td className={styles.dataRow}>{testUser.admin}</td>
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
  