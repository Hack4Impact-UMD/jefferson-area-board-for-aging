import * as React from 'react';
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import Autocomplete, { AutocompleteRenderOptionState } from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styles from "./CategoryFilter.module.css"

const CategoryFilter = () => {
    const [serviceCategory, setServiceCategory] = React.useState<string[]>([])
    const [dropDownOpen, setDropDownOpen] = React.useState(false)

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
    ]);
    
    let primary_categories = Array.from(categories.keys())

    const handleToggle = (category: string) => {
        setServiceCategory(prev => {
          const currentIndex = prev.indexOf(category);
          const newChecked = [...prev];
    
          if (currentIndex === -1) {
            newChecked.push(category);
          } else {
            newChecked.splice(currentIndex, 1);
          }
    
          return newChecked;
        });
      };
      const isSelected = (category: string) => serviceCategory.includes(category);
    
      return (
        <ThemeProvider theme={createTheme()}>
            <div className={styles.dropDown}>
                <div className = {styles.dropDownContent}
                style={{ height: 300, overflowY: 'auto', marginTop: 10 }}>
                {Array.from(categories.keys()).map((category) => (
                    <div
                    key={category}
                    onClick={() => handleToggle(category)}
                    style={{
                        padding: '10px',
                        margin: '5px',
                        cursor: 'pointer',
                        backgroundColor: isSelected(category) ? '#e0e0e0' : 'transparent'
                    }}
                    >
                    {category}
                    </div>
                ))}
                </div>
            </div>
        </ThemeProvider>
        // <ThemeProvider theme={createTheme()}>
        //   <div style={{ display: 'flex', flexDirection: 'column' }}>
        //     <TextField
        //       id="filter-input"
        //       variant="outlined"
        //       label="Select Names"
        //       placeholder="Names"
        //       value={serviceCategory.join(', ')}
        //     />
        //     <FormGroup>
        //         {Array.from(categories.entries()).map(([category, subcategories]) => (
        //             // Render category and optionally its subcategories
        //             <React.Fragment key={category}>
        //             <FormControlLabel
        //                 control={
        //                 <Checkbox
        //                     checked={serviceCategory.includes(category)}
        //                     onChange={() => handleToggle(category)}
        //                 />
        //                 }
        //                 label={category}
        //             />
        //             {/* Render subcategories if needed */}
        //             {subcategories.map(subcategory => (
        //                 <FormControlLabel
        //                 key={subcategory}
        //                 control={
        //                     <Checkbox
        //                     checked={serviceCategory.includes(subcategory)}
        //                     onChange={() => handleToggle(subcategory)}
        //                     />
        //                 }
        //                 label={`- ${subcategory}`}
        //                 />
        //             ))}
        //             </React.Fragment>
        //         ))}
        //     </FormGroup>
        //   </div>
        // </ThemeProvider>
      );
    
    // const options = Array.from(categories.entries()).flatMap(([category, subcategories]) => {
    //     return subcategories.length > 0 ? subcategories.map(sub => `${category} - ${sub}`) : category;
    // });

    // return (
    //     <ThemeProvider theme={createTheme()}>
    //       <Autocomplete
    //         multiple
    //         id="tags-autocomplete"
    //         options={options}
    //         getOptionLabel={(option) => option}
    //         value={serviceCategory}
    //         open={dropDownOpen}
    //         onOpen={() => setDropDownOpen(true)}
    //         onChange={(event, newValue) => {
    //             setServiceCategory(newValue);
    //             // Prevent the dropdown from closing after selection
    //             setDropDownOpen(true)
    //         }}
    //         onClose={(event, selecting) => {
    //             // Only close the dropdown after clicking outside of the component
    //             if (selecting === 'toggleInput' || selecting === 'blur') {
    //                 setDropDownOpen(false)
    //             }
    //         }}
    //         renderInput={(params) => (
    //           <TextField
    //             {...params}
    //             variant="outlined"
    //             label="Select Names"
    //             placeholder="Names"
    //           />
    //         )}
    //         // Ensure tags are not prompted on the top of the selection
    //         renderTags={() => []}
      
    //       />
    //     </ThemeProvider>
    // )

}
export default CategoryFilter

// // task 11 start
// const [personName, setPersonName] = React.useState<string[]>([]);
// const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
// const { options } = event.target;
// const value: string[] = [];
// for (let i = 0, l = options.length; i < l; i += 1) {
//   if (options[i].selected) {
//     value.push(options[i].value);
//   }
// }
// setPersonName(value);
// };
// task 11 end

//  {/* task 11 start*/}
//  <div>
//  <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
//      <InputLabel shrink htmlFor="select-multiple-native">
//      Native
//      </InputLabel>
//      <Select
//      multiple
//      native
//      value={personName}
//      // @ts-ignore Typings are not considering `native`
//      onChange={handleChangeMultiple}
//      label="Native"
//      inputProps={{
//          id: 'select-multiple-native',
//      }}
//      >
//      {primary_categories.map((category) => (
//          <option key={category} value={category}>
//          {category}
//          </option>
//      ))}
//      </Select>
//  </FormControl>
// </div>
// {/* task 11 end */}