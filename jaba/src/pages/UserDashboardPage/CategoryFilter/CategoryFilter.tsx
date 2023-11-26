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

    // Assume that the categories we have entered are in sorted order, at least by first letter
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
    
    const processCategories = (categories: string[]): { key: string, content: string | JSX.Element }[] => {
        const sortedCategories = categories.sort();
        let processedCategories: { key: string, content: string | JSX.Element }[] = [];
        let currentCharCode = 65

        let currentLetter = '';

        for (let category of sortedCategories) {
            const firstLetter = category[0].toUpperCase();
            const firstCharCode = firstLetter.charCodeAt(0);
    
            // Fill in the gaps with letter markers
            while (currentCharCode < firstCharCode) {
                const letter = String.fromCharCode(currentCharCode);
                processedCategories.push({
                    key: `letter-${letter}`,
                    content: <div className={styles.letterMarker}>{letter}</div>
                });
                currentCharCode++;
            }
            if (firstLetter !== currentLetter) {
                currentLetter = firstLetter
                // Insert the letter marker
                processedCategories.push({
                    key: `letter-${currentLetter}`,
                    content: <div className={styles.letterMarker}>{currentLetter}</div>
                })
            }
    
            // Update the currentCharCode and add the category
            currentCharCode = firstCharCode + 1;
            processedCategories.push({ key: category, content: category });
        }
    
        // Fill in any remaining letters after the last category
        while (currentCharCode <= 90) { // 'Z' ASCII code
            const letter = String.fromCharCode(currentCharCode);
            processedCategories.push({
                key: `letter-${letter}`,
                    content: <div className={styles.letterMarker}>{letter}</div>
            });
            currentCharCode++;
        }
        return processedCategories;
    }    

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
        setSubCategoryElts(subCategoryArray.sort())
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
                    {isSubCatBtnVisible ? (processCategories(Array.from(categories.keys())).map(({key, content}) => 
                        React.isValidElement(content) ? (
                            <div key={key}>{content}</div>
                        ) : (
                            <div
                            key={key}
                            onClick={() => handleToggle(content as string)}
                            className={`${styles.item} ${isSelected(content as string) ? styles.itemSelected: ''}`}
                            >
                            {content}
                            </div>
                        ))
                    ) : (
                        processCategories(subCategoryElts).map(({key, content}) => {
                            if ( React.isValidElement(content)) {
                                return <div key={key}>{content}</div>
                            } else {
                                return (
                                    <div key={key} className={styles.subCatItems}>
                                        {content}
                                    </div>
                                )
                            }
                        })
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