import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import PlanningDistricts from "../../../constants/planningDistricts";
import Zips from "../../../constants/zips";
import AddState from "./AddState/AddState";
import styles from "./FourthPage.module.css";

const FourthPage = ({ resource, setResource }: any) => {
  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
  };
  const [openAddStateModal, setOpenAddStateModal] = useState<boolean>(false);
  const [startingModalState, setStartingModalState] = useState<string>("");
  const [primaryCategorySearch, setPrimaryCategorySearch] =
    useState<string>("");
  const [neededFilters, setNeededFilters] = useState({
    zip: true,
    planningDistrict: true,
    state: true,
  });

  /* Updates the resource object if one of the specifiers changes values */
  useEffect(() => {
    if (!neededFilters.zip) {
      setResource({ ...resource, zips: [] });
    }
    if (!neededFilters.planningDistrict) {
      setResource({ ...resource, planningDistricts: [] });
    }
    if (!neededFilters.state) {
      setResource({ ...resource, states: {} });
    }
  }, [...Object.values(neededFilters)]);

  // Specifies whether the zip code dropdown is open
  const [openZip, setOpenZip] = useState<boolean>(false);
  return (
    <>
      <AddState
        open={openAddStateModal}
        handleClose={() => {
          setOpenAddStateModal(false);
          setStartingModalState("");
        }}
        resource={resource}
        setResource={setResource}
        startingModalState={startingModalState}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={styles.form}
      >
        <div className={styles.formColumn}>
          <RadioGroup
            row
            onChange={(e, value) => {
              const booleanValue = value === "true";
              setResource({ ...resource, nationalResource: booleanValue });
              setNeededFilters({
                zip: !booleanValue,
                planningDistrict: !booleanValue,
                state: !booleanValue,
              });
            }}
            className={styles.radioGroup}
            value={resource.nationalResource}
          >
            <FormControlLabel
              value={true}
              control={<Radio className={styles.radioButton} />}
              label="National Resource"
            />
            <FormControlLabel
              value={false}
              control={<Radio className={styles.radioButton} />}
              label="Non-National Resource"
            />
          </RadioGroup>
          {/*Zip Code Selection*/}
          <div className={styles.nationalRadioContainer}>
            <p>Specify Zip Code:</p>
          </div>
          <RadioGroup
            row
            onChange={(e, value) => {
              setNeededFilters({
                ...neededFilters,
                zip: value === "true",
              });
            }}
            value={neededFilters.zip}
            className={styles.radioGroup}
          >
            <FormControlLabel
              value={true}
              control={<Radio className={styles.radioButton} />}
              label="Yes"
            />
            <FormControlLabel
              value={false}
              control={<Radio className={styles.radioButton} />}
              label="No"
            />
          </RadioGroup>
          {neededFilters.zip ? (
            <div className={styles.autocompleteHolder}>
              <Autocomplete
                renderTags={(values, getTagProps, owner) => (
                  <Box sx={{ maxHeight: "50px", overflowY: "auto" }}>
                    {values.map((value, index) => (
                      <Chip
                        label={owner.getOptionLabel(value)}
                        size={owner.size}
                        {...getTagProps({ index })}
                        {...owner.ChipProps}
                      />
                    ))}
                  </Box>
                )}
                open={openZip}
                onInputChange={(_, value) => {
                  if (value.length < 3) {
                    if (openZip) setOpenZip(false);
                  } else {
                    if (!openZip) setOpenZip(true);
                  }
                }}
                onChange={(event, newValue) => {
                  setResource({ ...resource, zips: newValue });
                }}
                value={resource.zips}
                multiple
                options={Zips}
                getOptionLabel={(option) => option}
                filterOptions={(options, state) => {
                  if (state.inputValue.length > 2) {
                    return options.filter((item) =>
                      String(item)
                        .toLowerCase()
                        .startsWith(state.inputValue.toLowerCase())
                    );
                  }
                  return options;
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Zip Codes"
                    placeholder="Enter Zip Codes Served"
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </div>
          ) : (
            <div className={styles.autocompleteHolder}>&nbsp;</div>
          )}
          {/*Planning District Selection*/}
          <div className={styles.nationalRadioContainer}>
            <p>Specify Planning District:</p>
          </div>
          <RadioGroup
            row
            onChange={(e, value) => {
              setNeededFilters({
                ...neededFilters,
                planningDistrict: value === "true",
              });
            }}
            value={neededFilters.planningDistrict}
            className={styles.radioGroup}
          >
            <FormControlLabel
              value={true}
              control={<Radio className={styles.radioButton} />}
              label="Yes"
            />
            <FormControlLabel
              value={false}
              control={<Radio className={styles.radioButton} />}
              label="No"
            />
          </RadioGroup>
          {neededFilters.planningDistrict ? (
            <div
              className={`${styles.autocompleteHolder} ${styles.autocompleteHolderHeightChange}
        `}
            >
              <Autocomplete
                renderTags={(values, getTagProps, owner) => (
                  <Box sx={{ maxHeight: "50px", overflowY: "auto" }}>
                    {values.map((value, index) => (
                      <Chip
                        label={owner.getOptionLabel(value)}
                        size={owner.size}
                        {...getTagProps({ index })}
                        {...owner.ChipProps}
                      />
                    ))}
                  </Box>
                )}
                onChange={(event, newValue) => {
                  setResource({ ...resource, planningDistricts: newValue });
                }}
                value={resource.planningDistricts}
                multiple
                options={PlanningDistricts}
                getOptionLabel={(option) => option}
                filterOptions={(options, state) => {
                  return options.filter((item) =>
                    String(item)
                      .toLowerCase()
                      .includes(state.inputValue.toLowerCase())
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Planning Districts"
                    placeholder="Enter Planning Districts Served"
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className={`${styles.formColumn} ${styles.formColumnTwo}`}>
          <div className={styles.nationalRadioContainer}>
            <p>Specify State:</p>
          </div>
          <RadioGroup
            row
            onChange={(e, value) => {
              setNeededFilters({
                ...neededFilters,
                state: value === "true",
              });
            }}
            value={neededFilters.state}
            className={styles.radioGroup}
          >
            <FormControlLabel
              value={true}
              control={<Radio className={styles.radioButton} />}
              label="Yes"
            />
            <FormControlLabel
              value={false}
              control={<Radio className={styles.radioButton} />}
              label="No"
            />
          </RadioGroup>
          {neededFilters.state ? (
            <>
              <Button
                type="submit"
                variant="outlined"
                className={styles.addButton}
                onClick={() => setOpenAddStateModal(true)}
              >
                Add State
              </Button>
              <div className={styles.stateHolder}>
                {Object.entries(resource.states).map(([key, arr]) => {
                  return (
                    <Button
                      type="submit"
                      variant="outlined"
                      className={styles.stateButton}
                      onClick={() => {
                        setStartingModalState(key);
                        setOpenAddStateModal(true);
                      }}
                      key={key}
                    >
                      {key}
                    </Button>
                  );
                })}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </form>
    </>
  );
};

export default FourthPage;
