import { useState, useEffect } from 'react';
import styles from './CategoryPage.module.css';
import NavBar from '../../components/NavBar/NavBar';

const CategoryPage = () => {
    const handleClick = () => {
    };

    const isAdmin = true;
    const props = {isAdmin};

    return (
      <>
        <NavBar {...props}/>
        <div className={styles.background}>
          <div className={styles.innerBackground}>
            <div className={styles.backButton}>

            </div>
            <div className={styles.innerBox}>
              <div className={styles.topPart}>
                <div className={styles.screens}>
                </div>
                <div className={styles.screens}>
                </div>
                <div className={styles.screens}>
                </div>
              </div>
              <div className={styles.bottomPart}>
                <div className={styles.list}>
                  <div className={styles.screens}>
                  </div>
                  <div className={styles.screens}>
                  </div>
                  <div className={styles.screens}>
                  </div>
                </div>
                <div className={styles.bottomNav}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CategoryPage;