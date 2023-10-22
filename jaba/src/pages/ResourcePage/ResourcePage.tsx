import { getResourceObjects, addResource } from '../../backend/firestoreFunctions';
import { useState, useEffect } from 'react';
import { Resource, Address, EdCeo, Contact, PrimaryCategory } from '../../models/ResourceObject';
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
    const nameInput = prompt('Enter name for the resource:');
    const phoneInput = prompt('Enter phone number for the resource:');
    const cityInput = prompt('Enter city for the resource:');
    const stateInput = prompt('Enter state for the resource:');
    const zipInput = prompt('Enter zip code for the resource:');
    
    if (!nameInput || !phoneInput || !cityInput || !stateInput || !zipInput) {
      alert('All fields are required.');
      return;
    }

    // zip codes can have a dash....
    // const zip = parseInt(zipInput, 10);
    const sampleResourceData = {
      name: nameInput,
      phone: phoneInput,
      physicalAddress: {
        street: "",
        city: cityInput,
        state: stateInput,
        zip: zipInput},
      // will need to add serviceArea
      category: PrimaryCategory.alzheimersAndDementia,
      lastEdited: "",
      lastEditorName: "",

      // optional fields
      forProfit: false,
      website: "",
      email: "",
      tollFreePhone: "",
      phoneTtyTdd: "",
      mailingAddress: {
        street: "",
        city: "",
        state: "",
        zip: ""
      },
      edCeo: {
        name: "",
        phone: "",
        email: "",
      },
      mainContact: {
        name: "",
        phone: "",
        email: "",
        department: "",
      },
      secondContact: {
        name: "",
        phone: "",
        email: "",
        department: "",
      },
      notes: "",
      office_hours: "",
      application: "",
      community_partner: false,
      relationship_notes: "",
      eligibility_notes: "",
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
                <td className={styles.dataRow}>{resourceObject.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ResourcePage;
