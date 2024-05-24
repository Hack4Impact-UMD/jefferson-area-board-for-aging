import { Snackbar } from "@mui/material";
import { useRef, useState } from "react";
import { unstable_usePrompt } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import { useAuth } from "../../auth/AuthProvider";
import { addResourceObject } from "../../backend/FirestoreCalls";
import Loading from "../../components/LoadingScreen/Loading";
import NavigationBar from "../../components/NavBar/NavBar";
import { ResourceData } from "../../types/ResourceObject";
import styles from "./CreateResource.module.css";
import FirstPage from "./FirstPage/FirstPage";
import FourthPage from "./FourthPage/FourthPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";

const CreateResource = () => {
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

  const [resource, setResource] = useState<ResourceData>({
    name: "",
    npo: true,
    mainPhone: "",
    impairedPhone: "",
    email: "",
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
  });
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
    addResourceObject(resource, auth.user.uid)
      .then(() => {
        setSnackbarMessage("Resource Created Successfully");
        setSnackbar(true);
      })
      .catch((e) => {
        setSnackbarMessage("Failed to create resource.");
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
            {!(snackbarMessage == "Resource Created Successfully")
              ? "Add New Resource"
              : "Resource Created"}
          </div>
          {!(snackbarMessage == "Resource Created Successfully") ? (
            <>
              <div className={styles.profileContainer}>
                <>
                  {page == 1 ? (
                    <FirstPage
                      resource={resource}
                      setResource={setResource}
                      formReference={firstFormRef}
                    />
                  ) : page == 2 ? (
                    <SecondPage
                      resource={resource}
                      setResource={setResource}
                      formReference={secondFormRef}
                    />
                  ) : page == 3 ? (
                    <ThirdPage
                      resource={resource}
                      setResource={setResource}
                      formReference={thirdFormRef}
                    />
                  ) : (
                    <FourthPage resource={resource} setResource={setResource} />
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
                {page == 4 ? (
                  <div className={styles.createButtonHolder}>
                    <button
                      className={styles.createButton}
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? <Loading /> : "Create Resource"}
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateResource;
