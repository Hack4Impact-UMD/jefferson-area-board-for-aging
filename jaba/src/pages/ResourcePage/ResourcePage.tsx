import { getResourceObjects } from '../../backend/firestoreFunctions';
import { useState, useEffect } from 'react';
import { Resource } from '../../models/ResourceObject';
import styles from './ResourcePage.module.css';
import { ClipLoader } from 'react-spinners';

const ResourcePage = () => {

    const [resourceObjects, setResourceObjects] = useState<Resource[]>([]);
    console.log(resourceObjects)

    const [loading, setLoading] = useState(false)

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

    const loadResources = () => {
      
      setLoading(true)

      // Set a time delay for querying resources of 1 second
      const loaderDelay = setTimeout(() => setLoading(false), 1000)

      getResourceObjects()
        .then((allResourceObjects) => {
          console.log("Success")
          setResourceObjects(allResourceObjects);
        })
        .catch((error) => {
          console.error(error);
          alert(error);
        })
        .finally(() => {
          if (loading) {
            clearTimeout(loaderDelay)
            setLoading(false)
          }
        });
    };


    return (
      <>
        <h1>Displaying Resource Info</h1>
        <button onClick={loadResources}>Load Resources</button>
        {loading && (<ClipLoader className = "Spin_icon" 
        color = {"#CACACA"} loading ={loading} size = {50}/>)}

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