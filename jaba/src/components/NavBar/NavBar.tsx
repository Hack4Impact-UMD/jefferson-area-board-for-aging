import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logOut } from "../../backend/AuthFunctions";
import homeBlack from "../../assets/icons/homeBlack.png";
import homeWhite from "../../assets/icons/homeWhite.png";
import usersBlack from "../../assets/icons/usersBlack.png";
import usersWhite from "../../assets/icons/usersWhite.png";
import settingsBlack from "../../assets/icons/settingsBlack.png";
import settingsWhite from "../../assets/icons/settingsWhite.png";
import jabaLogo from "../../assets/jabaLogo.png";
import styles from "./NavBar.module.css";
import logout from "../../assets/icons/logoutBlack.png";
import pencilBlack from "../../assets/icons/pencilBlack.svg";
import pencilWhite from "../../assets/icons/pencilWhite.svg";

import { useAuth } from "../../auth/AuthProvider";

function NavigationBar() {
  // Add Error Handling
  const auth = useAuth();
  const [submittedError, setSubmittedError] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const handleLogOut = (): void => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.logoContainer}>
        <img src={jabaLogo} alt="JABA Logo" className={styles.logo} />
      </div>
      <div className={styles.menuItems}>
        <div className={styles.tabContainer}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive || location === "/searchresults"
                ? `${styles.tab} ${styles.tabActive}`
                : `${styles.tab} ${styles.tabInActive}`
            }
          >
            <div>
              <img
                className={styles.iconActive}
                src={homeWhite}
                alt="home icon"
              />
              <img
                className={styles.iconInactive}
                src={homeBlack}
                alt="home icon"
              />
            </div>
            Home
          </NavLink>
        </div>
        <div className={styles.tabContainer}>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive
                ? `${styles.tab} ${styles.tabActive}`
                : `${styles.tab} ${styles.tabInActive}`
            }
          >
            <div>
              <img
                className={styles.iconActive}
                src={pencilWhite}
                alt="pencil icon"
              />
              <img
                className={styles.iconInactive}
                src={pencilBlack}
                alt="pencil icon"
              />
            </div>
            Create
          </NavLink>
        </div>
        {auth.token?.claims?.role?.toUpperCase() == "ADMIN" ? (
          <div className={styles.tabContainer}>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? `${styles.tab} ${styles.tabActive}`
                  : `${styles.tab} ${styles.tabInActive}`
              }
            >
              <div>
                <img
                  className={styles.iconActive}
                  src={usersWhite}
                  alt="users icon"
                />
                <img
                  className={styles.iconInactive}
                  src={usersBlack}
                  alt="users icon"
                />
              </div>
              Users
            </NavLink>
          </div>
        ) : (
          <></>
        )}

        <div className={styles.tabContainer}>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? `${styles.tab} ${styles.tabActive}`
                : `${styles.tab} ${styles.tabInActive}`
            }
          >
            <div>
              <img
                className={styles.iconActive}
                src={settingsWhite}
                alt="settings icon"
              />
              <img
                className={styles.iconInactive}
                src={settingsBlack}
                alt="settings icon"
              />
            </div>
            Settings
          </NavLink>
        </div>
      </div>
      <div className={styles.logoutContainer}>
        <button
          onClick={() => {
            logOut();
          }}
          className={styles.menuItem}
        >
          <img src={logout} alt="Logout" />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
