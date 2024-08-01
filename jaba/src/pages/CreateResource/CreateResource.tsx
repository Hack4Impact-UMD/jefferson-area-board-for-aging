import EditIcon from "@mui/icons-material/Edit";
import { Snackbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { unstable_usePrompt, useLocation } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import { useAuth } from "../../auth/AuthProvider";
import {
  addResourceObject,
  updateResourceObject,
} from "../../backend/FirestoreCalls";
import Loading from "../../components/LoadingScreen/Loading";
import NavigationBar from "../../components/NavBar/NavBar";
import { Resource, ResourceData } from "../../types/ResourceObject";
import styles from "./CreateResource.module.css";
import FirstPage from "./FirstPage/FirstPage";
import FourthPage from "./FourthPage/FourthPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";

const CreateResource = () => {
  const location = useLocation();
  const [givenMode, setGivenMode] = useState<string>("ADD");
  const initialResource = {
    name: "",
    description: "",
    npo: true,
    mainPhone: "",
    impairedPhone: "",
    email: "",
    website: "",
    physicalAddress: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    mailingAddress: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    nationalResource: false,
    zips: [],
    planningDistricts: [],
    states: {},
    primaryCategory: "",
    subCategory: "",
    edCeo: {
      name: "",
      phone: "",
      email: "",
      department: "",
    },
    officeHours: "",
    communityPartner: true,
    relationshipNotes: "",
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
    applicationNotes: "",
    eligibilityNotes: "",
    otherNotes: "",
    lastEditTime: new Date(),
    lastEditUser: "",
    creationDate: new Date(),
  };
  const [resource, setResource] = useState<ResourceData>(initialResource);

  useEffect(() => {
    if (location.state?.fromApp && location.state.resource) {
      setResource(location.state.resource);
      setGivenMode("VIEW");
    }
  }, []);

  const auth = useAuth();
  const firstFormRef = useRef<HTMLFormElement>(null);
  const secondFormRef = useRef<HTMLFormElement>(null);
  const thirdFormRef = useRef<HTMLFormElement>(null);

  /* 
    Prompts user to make sure their work is saved before.
    Only works if the user clicks a link in the Navbar. 
    On reload or on tab close events should be covered by
    default browser behavior, but if they stop working,
    try the "beforeunload" event found here:
    https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
  */

  unstable_usePrompt({
    when: true,
    message:
      "Are you sure you want to leave this page? Any unsaved data will be lost.",
  });

  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
  };

  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const handlePageTurn = (toAdd: number) => {
    let currentForm = firstFormRef;
    switch (page) {
      case 2:
        currentForm = secondFormRef;
        break;
      case 3:
        currentForm = thirdFormRef;
        break;
    }

    if (currentForm?.current?.reportValidity() || toAdd == -1) {
      setPage(page + toAdd);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    let primaryFunction = () => addResourceObject(resource, auth.user.uid);
    if (givenMode === "EDIT") {
      const resourceID = resource as Resource;
      primaryFunction = () => updateResourceObject(resourceID, auth.user.uid);
    }
    const objective = givenMode === "EDIT" ? "Update" : "Create";
    primaryFunction()
      .then(() => {
        setSnackbarMessage(`Resource ${objective}d Successfully`);
        setSnackbar(true);
        setResource(initialResource);
        setGivenMode("ADD");
        setPage(1);
        window.history.replaceState({}, "");
      })
      .catch((e) => {
        setSnackbarMessage(`Failed to ${objective} resource.`);
        setSnackbar(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbar}
        autoHideDuration={6000}
        onClose={() => setSnackbar(false)}
        message={snackbarMessage}
      />
      <NavigationBar />
      <div className={styles.background}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <p className={styles.headerText}>
              {" "}
              {givenMode == "ADD"
                ? "Add New "
                : givenMode == "EDIT"
                ? "Edit "
                : "View "}
              Resource
            </p>
            {givenMode == "VIEW" ? (
              <EditIcon
                className={styles.editIcon}
                onClick={() => setGivenMode("EDIT")}
              />
            ) : (
              <></>
            )}
          </div>

          <div className={styles.profileContainer}>
            <>
              {page == 1 ? (
                <FirstPage
                  resource={resource}
                  setResource={setResource}
                  formReference={firstFormRef}
                  givenMode={givenMode}
                />
              ) : page == 2 ? (
                <SecondPage
                  resource={resource}
                  setResource={setResource}
                  formReference={secondFormRef}
                  givenMode={givenMode}
                />
              ) : page == 3 ? (
                <ThirdPage
                  resource={resource}
                  setResource={setResource}
                  formReference={thirdFormRef}
                  givenMode={givenMode}
                />
              ) : (
                <FourthPage
                  resource={resource}
                  setResource={setResource}
                  givenMode={givenMode}
                />
              )}
            </>
          </div>
          <div className={styles.footer}>
            <div className={styles.numberHolder}>
              {page != 1 ? (
                <button
                  className={styles.arrowButton}
                  onClick={() => handlePageTurn(-1)}
                  type="submit"
                >
                  <img
                    src={leftArrow}
                    className={styles.arrowImage}
                    alt="Left Arrow Button"
                  ></img>
                </button>
              ) : (
                <div className={styles.buttonFiller}>&nbsp;</div>
              )}
              <p
                className={
                  page != 1
                    ? `${styles.footerNumber} ${styles.footerNumberSurpressed}`
                    : `${styles.footerNumber}`
                }
              >
                1
              </p>
              <p
                className={
                  page != 2
                    ? `${styles.footerNumber} ${styles.footerNumberSurpressed}`
                    : `${styles.footerNumber}`
                }
              >
                2
              </p>
              <p
                className={
                  page != 3
                    ? `${styles.footerNumber} ${styles.footerNumberSurpressed}`
                    : `${styles.footerNumber}`
                }
              >
                3
              </p>
              <p
                className={
                  page != 4
                    ? `${styles.footerNumber} ${styles.footerNumberSurpressed}`
                    : `${styles.footerNumber}`
                }
              >
                4
              </p>
              {page != 4 ? (
                <button
                  className={styles.arrowButton}
                  onClick={() => handlePageTurn(1)}
                  type="submit"
                >
                  <img
                    src={rightArrow}
                    className={styles.arrowImage}
                    alt="Right Arrow Button"
                  ></img>
                </button>
              ) : (
                <div className={styles.buttonFiller}>&nbsp;</div>
              )}
            </div>
            {page == 4 && givenMode != "VIEW" ? (
              <div className={styles.createButtonHolder}>
                <button
                  className={styles.createButton}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <Loading />
                  ) : givenMode === "EDIT" ? (
                    "Update Resource"
                  ) : (
                    "Create Resource"
                  )}
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResource;
