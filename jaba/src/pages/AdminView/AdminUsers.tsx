import React, { useState } from 'react';
import UserTable from './UserTable';
import UserInfo from './UserInfo';
import WarningPopup from './WarningPopup';
import { User } from '../../models/User'
import Styles from './AdminUsers.module.css'


const AdminUsers: React.FC = () => {

  const [users, setUsers] = useState<User[]>([
    {
        "id":"1", 
        "name":"hello world",
        "address":"",
        "admin": true,
        "agency":"",
        "email":"example@example.com",
        "phone":"571-442-7276",
        "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    },
    {
      "id":"2", 
      "name":"jon",
      "address":"1836 Metzerott Rd, Apt 1127, Adelphi MD, 20783",
      "admin": true,
      "agency":"",
      "email":"example@example.com",
      "phone":"571-442-7276",
      "title":"mr"
    }
  ]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showSelectedUser, setShowSelectedUser] = useState<boolean>(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState<boolean>(false);

  let onClose = () => {
    setSelectedUser(null);
    setShowDeleteWarning(false);
    setShowSelectedUser(false);
  }

  let onDelete = () => {
    setShowSelectedUser(false);
    setShowDeleteWarning(true);
  }

  let onSelectUser = (user: User) => {
    setShowSelectedUser(true);
    setShowDeleteWarning(false);
    setSelectedUser(user);
  }

  return (
    <div className={Styles.adminPage}>
      <div className = {Styles.table}>
         <UserTable users={users} setUsers = {setUsers} onSelect={onSelectUser}/>
      </div>
      <div className={Styles.sidebar}>
        <button className= {Styles.button}>Sort</button>
        <button className= {Styles.button}>Add User</button>
     </div>
        {showSelectedUser && selectedUser && <div className={Styles.popup}><UserInfo user={selectedUser} onClose = {onClose} onEdit={() => {}} onDelete={() => onDelete()} /></div>}
        {showDeleteWarning && <div className={Styles.popup}><WarningPopup onCancel={() => setShowDeleteWarning(false)} onConfirm={() => {}} /></div>}
    </div>
  );
}

export default AdminUsers;
