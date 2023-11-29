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
        <div className={styles.content}>
            <div className={styles.nationalServices}>
                <p className={styles.nationalServicesHeader}>Include National Services</p>
                <div className={styles.nationalServicesRadio}>
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
                <label className={styles.ziptext} htmlFor="zip-code">Zip code</label>
                <input className={styles.zipcode}></input>
            </div>
            

        </div>
    )

}

export default RegionFilter