import { User } from '../../models/User'
import Styles from './AdminPage.module.css'

type UserListProps = {
    users: User[];
    onSelect: (user: User) => void;
};

const UserList: React.FC<UserListProps> = ({ users, onSelect }) => {
    return (
      <div className={Styles.userList}>
        {users.map(user => (
          <div className = {Styles.singleUser} key={user.id} onClick={() => onSelect(user)}>
            <div className = {Styles.userName}>
              {user.name}
             </div>
            <div className = {Styles.userRole}>
              {user.title}
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default UserList;
  