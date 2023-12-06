import styles from "./AdminSettingsPage.module.css";
import { ReactComponent as PencilImage } from "../../assets/pencil.svg";
import {ReactComponent as EmailImage} from "../../assets/email.svg";
import React, { useState } from "react";

const AdminSettingsPage = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteConfirmation(false);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.colorContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>Settings</div>
          <div className={styles.profileContainer}>
            <div className={styles.allInputsContainer}>
              <div className={styles.profileHeaderContainer}>
                <div className={styles.profileHeader}>Profile Settings</div>
                <button
                  className={styles.editButton}
                  onClick={() => {
                    window.open("https://www.google.com", "_blank");
                  }}
                >
                  <PencilImage className={styles.editButton} />
                </button>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Full Name</div>
                <input type="text" className="name_input" value="John Adams" />
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Email</div>
                <input
                  type="email"
                  className="email_input"
                  value="john.adams@org.com"
                />
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Phone</div>
                <input type="tel" className="tel_input" value="202-123-4567" />
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>Residential Address</div>
                <input
                  type="text"
                  className="res_input"
                  value="123 House Rd, City, State, Zip"
                />
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputHeader}>
                  Position at Organization
                </div>
                <input
                  type="text"
                  className="pos_input"
                  value="Assistant Manager"
                />
              </div>
            </div>
            <div className={styles.dashboardContainer}>
              <div className={styles.dashboardHeader}>Dashboard Settings</div>
              <button
                className={styles.editCategoryButton}
                onClick={() => {
                  window.open("https://www.google.com", "_blank");
                }}
              >
                Edit Category
              </button>
              <div className={styles.dashboardInfo}>
                Edit the category options for the dashboard
              </div>
            </div>
          </div>
          <button
            className={styles.resetButton}
            onClick={handleDeleteClick}
          >
            Delete Account
          </button>

      {showDeleteConfirmation && (
        <div className={styles.deleteConfirmation}>
          <div className={styles.popupHeader}>Are you sure?</div>
          <div className={styles.popupContent}>To delete your profile, check the email inbox associated with this account. We have sent you a confirmation email containing a verification to continue the profile deletion process.</div>
          <EmailImage className={styles.emailImage}/>
          <div className={styles.buttonContainer}>
            <button className={styles.popupButton} onClick={handleConfirmDelete}>Okay</button>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
