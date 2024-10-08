import {
  FormControl,
  FormControlLabel,
  InputLabel,
  ListSubheader,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Categories, { getSubCategory } from "../../../constants/categories";
import styles from "./FirstPage.module.css";

const FirstPage = ({
  resource,
  setResource,
  formReference,
  givenMode,
}: any) => {
  const style = {
    width: "250px",
    padding: "10px 10px 10px 10px",
    fontFamily: "'Inter', sans-serif",
    WebkitTextFillColor: "black",
  };
  const [primaryCategorySearch, setPrimaryCategorySearch] =
    useState<string>("");
  const [secondaryCategorySearch, setSecondaryCategorySearch] =
    useState<string>("");
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      ref={formReference}
      className={styles.form}
    >
      <div className={styles.formColumn}>
        <TextField
          required
          label="Organization Name"
          placeholder="Enter Organization Name"
          value={resource.name}
          onChange={(event) => {
            setResource({ ...resource, name: event.target.value });
          }}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            style,
            readOnly: givenMode === "VIEW",
          }}
          className={styles.muInput}
        />
        <RadioGroup
          row
          onChange={(e, value) => {
            if (givenMode === "VIEW") return;
            setResource({ ...resource, npo: value === "true" });
          }}
          className={styles.radioGroup}
          value={resource.npo}
        >
          <FormControlLabel
            value={true}
            control={<Radio className={styles.radioButton} />}
            label="Non-Profit"
          />
          <FormControlLabel
            value={false}
            control={<Radio className={styles.radioButton} />}
            label="For-Profit"
          />
        </RadioGroup>
        <TextField
          required
          label="Main Phone"
          placeholder="Enter Primary Phone Number"
          value={resource.mainPhone}
          onChange={(event) => {
            setResource({ ...resource, mainPhone: event.target.value });
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
          label="Organization Phone (TTY/TDD)"
          placeholder="Enter Hearing Impaired Line"
          value={resource.impairedPhone}
          onChange={(event) => {
            setResource({ ...resource, impairedPhone: event.target.value });
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
          label="Organization Email"
          placeholder="Enter Organization Email"
          value={resource.email}
          onChange={(event) => {
            setResource({ ...resource, email: event.target.value });
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
          label="Organization Website"
          placeholder="Enter Organization Website"
          value={resource.website}
          onChange={(event) => {
            setResource({ ...resource, website: event.target.value });
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
          label="Description"
          placeholder="Enter Resource Description"
          value={resource.description}
          onChange={(event) => {
            setResource({
              ...resource,
              description: event.target.value,
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
        {givenMode != "ADD" ? (
          <>
            {" "}
            <TextField
              required
              label="Creation Date"
              value={resource.creationDate}
              InputLabelProps={{ shrink: true }}
              inputProps={{
                style,
                readOnly: true,
              }}
              className={styles.muInput}
            />
            <TextField
              required
              label="Last Edit Date and User"
              value={`${resource.lastEditUser} edited at ${resource.lastEditTime}`}
              InputLabelProps={{ shrink: true }}
              inputProps={{
                style,
                readOnly: true,
              }}
              className={styles.muInput}
            />
          </>
        ) : (
          <></>
        )}
        <FormControl variant="outlined">
          <InputLabel
            id="primary-test-select-label"
            className={styles.selectInput}
            required
          >
            Primary Category
          </InputLabel>
          <Select
            required
            labelId="primary-test-select-label"
            // Disables auto focus on MenuItems and allows TextField to be in focus
            MenuProps={{
              PaperProps: { sx: { maxHeight: 300 } },
            }}
            value={resource.primaryCategory}
            onChange={(e) =>
              setResource({
                ...resource,
                primaryCategory: e?.target.value,
                subCategory: "",
              })
            }
            onClose={() => setPrimaryCategorySearch("")}
            // This prevents rendering empty string in Select's value
            // if search text would exclude currently selected option.
            renderValue={() => resource.primaryCategory}
            className={styles.primarySelect}
            variant="outlined"
          >
            {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
            <ListSubheader>
              <TextField
                size="small"
                // Autofocus on textfield
                autoFocus
                placeholder="Type to search..."
                fullWidth
                onChange={(e) => setPrimaryCategorySearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key !== "Escape") {
                    // Prevents autoselecting item while typing (default Select behaviour)
                    e.stopPropagation();
                  }
                }}
              />
            </ListSubheader>
            {Object.keys(Categories).map((option, i) =>
              option
                .toLowerCase()
                .indexOf(primaryCategorySearch!.toLowerCase()) > -1 ? (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ) : (
                <></>
              )
            )}
          </Select>
        </FormControl>

        {/* Secondary Category Select */}
        {getSubCategory(resource.primaryCategory).length > 0 ? (
          <FormControl>
            <InputLabel
              id="secondary-test-select-label"
              className={styles.selectInput}
            >
              Secondary Category
            </InputLabel>
            <Select
              labelId="secondary-test-select-label"
              // Disables auto focus on MenuItems and allows TextField to be in focus
              MenuProps={{
                PaperProps: { sx: { maxHeight: 300 } },
              }}
              value={resource.subCategory}
              onChange={(e) =>
                setResource({ ...resource, subCategory: e?.target.value })
              }
              onClose={() => setSecondaryCategorySearch("")}
              // This prevents rendering empty string in Select's value
              // if search text would exclude currently selected option.
              renderValue={() => resource.subCategory}
              className={styles.primarySelect}
              variant="outlined"
            >
              {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
              <ListSubheader>
                <TextField
                  size="small"
                  // Autofocus on textfield
                  autoFocus
                  placeholder="Type to search..."
                  fullWidth
                  onChange={(e) => setSecondaryCategorySearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key !== "Escape") {
                      // Prevents autoselecting item while typing (default Select behaviour)
                      e.stopPropagation();
                    }
                  }}
                />
              </ListSubheader>
              {getSubCategory(resource.primaryCategory).map(
                (option: any, i: any) =>
                  option
                    .toLowerCase()
                    .indexOf(secondaryCategorySearch!.toLowerCase()) > -1 ? (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ) : (
                    <></>
                  )
              )}
            </Select>
          </FormControl>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};

export default FirstPage;
