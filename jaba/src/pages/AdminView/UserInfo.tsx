import { User } from '../../models/User'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

type UserInfoProps = {
    user: User;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
  };

const UserInfo: React.FC<UserInfoProps> = ({ user, onClose, onEdit, onDelete }) => {
  return(
    <div style={styles.popupContainer}>
    <div onClick={onClose}>
      <FontAwesomeIcon icon={icon({name: 'x'})} />
    </div>
    <div style={styles.header}>
      <span style={styles.userIcon}>👤</span>
      <h2 style={styles.userName}>{user.name}</h2>
      <span style={styles.icon} onClick={onEdit}>✏️</span>
      <span style={styles.icon} onClick={onDelete}>🗑️</span>
    </div>
    <div style={styles.detailRow}>
      <span style={styles.textTitle}>Role:</span>
      <span>{user.title}</span>
    </div>
    <div style={styles.detailRow}>
      <span style={styles.textTitle}>Organization:</span>
      <span style={styles.text}>{user.name}</span>
    </div>
    <div style={styles.detailRow}>
      <span style={styles.textTitle}>Address:</span>
      <span>{user.address}</span>
    </div>
    <div style={styles.detailRow}>
      <span style={styles.textTitle}>Phone:</span>
      <span>{user.phone}</span>
    </div>
    <div style={styles.detailRow}>
      <span style={styles.textTitle}>Email:</span>
      <span>{user.email}</span>
    </div>
  </div>
  );
  }
  
  export default UserInfo;
  
  const styles: { [key: string]: React.CSSProperties } = {
    popupContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      width: '600px',
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop:'16px'
    },
    userIcon: {
      fontSize: '40px'
    },
    userName: {
      flexGrow: 2,
      textAlign: 'center'
    },
    icon: {
      cursor: 'pointer',
      marginLeft: '10px'
    },
    detailRow: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      padding:'4px'
    },
    textTitle: {
      fontWeight: 'bold',
      width: '100px',
      marginRight:'12px'
    },
  };