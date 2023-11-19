import { useState, useEffect } from 'react';
import styles from './UserDashboardPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import AdminHomeDashboard from '../../assets/adminhomedashboard.png';
import FilterIcon from '../../assets/filtericon.svg';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';

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

const UserDashboardPage = () => {
    const handleClick = () => {
    };

    const isAdmin = true;
    const props = {isAdmin};

    // task 11 start
    const [personName, setPersonName] = React.useState<string[]>([]);
    const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
    };
    // task 11 end

    return (
      <>
        <NavBar {...props}/>
        <div className={styles.background}>
            <div className={styles.innerBackground}>
                <div className={styles.topPart}>
                    <div className={styles.searchBar}>
                        <button className={styles.magnifyingGlassBox}></button>
                        <input className={styles.textBox} placeholder="" />
                        <img className={styles.filterImage} src={FilterIcon}/>
                    </div>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.screens}>
                        <p className={styles.header}>Category</p>
                        {/* task 11 start*/}
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
                                <InputLabel shrink htmlFor="select-multiple-native">
                                Native
                                </InputLabel>
                                <Select
                                multiple
                                native
                                value={personName}
                                // @ts-ignore Typings are not considering `native`
                                onChange={handleChangeMultiple}
                                label="Native"
                                inputProps={{
                                    id: 'select-multiple-native',
                                }}
                                >
                                {primary_categories.map((category) => (
                                    <option key={category} value={category}>
                                    {category}
                                    </option>
                                ))}
                                </Select>
                            </FormControl>
                        </div>
                        {/* task 11 end */}
                    </div>
                    <div className={styles.middleImageDiv}>
                        <img className={styles.middleImage} src={AdminHomeDashboard}/>
                        <button className={styles.searchButton}>Search</button>
                    </div>
                    <div className={styles.screens}>
                        <p className={styles.header}>Region</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default UserDashboardPage;