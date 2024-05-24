import { useState, useEffect } from "react";
import styles from "./UserDashboardPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import AdminHomeDashboard from "../../assets/adminhomedashboard.png";
import CategorySearch from "./CategorySearch/CategorySearch";
import RegionSearch from "./RegionSearch/RegionSearch";

const UserDashboardPage = () => {
  const isAdmin = true;
  const props = { isAdmin };

  // State to handle search params, stored as an object
  const [searchParams, setSearchParams] = useState<{
    inputField: string;
    primaryCategory: string;
    secondaryCategory: string;
    includeNationalServices: string;
    zipCode: string;
    state: string;
    county: string;
    planningDistrict: string;
  }>({
    inputField: "",
    primaryCategory: "",
    secondaryCategory: "",
    includeNationalServices: "yes",
    zipCode: "",
    state: "",
    county: "",
    planningDistrict: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const queryName = query(collection(db, 'resources'), or(where('name', '==', inputText), where('physicalAddress.zip', '==', inputText), where('primaryCategory', '==', inputText)));

  //       const snapshot = await getDocs(queryName);

  //       const data: Resource[] = snapshot.docs.map(doc => ({
  //         name: doc.data().name,
  //         zip: doc.data().physicalAddress.zip,
  //         primaryCategory: doc.data().primaryCategory,
  //       })) as Resource[];

  //       setResults(data);
  //       console.log('Search results:', data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [inputText]);

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
              <button className={styles.searchButton}>Search</button>
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
