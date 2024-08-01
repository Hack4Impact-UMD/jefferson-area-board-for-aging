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
  maxWidth: "100px",
  minWidth: "100px",
  padding: "16px 4px",
};

const childCellStyle = {
  fontFamily: "DM Serif Text, serif",
  fontSize: ".9rem",
  maxWidth: "100px",
  minWidth: "100px",
  textWrap: "wrap",
  wordBreak: "break-word",
  padding: "4px",
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

  const handleCheckAll = (checked: boolean) => {
    if (checked) {
      setSelectedResources(resources);
    } else {
      setSelectedResources([]);
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
                        <TableCell
                          sx={{
                            minWidth: "20px",
                            maxWidth: "20px",
                            padding: "8px",
                          }}
                        >
                          <input
                            type="checkbox"
                            onChange={(e) => {
                              handleCheckAll(e.target.checked);
                            }}
                            className={styles.resourceCheckbox}
                          />
                        </TableCell>
                        <TableCell sx={headerCellStyle}>Resource</TableCell>
                        <TableCell sx={headerCellStyle}>Category</TableCell>
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
                          <TableRow
                            key={index}
                            className={styles.tableRow}
                            sx={index % 4 == 3 ? { "& td": { border: 0 } } : {}}
                          >
                            <TableCell
                              sx={{
                                minWidth: "20px",
                                maxWidth: "20px",
                                padding: "8px",
                              }}
                            >
                              <input
                                type="checkbox"
                                onChange={(e) => handleCheckbox(e, resource)}
                                className={styles.resourceCheckbox}
                                checked={selectedResources.includes(resource)}
                              />
                            </TableCell>
                            {/* On click is used in each child instead of 
                            the entire row so that clicking the checkbox 
                            does not navigate to the other page */}
                            <TableCell
                              sx={childCellStyle}
                              onClick={() => {
                                navigate("/create", {
                                  state: {
                                    fromApp: true,
                                    resource: resource,
                                  },
                                });
                              }}
                            >
                              {resource.name}
                            </TableCell>
                            <TableCell
                              sx={childCellStyle}
                              onClick={() => {
                                navigate("/create", {
                                  state: {
                                    fromApp: true,
                                    resource: resource,
                                  },
                                });
                              }}
                            >
                              {resource.primaryCategory}
                              <br />{" "}
                              <div
                                style={{
                                  fontStyle: "italic",
                                  fontSize: ".8rem",
                                  color: "dimgray",
                                }}
                              >
                                {resource?.subCategory}
                              </div>
                            </TableCell>

                            <TableCell
                              sx={childCellStyle}
                              onClick={() => {
                                navigate("/create", {
                                  state: {
                                    fromApp: true,
                                    resource: resource,
                                  },
                                });
                              }}
                            >
                              {resource.physicalAddress.street}
                              <br />
                              {`${resource.physicalAddress.city}, ${resource.physicalAddress.state}, ${resource.physicalAddress.zip}`}
                            </TableCell>
                            <TableCell
                              sx={childCellStyle}
                              onClick={() => {
                                navigate("/create", {
                                  state: {
                                    fromApp: true,
                                    resource: resource,
                                  },
                                });
                              }}
                            >
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
                <button
                  className={styles.printButton}
                  onClick={() => {
                    navigate("/printreport", {
                      state: {
                        fromApp: true,
                        resource: selectedResources,
                      },
                    });
                  }}
                >
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
