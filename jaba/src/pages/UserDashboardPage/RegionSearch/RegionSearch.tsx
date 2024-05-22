import { useState, useEffect } from "react";
import styles from "./RegionSearch.module.css";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import States from "../../../constants/states";
import getCounties from "../../../constants/counties";
import PlanningDistricts from "../../../constants/planningDistricts";

const style = {
  width: "225px",
  fontSize: ".8rem",
  fontFamily: "'Inter', sans-serif",
  padding: "12px",
};

const regionOptions = ["Zip Code", "State/County", "Planning District"];

const RegionSearch = ({ searchParams, setSearchParams }: any) => {
  const [searchRegion, setSearchRegion] = useState<string>("");
  const [counties, setCounties] = useState<string[]>([]);

  // Used to get subcategories once primary category has been selected
  useEffect(() => {
    if (searchParams.state !== "") {
      setCounties(getCounties(searchParams.state));
    }
  }, [searchParams.state]);

  const ZipCodeInput = () => {
    return (
      <TextField
        label="Zip Code"
        placeholder="Enter Zip Code"
        value={searchParams.zipCode}
        onChange={(event) => {
          setSearchParams({ ...searchParams, zipCode: event?.target.value });
        }}
        InputLabelProps={{ shrink: true }}
        inputProps={{
          style,
        }}
      />
    );
  };

  const StateSelect = () => {
    return (
      <FormControl variant="outlined">
        <InputLabel className={styles.regionSelectInput}>
          Select State
        </InputLabel>
        <Select
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{
            PaperProps: { sx: { maxHeight: 300 } },
          }}
          value={searchParams.state}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              state: e?.target.value,
            })
          }
          className={styles.regionSelect}
          variant="outlined"
        >
          {States?.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const CountySelect = () => {
    return (
      <>
        {counties.length > 0 ? (
          <FormControl variant="outlined">
            <InputLabel className={styles.regionSelectInput}>County</InputLabel>
            <Select
              // Disables auto focus on MenuItems and allows TextField to be in focus
              MenuProps={{
                PaperProps: { sx: { maxHeight: 300 } },
              }}
              value={searchParams.county}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  county: e?.target.value,
                })
              }
              className={styles.regionSelect}
              variant="outlined"
            >
              {counties?.map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <></>
        )}
      </>
    );
  };

  const PlanningDistrictSelect = () => {
    return (
      <FormControl variant="outlined">
        <InputLabel className={styles.regionSelectInput}>
          Select Planning District
        </InputLabel>
        <Select
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{
            PaperProps: { sx: { maxHeight: 300 } },
          }}
          value={searchParams.planningDistrict}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              planningDistrict: e?.target.value,
            })
          }
          className={styles.regionSelect}
          variant="outlined"
        >
          {PlanningDistricts.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <>
      <div className={styles.nationalRadioContainer}>
        <p>Include National Services:</p>
        <RadioGroup
          row
          onChange={(e, value) => {
            setSearchParams({
              ...searchParams,
              includeNationalServices: value,
            });
          }}
          value={searchParams.includeNationalServices}
        >
          <FormControlLabel
            value="yes"
            control={<Radio className={styles.radioButton} size="small" />}
            label="Yes"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: ".8rem",
              },
            }}
          />
          <FormControlLabel
            value="no"
            control={<Radio className={styles.radioButton} size="small" />}
            label="No"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: ".8rem",
              },
            }}
          />
        </RadioGroup>
      </div>
      <div className={styles.regionTypeSelectContainer}>
        <FormControl variant="outlined">
          <InputLabel className={styles.regionSelectInput}>
            Select Search Region
          </InputLabel>
          <Select
            // Disables auto focus on MenuItems and allows TextField to be in focus
            MenuProps={{
              PaperProps: { sx: { maxHeight: 300 } },
            }}
            value={searchRegion}
            onChange={(e) => {
              setSearchRegion(e.target.value);
              setCounties([]);
              setSearchParams({
                ...searchParams,
                zipCode: "",
                state: "",
                county: "",
                planningDistrict: "",
              });
            }}
            className={styles.regionSelect}
            variant="outlined"
          >
            {regionOptions?.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={styles.regionSelectContainer}>
        <>
          {searchRegion === "Zip Code" ? (
            <ZipCodeInput />
          ) : searchRegion === "State/County" ? (
            <>
              <StateSelect />
              <CountySelect />
            </>
          ) : searchRegion === "Planning District" ? (
            <PlanningDistrictSelect />
          ) : (
            <></>
          )}
        </>
      </div>
    </>
  );
};

export default RegionSearch;
