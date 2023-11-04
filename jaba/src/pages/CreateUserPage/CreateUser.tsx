import { useState } from 'react';
import styles from './CreateUser.module.css';
import './popup.css';
import requestIconSuccess from '../../assets/requestIconSuccess.svg';

const RequestAccountPage = () => {
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
    <div className={styles.requestPage}>
      <div className={styles.requestHeader}>
        <h1 className={styles.reqTitle}>Create a New Profile</h1>
      </div>
      <div className={styles.requestBody}>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.fields}>
            <div className={styles.reqEntry} style={{ gridArea: 'fullname' }}>
              <p className={styles.reqDescrip}>Full name</p>
              <textarea
                className={styles.inputText}
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={(e) => handleInputChange('fullname', e.target.value)}
              ></textarea>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'email' }}>
              <p className={styles.reqDescrip}>Email</p>
              <textarea
                className={styles.inputText}
                placeholder="Enter your email linked to your account"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              ></textarea>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'phone' }}>
              <p className={styles.reqDescrip}>Phone</p>
              <textarea
                className={styles.inputText}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              ></textarea>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'organization' }}>
              <p className={styles.reqDescrip}>Organization</p>
              <textarea
                className={styles.inputText}
                placeholder="Enter your organization's name"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
              ></textarea>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'position' }}>
              <p className={styles.reqDescrip}>Position at Organization</p>
              <textarea
                className={styles.inputText}
                placeholder="Enter your role"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
              ></textarea>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'address' }}>
              <p className={styles.reqDescrip}>Address</p>
              <textarea
                className={styles.inputText}
                placeholder="Enter your residential address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              ></textarea>
            </div>

            <div className={styles.reqOptions} style={{ gridArea: 'options' }}>
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
              <button type="submit" className={styles.submitResponse}>
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

export default RequestAccountPage;