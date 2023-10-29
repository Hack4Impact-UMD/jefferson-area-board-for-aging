import React from 'react';
import AdminUsers from './AdminUsers';
import './style.css';

const MainPage: React.FC = () => {
  return (
    <div className = "admin-users-page">
      <AdminUsers />
    </div>
  );
}

export default MainPage;