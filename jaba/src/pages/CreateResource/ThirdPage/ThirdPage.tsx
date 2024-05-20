import styles from "./ThirdPage.module.css";
import NavigationBar from "../../../components/NavBar/NavBar";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import {
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Categories from "../../../constants/categories";
import { Resource, ResourceData } from "../../../types/ResourceObject";

const ThirdPage = ({ resource, setResource, formReference }: any) => {
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
          }}
          className={styles.muInput}
        />
        <RadioGroup
          row
          onChange={(e, value) => {
            setResource({ ...resource, npo: value });
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
          }}
          className={styles.muInput}
        />
      </div>
      <div className={styles.formColumn}></div>
    </form>
  );
};

export default ThirdPage;
