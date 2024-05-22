import { useState, useEffect } from "react";
import styles from "./CategorySearch.module.css";
import {
  FormControl,
  InputLabel,
  Select,
  ListSubheader,
  TextField,
  MenuItem,
} from "@mui/material";
import Categories from "../../../constants/categories";

const CategorySearch = ({ searchParams, setSearchParams }: any) => {
  const [primaryCategorySearch, setPrimaryCategorySearch] =
    useState<string>("");
  const [secondaryCategorySearch, setSecondaryCategorySearch] =
    useState<string>("");

  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

  // Used to get subcategories once primary category has been selected
  useEffect(() => {
    if (searchParams.primaryCategory !== "") {
      const secondaryCategories =
        Categories[searchParams.primaryCategory] || [];
      setFilteredCategories(secondaryCategories);
    }
  }, [searchParams.primaryCategory]);

  return (
    <>
      <FormControl variant="outlined">
        <InputLabel className={styles.selectInput}>Primary Category</InputLabel>
        <Select
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{
            PaperProps: { sx: { maxHeight: 300 } },
          }}
          value={searchParams.primaryCategory}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              primaryCategory: e?.target.value,
            })
          }
          onClose={() => setPrimaryCategorySearch("")}
          // This prevents rendering empty string in Select's value
          // if search text would exclude currently selected option.
          renderValue={() => searchParams.primaryCategory}
          className={styles.primarySelect}
          variant="outlined"
        >
          {/* TextField is put into ListSubheader so that it doesn't act as a selectable 
          item in the menu i.e. we can click the TextField without triggering any selection.*/}
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
            option.toLowerCase().indexOf(primaryCategorySearch!.toLowerCase()) >
            -1 ? (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ) : (
              <></>
            )
          )}
        </Select>
      </FormControl>
      {filteredCategories.length > 0 ? (
        <FormControl variant="outlined">
          <InputLabel className={styles.selectInput}>
            Secondary Category
          </InputLabel>
          <Select
            // Disables auto focus on MenuItems and allows TextField to be in focus
            MenuProps={{
              PaperProps: { sx: { maxHeight: 300 } },
            }}
            value={searchParams.secondaryCategory}
            onChange={(e) =>
              setSearchParams({
                ...searchParams,
                secondaryCategory: e?.target.value,
              })
            }
            onClose={() => setSecondaryCategorySearch("")}
            // This prevents rendering empty string in Select's value
            // if search text would exclude currently selected option.
            renderValue={() => searchParams.secondaryCategory}
            className={styles.primarySelect}
            variant="outlined"
          >
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
            {filteredCategories?.map((option, i) =>
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
    </>
  );
};

export default CategorySearch;
