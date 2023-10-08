import { getTestObjects, addSampleTestObject, getResourceObjects } from '../../backend/firestoreFunctions';
import { useState, useEffect } from 'react';
import { Resource } from '../../models/ResourceObject';
import styles from './ResourcePage.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const ResourcePage = () => {
    // console.log("Benpoopeepee")

    const [resourceObjects, setResourceObjects] = useState<Resource[]>([]);
    console.log(resourceObjects)

    useEffect(() => {
        getResourceObjects()
          .then((allResourceObjects) => {
            setResourceObjects(allResourceObjects);
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
      }, []);

      return (
        <>
          <h1>Displaying Resource Info</h1>
          {/* <p>Click the button!</p> */}
          {/* <button onClick={handleClick}>Add Test Object</button> */}
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <td className={styles.headerRow}>Org name</td>
                <td className={styles.headerRow}>Phone num</td>
                <td className={styles.headerRow}>Service type</td>
              </tr>
            </thead>
            <tbody>
              {
                resourceObjects.map( resourceObject => {
                  return (
                    <tr>
                      <td className={styles.dataRow}>{resourceObject.name}</td>
                      <td className={styles.dataRow}>{resourceObject.phone}</td>
                      <td className={styles.dataRow}>{resourceObject.Category}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </>
      );
}

export default ResourcePage