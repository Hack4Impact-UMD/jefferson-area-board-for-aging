import { getResourceObjects, addResource } from '../../backend/firestoreFunctions';
import { useState, useEffect } from 'react';
import { Resource, ServiceType } from '../../models/ResourceObject';
import styles from './ResourcePage.module.css';
import { ClipLoader } from 'react-spinners';

const ResourcePage = () => {
  const [resourceObjects, setResourceObjects] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = () => {
    setLoading(true);

    getResourceObjects()
      .then((allResourceObjects) => {
        setResourceObjects(allResourceObjects);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddResource = () => {
    const name = prompt('Enter name for the resource:');
    const phone = prompt('Enter phone number for the resource:');
    const city = prompt('Enter city for the resource:');
    const state = prompt('Enter state for the resource:');
    const zipInput = prompt('Enter zip code for the resource:');
    
    if (!name || !phone || !city || !state || !zipInput) {
      alert('All fields are required.');
      return;
    }


    const zip = parseInt(zipInput, 10);
    const sampleResourceData = {
      name,
      phone,
      Category: ServiceType.type1,
      city,
      state,
      zip
    };
  
    addResource(sampleResourceData)
      .then((addedResource) => {
        console.log('Resource added:', addedResource);
        alert("Added Sample Test Resource");
        loadResources();
      })
      .catch((error) => {
        console.error('Error adding resource:', error);
      });
  };
  

  return (
    <>
      <h1>Displaying Resource Info</h1>
      <button onClick={loadResources}>Load Resources</button>
      <button onClick={handleAddResource}>Add Sample Resource</button>
      {loading && (
        <ClipLoader className="Spin_icon" color={"#CACACA"} loading={loading} size={50} />
      )}

      <table className={styles.dataTable}>
        <thead>
          <tr>
            <td className={styles.headerRow}>Org name</td>
            <td className={styles.headerRow}>Phone num</td>
            <td className={styles.headerRow}>Service type</td>
          </tr>
        </thead>
        <tbody>
          {resourceObjects.map((resourceObject, index) => {
            return (
              <tr key={index}>
                <td className={styles.dataRow}>{resourceObject.name}</td>
                <td className={styles.dataRow}>{resourceObject.phone}</td>
                <td className={styles.dataRow}>{resourceObject.Category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ResourcePage;
