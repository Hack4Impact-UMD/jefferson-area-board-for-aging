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
      city,
      state,
      zip,
      category: ServiceType.type1,
      last_edited: "",
      last_editor_name: "",
      for_profit: false,
      website: "",
      email: "",
      toll_free_phone: "",
      phone_tty_tdd: "",
      address_pt1: "",
      address_pt2: "",
      mailing_address: "",
      ed_ceo_name: "",
      ed_ceo_phone: "",
      ed_ceo_email: "",
      main_contact_name: "",
      main_contact_phone: "",
      department: "",
      second_contact_name: "",
      second_contact_phone: "",
      notes: "",
      office_hours: "",
      application: "",
      community_partner: false,
      relationship_notes: "",
      eligibility_notes: ""
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
