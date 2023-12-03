import * as React from 'react';
import styles from "./RegionFilter.module.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RegionFilter = () => {
    const [selected, setSelect] = React.useState<string[]>([])

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

    const districts = [
        "A district",
        "B district 1",
        "B district 2",
        "B district 3",
        "C district",
        "D district"
    ]

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
            // console.log("selected", selected);
            
            // don't allow simultaneous selection of states and districts
            if (selected.length > 0 && (states.includes(selected[0]) && states.includes(selection) || 
                districts.includes(selected[0]) && districts.includes(selection)) || selected.length == 0) {
                
                console.log("in if");

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
    
    const selectAllStates = () => {
        const areAllSelected = states.every(state => isSelected(state));
        for (const state of states) {
            if (areAllSelected) {
                if (isSelected(state)) {
                    handleToggle(state); // Deselect if all are currently selected
                }
            } else {
                if (!isSelected(state)) {
                    handleToggle(state); // Select if not all are currently selected
                }
            }
        }
    }

    const selectAllDistricts = () => {
        const areAllSelected = districts.every(district => isSelected(district));
        for (const district of districts) {
            if (areAllSelected) {
                if (isSelected(district)) {
                    handleToggle(district); // Deselect if all are currently selected
                }
            } else {
                if (!isSelected(district)) {
                    handleToggle(district); // Select if not all are currently selected
                }
            }
        }
    }
    
    const isSelected = (category: string) => selected.includes(category);    
    
    return (
        <div className={styles.content}>
            <div className={styles.nationalServices}>
                <p className={`${styles.headerText} ${styles.nationalServicesHeader}`}>Include National Services</p>
                <div className={`${styles.headerText} ${styles.radioBtn}`}>
                    <div>
                        <input type="radio" value="yes" name='nationalTypeRadio'/>
                        <label htmlFor='radioYes'><span className='radiobtn'>Yes</span></label>
                    </div>
                    <div>
                        <input type="radio" value="no" name='nationalTypeRadio'/>
                        <label htmlFor='radioNo'><span className='radiobtn'>No</span></label>
                    </div>
                    
                </div>
            </div>
            
            <div className={styles.zip}>
                <label className={`${styles.headerText} ${styles.ziptext}`} htmlFor="zip-code">Zip code:</label>
                <input className={styles.zipcode}></input>
            </div>
            <div>
                <p className={`${styles.headerText} ${styles.stateHeader}`}>State:</p>
            </div>
            <div className={styles.stateBody}>      
                <div className={styles.stateTable}>
                    <div className={`${styles.paragraphText} ${styles.selectBtnText}`}>
                        <p className={styles.textSelect}>Select</p>
                    </div>
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
                        onClick={() => selectAllStates()}
                    >
                        Select All
                </button>
            </div>

            <div className={styles.districtBlock}>
                <p className={`${styles.headerText} ${styles.stateHeader}`}>Planning Districts:</p>
                {selected.length > 0 && states.includes(selected[0]) && <button className={styles.alreadySelected}>State Already Selected</button>}
                {selected.length > 0 && districts.includes(selected[0]) && <button className={styles.alreadySelected}>District Already Selected</button>}
            </div>
            <div className={styles.stateBody}>      
                <div className={styles.stateTable}>
                    <div className={`${styles.paragraphText} ${styles.selectBtnText}`}>
                        <p className={styles.textSelect}>Select</p>
                    </div>
                    <ThemeProvider theme={createTheme()}>
                        <div className={styles.dropDown}>
                            <div className = {styles.dropDownContent}>
                                {processCategories(districts).map(({key, content}) => 
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
                        onClick={() => selectAllDistricts()}
                    >
                        Select All
                </button>
            </div>
        </div>
    )

}

export default RegionFilter