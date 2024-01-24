import React from 'react';
import AdminUsers from './AdminUsers';
import Styles from './AdminPage.module.css';

const MainPage: React.FC = () => {
  return (

    <div className={Styles.adminUsersPage}>
      <AdminUsers />
    </div>
  );
}

export default MainPage;