import * as React from 'react';
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import Autocomplete, { AutocompleteRenderOptionState } from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styles from "./CategoryFilter.module.css"

const CategoryFilter = () => {
    const [serviceCategory, setServiceCategory] = React.useState<string[]>([])
    const [isSubCatBtnVisible, setisSubCatBtnVisible] = React.useState(true)
    // const [isPrimCatBtnVisible, setisPrimCatBtnVisible] = React.useState(false)
    const [subCategoryElts, setSubCategoryElts] = React.useState<string[]>([])

    let categories = new Map<string, Array<string>>([
        ["Alzheimers and Dementia", ["Alz Resource"]],
        ["Abuse",["Social Services", "Local Law Enforcement"]],
        ["Area Agencies on Aging",["Local AAA"]],
        ["Abuse",["Federal-Local Associations"]],
        ["Caregiver Services",["Caregiver Support/General", "Support Group"]],
        ["Care Management",[]],
        ["Child Care",[]],
        ["Child Welfare",[]],
        ["Community Service organizations",[]],
        ["Disability Services",[]],
        ["E",[]],
        ["F",[]],
        ["G",[]],
        ["H",[]],
        ["I",[]]
    ]);
    
    let primary_categories = Array.from(categories.keys())

    // Takes in type string for category
    const handleToggle = (category: string) => {
        // Updates the state of serviceCategory, prev is the previous state
        setServiceCategory(prev => {
          const currentIndex = prev.indexOf(category);
          const newChecked = [...prev];
        // Create new array that represents the list of selected categories
          if (currentIndex === -1) {
            newChecked.push(category);
          } else {
            newChecked.splice(currentIndex, 1);
          }
    
          return newChecked;
        });
      };
    const isSelected = (category: string) => serviceCategory.includes(category);
    
    // Start of task 11
    const handleSubCategory = (categories: Map<string, Array<string>>) => {
        let subCategoryArray = []
        let toggleSubCategoriesBtn = true
        for (const subCategory of Array.from(categories.keys())) {
            const subCategories= categories.get(subCategory)
            if (subCategories && subCategories.length > 0 && isSelected(subCategory)) {
                subCategoryArray.push(...subCategories)
                toggleSubCategoriesBtn = false
            }
        }
        // Add a popup that warns the user to select a category if nothing was displayed
        // update visibility
        setisSubCatBtnVisible(toggleSubCategoriesBtn)

        //Change list to subcategories
        setSubCategoryElts(subCategoryArray)
    }
    // Return to primary category list
    const handlePrimCategory = () => {
        setisSubCatBtnVisible(true)
    }
    return (
    <div className={styles.content}>
        <button className={styles.primCategory}
        onClick={handlePrimCategory}> 
            {isSubCatBtnVisible ? 
                (
                <p className={styles.selectBtnText}>Select</p>
                ) : (
                <p className={styles.primCategoryText}>{'>> Primary Category'}</p>  
                )
            }
        </button>
        <ThemeProvider theme={createTheme()}>
            <div className={styles.dropDown}>
                <div className = {styles.dropDownContent}>
                {isSubCatBtnVisible ? (Array.from(categories.keys()).map((category) => (
                    <div
                    key={category}
                    onClick={() => handleToggle(category)}
                    className={`${styles.item} ${isSelected(category) ? styles.itemSelected: ''}`}
                    >
                    {category}
                    </div>
                ))
                ) : (
                // Displays the subcategories when the button is clicked
                subCategoryElts.map((subCat, index) => (
                    <div key={index} 
                    className={styles.subCatItems}>
                        {subCat}
                    </div>
                ))
                )}
                </div>
            </div>
        </ThemeProvider>
        {isSubCatBtnVisible && 
        <button className={styles.subCategory}
        onClick={() => handleSubCategory(categories)}>
            {'Sub-Category>>'}
        </button>}
    </div>
    );
}
export default CategoryFilter