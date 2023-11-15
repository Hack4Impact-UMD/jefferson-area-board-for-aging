import styles from './NavBar.module.css';
import HomeBlack from '../../assets/icons/homeBlack.png';
import SettingsBlack from '../../assets/icons/settingsBlack.png';
import UsersBlack from '../../assets/icons/usersBlack.png';
import LogoutBlack from '../../assets/icons/logoutBlack.png';
import HomeWhite from '../../assets/icons/homeWhite.png';
import SettingsWhite from '../../assets/icons/settingsWhite.png';
import UsersWhite from '../../assets/icons/usersWhite.png';
import LogoutWhite from '../../assets/icons/logoutWhite.png';

const NavBar = (props: any) => {
    

        return (
            <div className={styles.sidebar}>
                <h2 className={styles.headerStyle}>[ n a m e ]</h2>
                <div>
                    <ul>
                        <li>
                            <a className={window.location.href == 'http://localhost:3000/' ? styles.blockStyle : styles.textStyle} href="/">
                                <img src ={window.location.href == 'http://localhost:3000/' ? HomeWhite : HomeBlack}/>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a className={window.location.href == 'http://localhost:3000/settings' ? styles.blockStyle : styles.textStyle} href="/settings">
                                <img src ={window.location.href == 'http://localhost:3000/settings' ? SettingsWhite : SettingsBlack}/>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            {props.admin && (<a className={window.location.href == 'http://localhost:3000/users' ? styles.blockStyle : styles.textStyle} href="/users">
                                <img src ={window.location.href == 'http://localhost:3000/users' ? UsersWhite : UsersBlack}/>
                                <span>Users</span>
                            </a>)}
                        </li>
                    </ul>
                </div>
                <div className={styles.logout}>
                    <ul> 
                        <li>
                            <a className={styles.textStyle} href="/logout?">
                                <img src={LogoutBlack}/>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }


export default NavBar;