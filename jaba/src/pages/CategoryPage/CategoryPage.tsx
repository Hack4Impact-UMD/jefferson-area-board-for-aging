import { useState, useEffect } from 'react';
import styles from './CategoryPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Edit from '../../assets/icons/edit.png'
import Trash from '../../assets/icons/trash.png'

const CategoryPage = () => {
    const handleClick = () => {
    };

    // const [categories, setCategories] = useState<Category[]>([]);

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
                <thead className={styles.topPart2}>
                    <td className={styles.screens}>Category Name</td>
                    <td className={styles.screens}>Classification</td>
                    <td className={styles.screens}></td>
                </thead>
              </div>
              <div className={styles.bottomPart}>
                <tbody className={styles.bottomPart2}>
                  <tr className={styles.row}>
                    <td className={styles.screens}>Primary Category Name</td>
                    <td className={styles.screens}>None</td>
                    <td className={styles.screens}>
                      <a href="/edit">
                        <img src ={Edit}/>
                      </a>
                      <a href="/delete?">
                        <img src ={Trash}/>
                      </a>
                    </td>
                  </tr>
                </tbody>
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