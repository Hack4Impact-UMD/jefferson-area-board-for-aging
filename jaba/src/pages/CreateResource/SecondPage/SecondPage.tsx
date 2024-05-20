import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import States from "../../../constants/states";
import styles from "./SecondPage.module.css";

const SecondPage = ({ resource, setResource, formReference }: any) => {
  const a = States;
  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
  };
  const [matchAddress, setMatchAddress] = useState<boolean>(false);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      ref={formReference}
      className={styles.form}
    >
      <div className={styles.formColumn}>
        <TextField
          required
          label="Organization Mailing Address"
          placeholder="Enter Organization Address"
          value={resource.mailingAddress.street}
          onChange={(event) => {
            setResource({
              ...resource,
              mailingAddress: {
                ...resource.mailingAddress,
                street: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
          }}
          className={styles.muInput}
        />
        <TextField
          required
          label="Organization City"
          placeholder="Enter Organization City"
          value={resource.mailingAddress.city}
          onChange={(event) => {
            setResource({
              ...resource,
              mailingAddress: {
                ...resource.mailingAddress,
                city: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
          }}
          className={styles.muInput}
        />
        <div className={styles.stateRow}>
          <FormControl variant="outlined">
            <Select
              labelId="test-select-label"
              // Disables auto focus on MenuItems and allows TextField to be in focus
              MenuProps={{
                PaperProps: { sx: { maxHeight: 300, maxWidth: 200 } },
              }}
              value={resource.mailingAddress.state}
              onChange={(event) => {
                setResource({
                  ...resource,
                  mailingAddress: {
                    ...resource.mailingAddress,
                    state: event.target.value,
                  },
                });
              }}
              className={styles.primarySelect}
              variant="outlined"
              required
            >
              {States.sort().map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            label="Zip Code"
            placeholder="Enter Zip Code"
            value={resource.mailingAddress.zip}
            onChange={(event) => {
              setResource({
                ...resource,
                mailingAddress: {
                  ...resource.mailingAddress,
                  zip: event.target.value,
                },
              });
            }}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              style,
            }}
            className={`${styles.muInput} ${styles.muInputHalfWidth}`}
          />
        </div>

        <TextField
          required
          label="Organization Physical Address"
          placeholder="Enter Physical Address"
          value={resource.physicalAddress.street}
          onChange={(event) => {
            setResource({
              ...resource,
              physicalAddress: {
                ...resource.physicalAddress,
                street: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
          }}
          className={styles.muInput}
        />
        <TextField
          required
          label="Organization City"
          placeholder="Enter Organization City"
          value={resource.physicalAddress.city}
          onChange={(event) => {
            setResource({
              ...resource,
              physicalAddress: {
                ...resource.physicalAddress,
                city: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
          }}
          className={styles.muInput}
        />
        <div className={styles.stateRow}>
          <FormControl variant="outlined">
            <Select
              labelId="test-select-label"
              // Disables auto focus on MenuItems and allows TextField to be in focus
              MenuProps={{
                PaperProps: { sx: { maxHeight: 300, maxWidth: 200 } },
              }}
              value={resource.physicalAddress.state}
              onChange={(event) => {
                setResource({
                  ...resource,
                  physicalAddress: {
                    ...resource.physicalAddress,
                    state: event.target.value,
                  },
                });
              }}
              className={styles.primarySelect}
              variant="outlined"
              required
            >
              {States.sort().map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            label="Zip Code"
            placeholder="Enter Zip Code"
            value={resource.physicalAddress.zip}
            onChange={(event) => {
              setResource({
                ...resource,
                physicalAddress: {
                  ...resource.physicalAddress,
                  zip: event.target.value,
                },
              });
            }}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              style,
            }}
            className={`${styles.muInput} ${styles.muInputHalfWidth}`}
          />
        </div>
      </div>
      <div className={styles.formColumn}>
        <TextField
          required
          label="Organization Mailing Address"
          placeholder="Enter Organization Address"
          value={resource.mailingAddress.street}
          onChange={(event) => {
            setResource({
              ...resource,
              mailingAddress: {
                ...resource.mailingAddress,
                street: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
          }}
          className={styles.muInput}
        />
      </div>
    </form>
  );
};

export default SecondPage;
