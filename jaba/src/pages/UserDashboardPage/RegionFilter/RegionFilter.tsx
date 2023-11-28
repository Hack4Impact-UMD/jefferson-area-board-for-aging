import * as React from 'react';
import styles from "./RegionFilter.module.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RegionFilter = () => {

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
    
    return (
        <div>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Include National Services</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />

                </RadioGroup>
            </FormControl>

            
        </div>
    )

}

export default RegionFilter