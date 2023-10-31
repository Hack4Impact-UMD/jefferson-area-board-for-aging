import { useState } from 'react';
import './CreateUser.css';
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
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className="request-page">
      <div className="request-header">
        <h1 className="req-title">Request for Account</h1>

        <div id="format-header" className="heading-container">
          <p className="req-text">
            To request an account, please fill out the form below with your details and requirements. An administrator will review your request and create your account accordingly.
          </p>
        </div>
      </div>
      <div className="request-body">
        <form onSubmit={handleFormSubmit}>
          <div className="fields">
            <div className="req-entry" style={{ gridArea: 'fullname' }}>
              <p className="req-descrip">Full name</p>
              <textarea
                className="input-text"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={(e) => handleInputChange('fullname', e.target.value)}
              ></textarea>
            </div>

            <div className="req-entry" style={{ gridArea: 'email' }}>
              <p className="req-descrip">Email</p>
              <textarea
                className="input-text"
                placeholder="Enter your email linked to your account"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              ></textarea>
            </div>

            <div className="req-entry" style={{ gridArea: 'phone' }}>
              <p className="req-descrip">Phone</p>
              <textarea
                className="input-text"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              ></textarea>
            </div>

            <div className="req-entry" style={{ gridArea: 'organization' }}>
              <p className="req-descrip">Organization</p>
              <textarea
                className="input-text"
                placeholder="Enter your organization's name"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
              ></textarea>
            </div>

            <div className="req-entry" style={{ gridArea: 'position' }}>
              <p className="req-descrip">Position at Organization</p>
              <textarea
                className="input-text"
                placeholder="Enter your role"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
              ></textarea>
            </div>

            <div className="req-entry" style={{ gridArea: 'address' }}>
              <p className="req-descrip">Address</p>
              <textarea
                className="input-text"
                placeholder="Enter your residential address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              ></textarea>
            </div>

            <div className="req-options" style={{ gridArea: 'options' }}>
              <div className="account-btn">
                <p>Create Account as:</p>
                <div
                  className={`rounded-button ${formData.accountType === 'Admin' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('accountType', 'Admin')}
                >
                  Admin
                </div>

                <div
                  className={`rounded-button ${formData.accountType === 'User' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('accountType', 'User')}
                >
                  User
                </div>
              </div>
              <div className="priority-options">
                <p>Priority:</p>
                <div
                  className={`rounded-button ${formData.urgency === 'Regular' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('urgency', 'Regular')}>
                  Regular
                </div>
                <div
                  className={`rounded-button ${formData.urgency === 'Urgent' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('urgency', 'Urgent')}>
                  Urgent
                </div>
              </div>
            </div>

            <div className="req-entry" style={{ gridArea: 'additional' }}>
              <p className="priority-options">Additional Information</p>
              <textarea
                className="input-text"
                placeholder="Use this space to enter any extra information or specific requirements they have for the account."
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
              ></textarea>
            </div>

            <div className="submit" style={{ gridArea: 'submit_btn' }}>
              <button type="submit" className="submit-response">
                Submit Request
              </button>
            </div>
          </div>
        </form>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>{formData.accountType} profile created successfully!</h2>

              <p className="description">
                Your profile has been created successfully! You can now view and edit the profile in the User Directory
              </p>

              <img src={requestIconSuccess} alt="checkmark" />

              <p>
                <span className="submitted">
                  Create another profile?{' '}
                  <a className="click-here" onClick={resetPage}>
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