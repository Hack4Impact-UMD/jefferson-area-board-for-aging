import { useState, useEffect } from 'react';
import styles from './CategoryPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Edit from '../../assets/icons/edit.png';
import Trash from '../../assets/icons/trash.png';
import Back from '../../assets/icons/backIcon.png';
import Plus from '../../assets/icons/plusSign.png';
import Left from '../../assets/icons/arrow-left.png';
import Right from '../../assets/icons/arrow-right.png';
import { Pagination, PaginationItem } from '@mui/material';

const CategoryPage = () => {
    const categories = [
      {name: 'Primary Category Name', classification: 'None'}, 
      {name: 'Mortgage', classification: 'Finance'}, 
      {name: 'Social Services', classification: 'Child Care'},
      {name: 'Primary Category Name2', classification: 'None'}, 
      {name: 'Mortgage2', classification: 'Finance'}, 
      {name: 'Social Services2', classification: 'Child Care'}
    ]

    // useEffect(() => {
    //   getCategories()
    //     .then((allUsers) => {
    //       setCategories(allUsers);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       alert(error);
    //     });
    // }, []);

    // const categories = [];

    
    const handleClick = () => {
    };

    const isAdmin = true;
    const props = {isAdmin};

    return (
      <>
        <NavBar {...props}/>
        <div className={styles.background}>
          <div className={styles.innerBackground}>
            <div className={styles.backLink}>
              <a href=''>
                <img src={Back}/>
                <span>Back</span>
              </a>
            </div>
            <div className={styles.innerBox}>
              <div className={styles.topPart}>
                <thead className={styles.topPart2}>
                    <td className={styles.screens}>Category Name</td>
                    <td className={styles.screens}>Classification</td>
                    <td className={styles.screens}></td>
                </thead>
              </div>
              <div className={styles.bottomPart}>
                <tbody className={styles.bottomPart2}>
                  {
                  categories.map(category => {
                    return (
                      <tr className={styles.row}>
                        <td className={styles.screens}>{category.name}</td>
                        <td className={styles.screens}>{category.classification}</td>
                        <td className={styles.screens}>
                          <a className={styles.icons} href="/edit">
                            <img src={Edit}/>
                          </a>
                          <a className={styles.icons} href="/delete?">
                            <img src={Trash}/>
                          </a>
                        </td>
                      </tr>
                      )
                    })
                  }
                </tbody>
                <div className={styles.bottomNav}>
                  <div className={styles.screens}>
                  </div>
                  <div className={styles.screens}>
                  <Pagination
                    count={10}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: (props) => 
                            <button {...props}>
                              <img src={Left}/>
                            </button>,
                          next: (props) => 
                            <button {...props}>
                              <img src={Right}/>
                            </button>
                        }}
                        {...item}
                      />
                    )}
                  />
                  </div>
                  <div className={styles.screens}>
                    <button className={styles.button} onClick={handleClick}>
                      <img src={Plus}/>
                      <span>Add New</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CategoryPage;