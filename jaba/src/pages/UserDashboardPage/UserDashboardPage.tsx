import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResourcesFromSearch } from "../../backend/FirestoreCalls";
import { ResourceSearchParam } from "../../types/ResourceObject";
import styles from "./UserDashboardPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import AdminHomeDashboard from "../../assets/adminhomedashboard.png";
import CategorySearch from "./CategorySearch/CategorySearch";
import RegionSearch from "./RegionSearch/RegionSearch";

const UserDashboardPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  // State to handle search params, stored as an object
  const [searchParams, setSearchParams] = useState<ResourceSearchParam>({
    inputField: "",
    primaryCategory: "",
    secondaryCategory: "",
    includeNationalServices: "yes",
    zipCode: "",
    state: "",
    county: "",
    planningDistrict: "",
  });

  const handleSearch = () => {
    setErrorMessage("");
    getResourcesFromSearch(searchParams)
      .then((resources) => {
        if (resources.length > 0) {
          navigate("/searchresults", {
            state: {
              fromApp: true,
              resources: resources,
            },
          });
        } else {
          setErrorMessage("No Resources Match the Search Parameters**");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <NavBar />
      <div className={styles.background}>
        <div className={styles.innerBackground}>
          <div className={styles.topPart}>
            <div className={styles.searchBar}>
              <button className={styles.magnifyingGlassBox}></button>
              <input
                className={styles.textBox}
                type="text"
                value={searchParams.inputField}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    inputField: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.errorMessage}>{errorMessage}</div>
          </div>
          <div className={styles.bottomPart}>
            <div className={styles.screens}>
              <p className={styles.header}>Category</p>
              <CategorySearch
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            </div>
            <div className={styles.middleImageDiv}>
              <img
                className={styles.middleImage}
                alt="middleImage"
                src={AdminHomeDashboard}
              />
              <button className={styles.searchButton} onClick={handleSearch}>
                Search
              </button>
            </div>
            <div className={styles.screens}>
              <p className={styles.header}>Region</p>
              <RegionSearch
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardPage;
