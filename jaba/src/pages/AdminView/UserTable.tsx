import UserList from './UserList';
import { User } from '../../models/User'
import SearchBar from '../../components/SearchBar/SearchBar'
import Paginator from '../../components/Paginator/Paginator';

import { Dispatch, SetStateAction, useState } from 'react';
import Styles from './UserTable.module.css'

type UserTableProps = {
    users: User[];
    onSelect: (user: User) => void;
    setUsers: Dispatch<SetStateAction<User[]>>;
};

let onSearch = () => {
    return;
}

let fetchUsers = () => {
    return; 
}




const UserTable: React.FC<UserTableProps> = ( {users, onSelect, setUsers} ) => {
    const [page, setPage] = useState<number>(1);

    return (
        <div>
            <div className={Styles.title}>
                <h2>Existing Users</h2>
            </div>
            <div>
                <SearchBar placeHolder = "Enter user name or role..." onSearch = {onSearch}/>
            </div>
            <div className={Styles.tableTitle}>
                <div className={Styles.tableTitleName}>Full Name</div>
                <div>Role</div>
            </div>
            <UserList users = {users} onSelect = {onSelect}/>
            <Paginator pages = {10} currPage = {page} rowsPerPage = {10} fetchUsers = {fetchUsers} setUsers = {setUsers} setPage={setPage}/>
        </div>
    );
}

export default UserTable;