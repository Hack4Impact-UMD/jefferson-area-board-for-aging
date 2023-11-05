import { useState } from 'react';
import styles from './RequestAccountPage.module.css';
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
    urgency: 'Regular',
    additionalInfo: '',
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
        && formData.accountType.trim() !== ''
        && formData.urgency.trim() !== '') {
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
    document.body.classList.add('activeModal');
  } else {
    document.body.classList.remove('activeModal');
  }

  return (
    <div className={styles.requestPage}>
      <div className={styles.requestHeader}>
        <h1 className={styles.reqTitle}>Request for Account</h1>

        <div className={styles.headingContainer}>
          <p className={styles.reqText}>
            To request an account, please fill out the form below with your details and requirements. An administrator will review your request and create your account accordingly.
          </p>
        </div>
      </div>
      <div className={styles.requestBody}>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.fields}>
            <div className={styles.reqEntry} style={{ gridArea: 'fullname' }}>
              <p className={styles.reqDescrip}>Full name</p>
              <input
                className={styles.inputText}
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={(e) => handleInputChange('fullname', e.target.value)}
              ></input>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'email' }}>
              <p className={styles.reqDescrip}>Email</p>
              <input
                className={styles.inputText}
                placeholder="Enter your email linked to your account"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              ></input>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'phone' }}>
              <p className={styles.reqDescrip}>Phone</p>
              <input
                className={styles.inputText}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              ></input>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'organization' }}>
              <p className={styles.reqDescrip}>Organization</p>
              <input
                className={styles.inputText}
                placeholder="Enter your organization's name"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
              ></input>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'position' }}>
              <p className={styles.reqDescrip}>Position at Organization</p>
              <input
                className={styles.inputText}
                placeholder="Enter your role"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
              ></input>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'address' }}>
              <p className={styles.reqDescrip}>Address</p>
              <input
                className={styles.inputText}
                placeholder="Enter your residential address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              ></input>
            </div>

            <div className={styles.reqOptions} style={{ gridArea: 'options' }}>
              <div className={styles.accountOptions}>
                <p className={styles.reqDescrip}>Create Account as:</p>
                <div
                  className={
                    `${styles.roundedButton} ${formData.accountType === 'Admin' ? styles.selected : ''}`
                  }
                  onClick={() => handleInputChange('accountType', 'Admin')}
                >
                  Admin
                </div>

                <div
                  className={
                    `${styles.roundedButton} ${formData.accountType === 'User' ? styles.selected : ''}`
                  }
                  onClick={() => handleInputChange('accountType', 'User')}
                >
                  User
                </div>
              </div>
              <div className={styles.priorityOptions}>
                <p className={styles.reqDescrip}>Priority:</p>
                <div
                  className={
                    `${styles.roundedButton} ${formData.urgency === 'Regular' ? styles.selected : ''}`
                  }
                  onClick={() => handleInputChange('urgency', 'Regular')}>
                  Regular
                </div>
                <div
                  className={
                    `${styles.roundedButton} ${formData.urgency === 'Urgent' ? styles.selected : ''}`
                  }
                  onClick={() => handleInputChange('urgency', 'Urgent')}>
                  Urgent
                </div>
              </div>
            </div>

            <div className={styles.reqEntry} style={{ gridArea: 'additional' }}>
              <p className={styles.reqDescrip}>Additional Information</p>
              <textarea
                className={styles.inputTextAdditional}
                placeholder="Use this space to enter any extra information or specific requirements they have for the account."
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
              ></textarea>
            </div>

            <div className={styles.submit} style={{ gridArea: 'submit_btn' }}>
              <button type="submit" className={styles.submitResponse}>
                Submit Request
              </button>
            </div>
          </div>
        </form>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modalContent">
              <h2>Request Submitted Successfully!</h2>

              <p className="description">
                Please allow a few business days for our admin to process your application. Keep an eye on your email for any additional information or questions from our admins.
              </p>

              <img src={requestIconSuccess} alt="checkmark" />

              <p>
                <span className="submitted">
                  Submit another request?{' '}
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