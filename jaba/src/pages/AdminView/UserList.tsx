import { User } from '../../models/User'

type UserListProps = {
    users: User[];
    onSelect: (user: User) => void;
};

const UserList: React.FC<UserListProps> = ({ users, onSelect }) => {
    return (
      <div className="user-list">
        {users.map(user => (
          <div className = "single-user" key={user.id} onClick={() => onSelect(user)}>
            <div className = "user-name">
              {user.name}
             </div>
            <div className = "user-role">
              {user.title}
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default UserList;
  