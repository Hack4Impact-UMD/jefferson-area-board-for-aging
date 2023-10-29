import { getUsers, addSampleUser } from '../backend/firestoreFunctions';

import { useState, useEffect, Component, MouseEvent } from 'react';
import { User } from '../models/User';
import styles from "./CategoryFilter.module.css"
import { QueryStartAtConstraint } from 'firebase/firestore';
const CategoryFilter = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [items, setItems] = useState(['Acategory 1', 'Acategory 2', 'Acategory 3', 'Bcategory1', 'Bcategory2', 
                                'Ccategory1', 'Pcategory1', 'Zcategory1']) //items within the table for firebase
    const searchElement = (elt: MouseEvent) => {
        const query = elt.target.value
        setSearchTerm(query)
        setItems(fetchSearchResults(query))
    }

    const fetchSearchResults = (query) => {
        //Conducts the searching to filter the list
        if (query.length == 0) {
            return items
        } else {
            return items.filter(item => item.toLowerCase().includes(query.toLowerCase()))
        }
    }
    const handleClick = (item:string) => {

    }

    return (
        <div className="filter-page">
            <h1 className={styles.header}>Category</h1>
            <input type="text" className={styles.searchbar} placeholder="Select" value={searchTerm} onChange={searchElement}></input>
            <div className={styles.tablediv}>
                <table className="results-table">
                    <tbody>
                        {items.map ((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className={styles.element}>
                                        <button onClick={() => handleClick(item)}>
                                            {item}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CategoryFilter