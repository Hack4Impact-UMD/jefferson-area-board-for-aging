import { TextField } from "@mui/material";
import { useState } from "react";
import styles from "./ThirdPage.module.css";

const ThirdPage = ({
  resource,
  setResource,
  formReference,
  givenMode,
}: any) => {
  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
  };
  const [primaryCategorySearch, setPrimaryCategorySearch] =
    useState<string>("");
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      ref={formReference}
      className={styles.form}
    >
      <div className={styles.formColumn}>
        <div className={styles.stateRow}>
          <TextField
            required
            label="Main Contact Name"
            placeholder="Enter Name"
            value={resource.mainContact.name}
            onChange={(event) => {
              setResource({
                ...resource,
                mainContact: {
                  ...resource.mainContact,
                  name: event.target.value,
                },
              });
            }}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              style,
              readOnly: givenMode === "VIEW",
            }}
            className={`${styles.muInput} ${styles.muInputHalfWidth}`}
          />
          <TextField
            required
            label="Main Contact Phone"
            placeholder="Enter Phone"
            value={resource.mainContact.phone}
            onChange={(event) => {
              setResource({
                ...resource,
                mainContact: {
                  ...resource.mainContact,
                  phone: event.target.value,
                },
              });
            }}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              style,
              readOnly: givenMode === "VIEW",
            }}
            className={`${styles.muInput} ${styles.muInputHalfWidth}`}
          />
        </div>
        <TextField
          required
          label="Main Contact Department"
          placeholder="Enter Department"
          value={resource.mainContact.department}
          onChange={(event) => {
            setResource({
              ...resource,
              mainContact: {
                ...resource.mainContact,
                department: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={styles.muInput}
        />
        <TextField
          required
          label="Main Contact Email"
          placeholder="Enter Email"
          value={resource.mainContact.email}
          onChange={(event) => {
            setResource({
              ...resource,
              mainContact: {
                ...resource.mainContact,
                email: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={styles.muInput}
        />
        <div className={styles.stateRow}>
          <TextField
            required
            label="Secondary Contact Name"
            placeholder="Enter Name"
            value={resource.secondContact.name}
            onChange={(event) => {
              setResource({
                ...resource,
                secondContact: {
                  ...resource.secondContact,
                  name: event.target.value,
                },
              });
            }}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              style,
              readOnly: givenMode === "VIEW",
            }}
            className={`${styles.muInput} ${styles.muInputHalfWidth}`}
          />

          <TextField
            required
            label="Secondary Contact Phone"
            placeholder="Enter Phone"
            value={resource.secondContact.phone}
            onChange={(event) => {
              setResource({
                ...resource,
                secondContact: {
                  ...resource.secondContact,
                  phone: event.target.value,
                },
              });
            }}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              style,
              readOnly: givenMode === "VIEW",
            }}
            className={`${styles.muInput} ${styles.muInputHalfWidth}`}
          />
        </div>
        <TextField
          required
          label="Secondary Contact Department"
          placeholder="Enter Department"
          value={resource.secondContact.department}
          onChange={(event) => {
            setResource({
              ...resource,
              secondContact: {
                ...resource.secondContact,
                department: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={styles.muInput}
        />
        <TextField
          required
          label="Secondary Contact Email"
          placeholder="Enter Email"
          value={resource.secondContact.email}
          onChange={(event) => {
            setResource({
              ...resource,
              secondContact: {
                ...resource.secondContact,
                email: event.target.value,
              },
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={styles.muInput}
        />
      </div>
      <div className={styles.formColumn}>
        <TextField
          required
          label="Application Notes"
          placeholder="Enter Application Notes"
          value={resource.applicationNotes}
          onChange={(event) => {
            setResource({
              ...resource,
              applicationNotes: event.target.value,
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={`${styles.muInput} ${styles.tripleHeight}`}
          multiline
          minRows={3}
          maxRows={3}
        />

        <TextField
          required
          label="Eligibility Notes"
          placeholder="Enter Eligibility Notes"
          value={resource.eligibilityNotes}
          onChange={(event) => {
            setResource({
              ...resource,
              eligibilityNotes: event.target.value,
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={`${styles.muInput} ${styles.tripleHeight}`}
          multiline
          minRows={3}
          maxRows={3}
        />

        <TextField
          required
          label="Other Notes"
          placeholder="Enter Other Notes"
          value={resource.otherNotes}
          onChange={(event) => {
            setResource({
              ...resource,
              otherNotes: event.target.value,
            });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={`${styles.muInput} ${styles.tripleHeight}`}
          multiline
          minRows={3}
          maxRows={3}
        />
      </div>
    </form>
  );
};

export default ThirdPage;
