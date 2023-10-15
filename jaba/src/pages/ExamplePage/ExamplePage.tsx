import { getTestObjects, addSampleTestObject } from '../../backend/firestoreFunctions';
import { useState, useEffect } from 'react';
import { TestObject } from '../../models/TestObject';
import styles from './ExamplePage.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const ExamplePage = () => {

    const [testObjects, setTestObjects] = useState<TestObject[]>([]);
    
    useEffect(() => {
      getTestObjects()
        .then((allTestObjects) => {
          setTestObjects(allTestObjects);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }, []);

    const handleClick = () => {
      addSampleTestObject().then((sampleTestObj) => {
        setTestObjects([...testObjects, sampleTestObj]);
        alert("Added Sample Test Object To Backend");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    };

    return (
      <>
        <h1>Displaying Info In testCollection Lakers in 5</h1>
        <p>Click the button!</p>
        <button onClick={handleClick}>Add Test Object</button>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <td className={styles.headerRow}>ID</td>
              <td className={styles.headerRow}>Test Field 1</td>
              <td className={styles.headerRow}>Test Field 2</td>
              <td className={styles.headerRow}>Test Field 3</td>
              <td className={styles.headerRow}>Test Field 4</td>
            </tr>
          </thead>
          <tbody>
            {
              testObjects.map( testObject => {
                return (
                  <tr>
                    <td className={styles.dataRow}>{testObject.id}</td>
                    <td className={styles.dataRow}>{testObject.testField1}</td>
                    <td className={styles.dataRow}>{testObject.testField2}</td>
                    <td className={styles.dataRow}>{testObject.testField3.toString()}</td>
                    <td className={styles.dataRow}>{testObject.testField4}</td>
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
  