import styles from "./CreateResource.module.css";
import NavigationBar from "../../components/NavBar/NavBar";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import { Input, TextField } from "@mui/material";
import { useRef, useState } from "react";
import Categories from "../../constants/categories";
import { Resource, ResourceData } from "../../types/ResourceObject";
import FirstPage from "./FirstPage/FirstPage";
import { ref } from "firebase/storage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";

const CreateResource = () => {
  const firstFormRef = useRef<HTMLFormElement>(null);
  const secondFormRef = useRef<HTMLFormElement>(null);
  const thirdFormRef = useRef<HTMLFormElement>(null);
  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
  };
  const [page, setPage] = useState<number>(1);
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
    nationalResource: true,
    planningDistricts: [],
    states: [],
    primaryCategory: "",
    subCategory: "",
  });
  const handlePageTurn = (toAdd: number) => {
    let currentForm = firstFormRef;
    if (page == 2) {
      currentForm = secondFormRef;
    }
    if (page == 3) {
      currentForm = thirdFormRef;
    }
    if (currentForm.current?.reportValidity()) {
      setPage(page + toAdd);
    }
  };
  //   console.log(Object.keys(Categories));
  //   console.log(Categories["Long Term Care"]);
  return (
    <>
      <NavigationBar />
      <div className={styles.background}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>Add New Resource</div>
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
              ) : (
                <ThirdPage
                  resource={resource}
                  setResource={setResource}
                  formReference={thirdFormRef}
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
              {page != 3 ? (
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
            {page == 3 ? (
              <div className={styles.createButtonHolder}>
                <button className={styles.createButton}>Create Resource</button>
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
