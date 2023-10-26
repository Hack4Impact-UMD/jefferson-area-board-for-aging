import { getResourceObjects, addResourceObject } from '../../backend/firestoreFunctions';
import { useState, useEffect } from 'react';
import { Resource, Address, EdCeo, Contact} from '../../models/ResourceObject';
import styles from './ResourcePage.module.css';
import { ClipLoader } from 'react-spinners';
import { serverTimestamp } from 'firebase/firestore';


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
    const primaryCategoryInput = prompt('Enter primary category for the resource:');
    const subCategoryInput = prompt('Enter sub category for the resource:');
    
    if (!nameInput || !phoneInput || !cityInput || !stateInput || !zipInput || !primaryCategoryInput || !subCategoryInput) {
      alert('All fields are required.');
      return;
    }

    const sampleResourceData = {
      name: nameInput,
      phone: phoneInput,
      physicalAddress: {
        street: "",
        city: cityInput,
        state: stateInput,
        zip: zipInput},
      // will need to add serviceArea
      primaryCategory: primaryCategoryInput,
      subCategory: subCategoryInput,
      lastEdited: serverTimestamp(),
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
      officeHours: "",
      application: "",
      communityPartner: false,
      relationshipNotes: "",
      eligibilityNotes: "",
    };
  
    addResourceObject(sampleResourceData)
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
            <td className={styles.headerRow}>Physical Address</td>
            <td className={styles.headerRow}>Primary category</td>
            <td className={styles.headerRow}>Sub category</td>
          </tr>
        </thead>
        <tbody>
          {resourceObjects.map((resourceObject, index) => {
            return (
              <tr key={index}>
                <td className={styles.dataRow}>{resourceObject.name}</td>
                <td className={styles.dataRow}>{resourceObject.phone}</td>
                <td className={styles.dataRow}>{resourceObject.physicalAddress.city}, {resourceObject.physicalAddress.state}, {resourceObject.physicalAddress.zip}</td>
                <td className={styles.dataRow}>{resourceObject.primaryCategory}</td>
                <td className={styles.dataRow}>{resourceObject.subCategory}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ResourcePage;
