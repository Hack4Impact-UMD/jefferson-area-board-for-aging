import UserList from './UserList';
import { User } from '../../models/User'
import SearchBar from '../SharedComponents/SearchBar'
import Paginator from '../SharedComponents/Paginator';
import { Dispatch, SetStateAction, useState } from 'react';

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
            <div>
                <h2>Existing Users</h2>
            </div>
            <div>
                <SearchBar placeHolder = "Enter user name or role..." onSearch = {onSearch}/>
            </div>
            <div className ="table-title">
                <div className="table-title-name">Full Name</div>
                <div>Role</div>
            </div>
            <UserList users = {users} onSelect = {onSelect}/>
            <Paginator pages = {10} currPage = {page} rowsPerPage = {10} fetchUsers = {fetchUsers} setUsers = {setUsers} setPage={setPage}/>
        </div>
    );
}

export default UserTable;