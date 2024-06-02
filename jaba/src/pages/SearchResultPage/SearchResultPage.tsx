import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import print from "../../assets/print.svg";
import Loading from "../../components/LoadingScreen/Loading";
import NavBar from "../../components/NavBar/NavBar";
import { ResourceData } from "../../types/ResourceObject";
import styles from "./SearchResultPage.module.css";

const headerCellStyle = {
  color: "white",
  fontFamily: "DM Serif Text, serif",
  fontSize: "1.1rem",
};

const SearchResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState<Boolean>(true);
  const [resources, setResources] = useState<ResourceData[]>([]);
  const [selectedResources, setSelectedResources] = useState<ResourceData[]>(
    []
  );
  const [page, setPage] = useState<number>(1);
  const rowsPerPage = 4;
  let totalPages = Math.ceil(resources.length / rowsPerPage);

  const handlePageTurn = (direction: number) => {
    setPage((prevPage) => prevPage + direction);
  };

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    resource: ResourceData
  ) => {
    // if checkbox is checked, add to list, else remove
    if (e.target.checked) {
      setSelectedResources([...selectedResources, resource]);
    } else {
      const newSelectedResources: ResourceData[] = [];
      selectedResources.forEach((selectedResource) => {
        if (resource != selectedResource)
          newSelectedResources.push(selectedResource);
      });
      setSelectedResources(newSelectedResources);
    }
  };

  useEffect(() => {
    // Get data from navigation state, otherwise navigate to home page
    if (location.state?.fromApp && location.state.resources) {
      setResources(location.state.resources);
      setLoading(false);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.background}>
        <div className={styles.innerBackground}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div
                className={styles.backButtonContainer}
                onClick={() => navigate("/")}
              >
                <img
                  src={leftArrow}
                  className={styles.arrowImage}
                  alt="Left Arrow Button"
                />
                &nbsp;Back
              </div>
              <div className={styles.tableContainer}>
                <TableContainer sx={{ borderRadius: "10px" }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "#023c47" }}>
                        <TableCell sx={headerCellStyle}></TableCell>
                        <TableCell sx={headerCellStyle}>Resource</TableCell>
                        <TableCell sx={headerCellStyle}>Address</TableCell>
                        <TableCell sx={headerCellStyle}>Contact</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {resources
                        .slice(
                          (page - 1) * rowsPerPage,
                          (page - 1) * rowsPerPage + rowsPerPage
                        )
                        .map((resource, index) => (
                          <TableRow key={index} className={styles.tableRow}>
                            <TableCell>
                              <input
                                type="checkbox"
                                onChange={(e) => handleCheckbox(e, resource)}
                                className={styles.resourceCheckbox}
                              />
                            </TableCell>
                            <TableCell>{resource.name}</TableCell>
                            <TableCell>{`${resource.physicalAddress.street}, ${resource.physicalAddress.city}, ${resource.physicalAddress.state}, ${resource.physicalAddress.zip}`}</TableCell>
                            <TableCell>
                              <div>{resource.mainContact.name}</div>
                              <div>
                                {resource.mainContact.phone.slice(0, 3) +
                                  "-" +
                                  resource.mainContact.phone.slice(3, 6) +
                                  "-" +
                                  resource.mainContact.phone.slice(6)}
                              </div>
                              <div>{resource.mainContact.email}</div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className={styles.tableFooter}>
                <div className={styles.numberHolder}>
                  {totalPages === 1 ? (
                    <p className={styles.footerNumber}>1</p>
                  ) : (
                    <>
                      {page > 1 ? (
                        <button
                          className={styles.arrowButton}
                          onClick={() => handlePageTurn(-1)}
                          type="button"
                        >
                          <img
                            src={leftArrow}
                            className={styles.arrowImage}
                            alt="Left Arrow Button"
                          />
                        </button>
                      ) : (
                        <div className={styles.buttonFiller}>&nbsp;</div>
                      )}
                      {[...Array(totalPages)].map((_, idx) => (
                        <p
                          key={idx}
                          className={
                            page !== idx + 1
                              ? `${styles.footerNumber} ${styles.footerNumberSurpressed}`
                              : `${styles.footerNumber}`
                          }
                          onClick={() => setPage(idx + 1)}
                        >
                          {idx + 1}
                        </p>
                      ))}
                      {page < totalPages ? (
                        <button
                          className={styles.arrowButton}
                          onClick={() => handlePageTurn(1)}
                          type="button"
                        >
                          <img
                            src={rightArrow}
                            className={styles.arrowImage}
                            alt="Right Arrow Button"
                          />
                        </button>
                      ) : (
                        <div className={styles.buttonFiller}>&nbsp;</div>
                      )}
                    </>
                  )}
                </div>
                {/* TBD */}
                <button className={styles.printButton}>
                  <img src={print} alt="Print Icon" />
                  Print
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResultPage;
