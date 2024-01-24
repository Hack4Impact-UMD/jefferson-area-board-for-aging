import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

interface ConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationProps> = ({ onCancel, onConfirm }) => {
  return (
    <div style={styles.popupContainer}>
      <h2 style={styles.title}>Are you sure?</h2>
      <p style={styles.text}>This will permanently delete the user profile and this change cannot be reversed.</p>
      <div style={styles.buttonContainer}>
        <button style={styles.confirmButton} onClick={onConfirm}>Confirm</button>
        <button style={styles.cancelButton} onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;

const styles: { [key: string]: React.CSSProperties } = {
  popupContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '350px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center'
  },
  title: {
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  text: {
    marginBottom: '20px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px'
  },
  confirmButton: {
    padding: '10px 20px',
    backgroundColor: '#007B7F',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '1px solid #007B7F',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};
