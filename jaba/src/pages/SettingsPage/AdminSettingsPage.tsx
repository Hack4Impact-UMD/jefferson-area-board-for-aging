import styles from "./AdminSettingsPage.module.css";
import { ReactComponent as PencilImage } from "../../assets/pencil.svg";

const AdminSettingsPage = () => {
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
            <div className="dashboard_container">
              <div className="dashboard_header">Dashboard Settings</div>
              <button
                className={styles.edit_cat_button}
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
            onClick={() => {
              window.open("https://www.google.com", "_blank");
            }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
