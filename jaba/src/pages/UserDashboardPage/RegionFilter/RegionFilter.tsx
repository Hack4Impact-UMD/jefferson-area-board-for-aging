import * as React from 'react';
import styles from "./RegionFilter.module.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const RegionFilter = () => {
    const [selected, setSelect] = React.useState<string[]>([]);
    const [isSubCatBtnVisible, setIsSubCatBtnVisible] = React.useState(true);
    const [subCategoryElts, setSubCategoryElts] = React.useState<string[]>([]);
    const [zipInput, setZipInput] = React.useState("");

    const states = [
        "AL",
        "AK",
        "AZ",
        "AR",
        "AS",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FL"
    ]

    const districtsMapping = new Map<string, Array<string>>([
        ["A district", ["A county (D-A1)", "B county (D-A1)"]],
        ["B district 1",["C county (D-B1)", "Z county (D-B1)"]],
        ["B district 2",["D county (D-B2)", "F county (D-B2)", "G county (D-B2)"]],
        ["B district 3",["A county (D-B3)", "M county (D-B3)", "N county (D-B3)", "O county (D-B3)"]],
        ["C district",["X county (D-C1)"]],
        ["D district",[]]
    ]);

    const processCategories = (categories: string[]): { key: string, content: string | JSX.Element }[] => {
        const sortedCategories = categories.sort();
        let processedCategories: { key: string, content: string | JSX.Element }[] = [];
        let currentCharCode = 65

        let currentLetter = '';

        for (let category of sortedCategories) {
            const firstLetter = category[0].toUpperCase();
            const firstCharCode = firstLetter.charCodeAt(0);
    
            if (firstLetter !== currentLetter) {
                currentLetter = firstLetter
                // Insert the letter marker
                processedCategories.push({
                    key: `letter-${currentLetter}`,
                    content: <div className={`${styles.paragraphText} ${styles.letterMarker}`}>{currentLetter}</div>
                })
            }
    
            // Update the currentCharCode and add the category
            currentCharCode = firstCharCode + 1;
            processedCategories.push({ key: category, content: category });
        }
        return processedCategories;
    }

    // Takes in type string for category
    const handleToggle = (selection: string) => {
        // Updates the state of serviceCategory, prev is the previous state
        setSelect(prev => {
            
            // console.log("selection", selection);
            console.log("selected", selected);
            
            // don't allow simultaneous selection of states and districts
            const districts = Array.from(districtsMapping.keys());
            const counties = Array.from(districtsMapping.values()).flat(Infinity);
            if (selected.length > 0 && 
                (states.includes(selected[0]) && states.includes(selection) || 
                (districts.includes(selected[0]) || counties.includes(selected[0])) && (districts.includes(selection) || counties.includes(selection))) 
                || selected.length == 0) {
                
                // console.log("in if");

                const currentIndex = prev.indexOf(selection);
                const newChecked = [...prev];
                // Create new array that represents the list of selected categories
                if (currentIndex === -1) {
                    newChecked.push(selection);
                } else {
                    newChecked.splice(currentIndex, 1);
                }
            
                return newChecked;
                
            } 

            return prev;
            
        });
      };

    const selectAll = (group : string[]) => {
        const areAllSelected = group.every(elem => isSelected(elem));
        for (const elem of group) {
            if (areAllSelected) {
                if (isSelected(elem)) {
                    handleToggle(elem); // Deselect if all are currently selected
                }
            } else {
                if (!isSelected(elem)) {
                    handleToggle(elem); // Select if not all are currently selected
                }
            }
        }
    }

    const isSelected = (category: string) => selected.includes(category);  
    
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
        setIsSubCatBtnVisible(toggleSubCategoriesBtn)

        //Change list to subcategories
        setSubCategoryElts(subCategoryArray.sort())
    }

    // Return to primary category list
    const handlePrimCategory = () => {
        setIsSubCatBtnVisible(true)
    }

    const handleZipChange = (e: React.FormEvent<HTMLInputElement>) => {
        const numericValue = (e.currentTarget.value || "").replace(/[^0-9]/g, "");
        setZipInput(numericValue);
    }
    
    return (
        <div className={styles.content}>
            <div className={styles.nationalSection}>
                <p className={`${styles.headerText} ${styles.nationalHeader}`}>Include National Services:</p>
                <div className={`${styles.headerText} ${styles.radioBtns}`}>
                    <div>
                        <input className={styles.radioBtn} type="radio" value="yes" name='nationalTypeRadio'/>
                        <label htmlFor='radioYes'><span>Yes</span></label>
                    </div>
                    <div>
                        <input className={styles.radioBtn} type="radio" value="no" name='nationalTypeRadio'/>
                        <label htmlFor='radioNo'><span>No</span></label>
                    </div>
                    
                </div>
            </div>
            
            <div className={styles.zipSection}>
                <label className={`${styles.headerText} ${styles.zipHeader}`} htmlFor="zip-code">Zip code:</label>
                <input className={styles.zipInput} value={zipInput} onInput={handleZipChange}></input>
            </div>
            <div>
                <p className={`${styles.headerText} ${styles.stateAndDistrictHeader}`}>State:</p>
            </div>
            <div className={styles.stateAndDistrictBody}>      
                <div className={styles.stateAndDistrictTable}>
                    <button className={styles.primCategory}>
                        <p className={styles.selectBtnText}>Select</p>
                    </button>
                    <ThemeProvider theme={createTheme()}>
                        <div className={styles.dropDown}>
                            <div className = {styles.dropDownContent}>
                                {processCategories(states).map(({key, content}) => 
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
                                    ))}
                            </div>
                        </div>
                    </ThemeProvider>
                </div>
                <button 
                        className={`${styles.headerText} ${styles.selectAll}`}
                        onClick={() => selectAll(states)}
                    >
                        Select All
                </button>
            </div>

            <div className={styles.districtHeader}>
                <p className={`${styles.headerText} ${styles.stateAndDistrictHeader}`}>Planning Districts:</p>
                {selected.length > 0 && states.includes(selected[0]) && <button className={styles.alreadySelected}>State Already Selected</button>}
                {selected.length > 0 && Array.from(districtsMapping.keys()).includes(selected[0]) && <button className={styles.alreadySelected}>District Already Selected</button>}
            </div>
            <div className={styles.stateAndDistrictBody}>      
                <div className={styles.stateAndDistrictTable}>
                    <button className={styles.primCategory}
                    onClick={handlePrimCategory}> 
                        {isSubCatBtnVisible ? 
                            (
                            <p className={styles.selectBtnText}>Select</p>
                            ) : (
                            <p className={styles.primCategoryText}>{'<< Planning District'}</p>  
                            )
                        }
                    </button>
                    <ThemeProvider theme={createTheme()}>
                        <div className={styles.dropDown}>
                            <div className = {styles.dropDownContent}>
                            {isSubCatBtnVisible ? (processCategories(Array.from(districtsMapping.keys())).map(({key, content}) => 
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
                                            <div
                                            key={key}
                                            onClick={() => handleToggle(content as string)}
                                            className={`${styles.item} ${isSelected(content as string) ? styles.itemSelected: ''}`}
                                            >
                                                {content}
                                            </div>
                                        )
                                    }
                                })
                            )}
                            </div>
                        </div>
                    </ThemeProvider>
                    
                </div>
                
                <button 
                        className={`${styles.headerText} ${styles.selectAll}`}
                        onClick={() => selectAll(Array.from(districtsMapping.keys()))}
                    >
                        Select All
                </button>
            </div>
            {isSubCatBtnVisible && 
                    <button className={styles.subCategory}
                    onClick={() => handleSubCategory(districtsMapping)}>
                        {'County >>'}
                </button>}
        </div>
    )

}

export default RegionFilter