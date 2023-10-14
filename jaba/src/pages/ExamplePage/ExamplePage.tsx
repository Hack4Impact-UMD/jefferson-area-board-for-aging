import { getTestUsers, addSampleTestUser } from '../../backend/firestoreFunctions';

import { useState, useEffect } from 'react';
import { TestUser } from '../../models/TestUser';
import styles from './ExamplePage.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const ExamplePage = () => {

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
              <td className={styles.headerRow}>ID</td>
              <td className={styles.headerRow}>Email</td>
              {/*
              <td className={styles.headerRow}>Test Field 2</td>
              <td className={styles.headerRow}>Test Field 3</td>
              <td className={styles.headerRow}>Test Field 4</td>
              */}
            </tr>
          </thead>
          <tbody>
            {
              testUsers.map( testUser => {
                return (
                  <tr>
                    <td className={styles.dataRow}>{testUser.id}</td>
                    <td className={styles.dataRow}>{testUser.email}</td>
                    {/*
                    <td className={styles.dataRow}>{testObject.testField2}</td>
                    <td className={styles.dataRow}>{testObject.testField3.toString()}</td>
                    <td className={styles.dataRow}>{testObject.testField4}</td>
                */}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <Logo/> 
      </>
    );
  }
  
  export default ExamplePage;
  