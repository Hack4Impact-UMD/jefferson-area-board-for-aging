import React, { useState, useEffect } from 'react';
import styles from './CategoryPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Edit from '../../assets/icons/edit.png';
import Trash from '../../assets/icons/trash.png';
import Back from '../../assets/icons/backIcon.png';
import Plus from '../../assets/icons/plusSign.png';
import Left from '../../assets/icons/arrow-left.png';
import Right from '../../assets/icons/arrow-right.png';
import { Pagination, PaginationItem, TablePagination } from '@mui/material';

const CategoryPage = () => {
  // create a sample categories data structure
  const categories = [
    {name: 'Primary Category Name', classification: 'None'}, 
    {name: 'Mortgage', classification: 'Finance'}, 
    {name: 'Social Services', classification: 'Child Care'},
    {name: 'Primary Category Name2', classification: 'None'}, 
    {name: 'Mortgage2', classification: 'Finance'}, 
    {name: 'Social Services2', classification: 'Child Care'},
    {name: 'Primary Category Name3', classification: 'None'}, 
    {name: 'Mortgage3', classification: 'Finance'}, 
    {name: 'Social Services3', classification: 'Child Care'},
    {name: 'Primary Category Name4', classification: 'None'}, 
    {name: 'Mortgage4', classification: 'Finance'}, 
    {name: 'Social Services4', classification: 'Child Care'}
  ];

  // useEffect(() => {
  //   getCategories()
  //     .then((allCategories) => {
  //       setCategories(allCategories);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error);
  //     });
  // }, []);

  // const categories = [];

  const [page, setPage] = useState(0);
  
  const maxRowsPerPage = 1; // can adjust the way maxRowsPerPage is decided
  const [rowsPerPage, setRowsPerPage] = useState(maxRowsPerPage);

  const handleChangePage = (event: any, newPage : any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string | number; }; }) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // slice the categories array according to rowsPerPage and the current page number
  const categoriesMap = categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(category => {
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
  });
  
  const handleClick = () => { // for "add category" button
  };

  const isAdmin = true; // only admin can view the category page
  const props = {isAdmin}; // for navbar

  const overrideStyles = { // for changing the style of mui component itself
    "& .MuiTablePagination-displayedRows": { display: "none" }, 
    "& .MuiTablePagination-spacer": { display: "none" }
  };

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
              <tbody className={styles.tableDisplay}>
                {categoriesMap}
              </tbody>
              <div className={styles.bottomNav}>
                <div className={styles.screens}>
                </div>
                <div className={styles.screens}>
                  <TablePagination 
                    count={categories.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[maxRowsPerPage]}
                    sx={overrideStyles} 
                    className={styles.paginationOverall}
                    ActionsComponent={(props) => {
                      return (
                        <Pagination
                          count={Math.ceil(categories.length / rowsPerPage)}
                          page={page + 1} // adjust for 1-based index
                          onChange={(event, value) => handleChangePage(null, value - 1)} // adjust for 0-based index
                          renderItem={(item) => (
                            <PaginationItem className={item.selected ? styles.pagination2 : styles.pagination}
                              slots={{
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
                              onClick={(e) => {
                                item.onClick && item.onClick(e);
                                item.page != null && handleChangePage(e, item.page - 1); // check for null before accessing item.page
                              }}
                            />
                          )}
                        />
                      );
                    }}
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