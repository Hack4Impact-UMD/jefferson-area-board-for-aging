import { useState } from 'react';
import styles from './CreateUser.module.css';
import './popup.css';
import requestIconSuccess from '../../assets/requestIconSuccess.svg';
import { addUser } from '../../backend/firestoreFunctions';

const CreateUser = () => {
  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    address: '',
    accountType: 'Admin',
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formData.fullname.trim() !== '' 
        && formData.email.trim() !== ''  
        && formData.phone.trim() !== ''
        && formData.organization.trim() !== '' 
        && formData.position.trim() !== ''
        && formData.address.trim() !== ''
        && formData.accountType.trim() !== '') {
      console.log('Form Data:', formData);

      const userData = {
        address: formData.address.trim(),
        admin: formData.accountType === "Admin",
        agency: formData.organization.trim(),
        email: formData.email.trim(),
        name: formData.fullname.trim(),
        phone: formData.phone.trim(),
        title: formData.position.trim()
      }

      addUser(userData)
        .then((addedUser) => {
          console.log('User added:', addedUser);
          alert("Added User ");
        })
        .catch((error) => {
          console.error('Error adding user:', error);
        });

      toggleModal();
    } else {
      alert('Please fill out all required fields.');
    }
  };


  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const resetPage = () => {
    window.location.reload();
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create a New Profile</h1>
      </div>
      <div className={styles.body}>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.fields}>
            <div className={styles.entry} style={{ gridArea: 'fullname' }}>
              <p className={styles.description}>Full name</p>
              <input
                className={styles.inputText}
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={(e) => handleInputChange('fullname', e.target.value)}
              ></input>
            </div>

            <div className={styles.entry} style={{ gridArea: 'email' }}>
              <p className={styles.description}>Email</p>
              <input
                className={styles.inputText}
                placeholder="Enter your email linked to your account"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              ></input>
            </div>

            <div className={styles.entry} style={{ gridArea: 'phone' }}>
              <p className={styles.description}>Phone</p>
              <input
                className={styles.inputText}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              ></input>
            </div>

            <div className={styles.entry} style={{ gridArea: 'organization' }}>
              <p className={styles.description}>Organization</p>
              <input
                className={styles.inputText}
                placeholder="Enter your organization's name"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
              ></input>
            </div>

            <div className={styles.entry} style={{ gridArea: 'position' }}>
              <p className={styles.description}>Position at Organization</p>
              <input
                className={styles.inputText}
                placeholder="Enter your role"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
              ></input>
            </div>

            <div className={styles.entry} style={{ gridArea: 'address' }}>
              <p className={styles.description}>Address</p>
              <input
                className={styles.inputText}
                placeholder="Enter your residential address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              ></input>
            </div>

            <div style={{ gridArea: 'options' }}>
              <div className={styles.accountBtn}>
                <p>Create Account as:</p>
                <div
                  className={`${styles.roundedButton} ${formData.accountType === 'Admin' ? styles.selected : ''}`}
                  onClick={() => handleInputChange('accountType', 'Admin')}
                >
                  Admin
                </div>

                <div
                  className={`${styles.roundedButton} ${formData.accountType === 'User' ? styles.selected : ''}`}
                  onClick={() => handleInputChange('accountType', 'User')}
                >
                  User
                </div>
              </div>
            </div>

            
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.submitButton}>
              Create Profile
            </button>
          </div>
          
        </form>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modalContent">
              <h2>{formData.accountType} profile created successfully!</h2>

              <p className="description">
                Your profile has been created successfully! You can now view and edit the profile in the User Directory
              </p>

              <img src={requestIconSuccess} alt="checkmark" />

              <p>
                <span className="submitted">
                  Create another profile?{' '}
                  <a className="clickHere" onClick={resetPage}>
                    <strong>Click here</strong>
                  </a>
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateUser;