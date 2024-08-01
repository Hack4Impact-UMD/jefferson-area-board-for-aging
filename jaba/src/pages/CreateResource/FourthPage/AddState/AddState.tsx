import DeleteIcon from "@mui/icons-material/Delete";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import getCounties from "../../../../constants/counties";
import States from "../../../../constants/states";
import styles from "./AddState.module.css";

const AddState = ({
  open,
  handleClose,
  resource,
  setResource,
  startingModalState,
  startingModalCounties,
  givenMode,
}: any) => {
  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
  };
  const [selectedState, setSelectedState] =
    useState<string>(startingModalState);
  const [selectCounty, setSelectCounty] = useState<boolean>(false);

  const [counties, setCounties] = useState<string[]>([]);

  useEffect(() => {
    if (startingModalState != "") {
      setSelectedState(startingModalState);
    }
    if (startingModalCounties.length > 0) {
      setCounties(startingModalCounties);
      setSelectCounty(true);
    }
  }, [startingModalState, startingModalCounties]);

  const handleSubmit = () => {
    const currentStates = resource.states || {};
    currentStates[selectedState] = counties;
    setResource({ ...resource, states: currentStates });
    handleFullClose();
  };

  const handleFullClose = () => {
    setSelectedState("");
    setSelectCounty(false);
    setCounties([]);
    handleClose();
  };

  const handleDeleteState = () => {
    const currentStates = resource.states || {};
    delete currentStates[selectedState];
    setResource({ ...resource, states: currentStates });
    handleFullClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleFullClose}>
        <Paper className={styles.background}>
          <div className={styles.header}>
            <p className={styles.headerText}>Add State</p>
            {startingModalCounties.length > 0 || startingModalState != "" ? (
              <DeleteIcon
                className={styles.trashIcon}
                onClick={() => {
                  if (givenMode === "VIEW") return;
                  handleDeleteState();
                }}
              />
            ) : (
              <></>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
            className={styles.form}
          >
            <FormControl variant="outlined">
              <InputLabel className={styles.regionSelectInput}>
                Select State
              </InputLabel>
              <Select
                // Disables auto focus on MenuItems and allows TextField to be in focus
                MenuProps={{
                  PaperProps: { sx: { maxHeight: 300 } },
                }}
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setCounties([]);
                }}
                className={styles.regionSelect}
                variant="outlined"
                disabled={startingModalState != ""}
              >
                {States?.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/*Counties Selection*/}
            <div className={styles.nationalRadioContainer}>
              <p>Specify Counties:</p>
            </div>
            <RadioGroup
              row
              onChange={(e, value) => {
                if (givenMode === "VIEW") return;

                setSelectCounty(value === "true");
              }}
              value={selectCounty}
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
            <div className={styles.autocompleteHolder}>
              {selectCounty ? (
                <Autocomplete
                  renderTags={(values, getTagProps, owner) => (
                    <Box sx={{ maxHeight: "60px", overflowY: "auto" }}>
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
                    if (givenMode === "VIEW") return;

                    setCounties(newValue);
                  }}
                  value={counties || []}
                  multiple
                  options={getCounties(selectedState) || []}
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
                      label="Counties"
                      placeholder="Enter Desired Counties"
                      InputLabelProps={{ shrink: true }}
                      disabled={givenMode === "VIEW"}
                    />
                  )}
                />
              ) : (
                <></>
              )}
            </div>

            <div className={styles.buttonHolder}>
              <Button
                type="submit"
                variant="outlined"
                className={styles.redButton}
                onClick={handleFullClose}
                disabled={givenMode === "VIEW"}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className={styles.submitButton}
                onClick={handleSubmit}
                disabled={givenMode === "VIEW"}
              >
                Add
              </Button>
            </div>
          </form>
        </Paper>
      </Modal>
    </>
  );
};
export default AddState;
