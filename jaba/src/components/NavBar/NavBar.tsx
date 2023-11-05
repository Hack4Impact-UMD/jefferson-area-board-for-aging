import styles from './NavBar.module.css';
import { Component } from 'react';
import HomeBlack from '../../assets/icons/homeBlack.png';
import SettingsBlack from '../../assets/icons/settingsBlack.png';
import UsersBlack from '../../assets/icons/usersBlack.png';
import LogoutBlack from '../../assets/icons/logoutBlack.png';
import HomeWhite from '../../assets/icons/homeWhite.png';
import SettingsWhite from '../../assets/icons/settingsWhite.png';
import UsersWhite from '../../assets/icons/usersWhite.png';
import LogoutWhite from '../../assets/icons/logoutWhite.png';

class NavBar extends Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <h2 className={styles.headerStyle}>[ n a m e ]</h2>
                <div>
                    <ul>
                        <li id="homeBlock">
                            <a className={window.location.href == 'http://localhost:3000/' ? styles.blockStyle : styles.textStyle} href="/">
                                <img id="homeImg" src ={window.location.href == 'http://localhost:3000/' ? HomeWhite : HomeBlack}/>
                                <span>Home</span>
                            </a>
                        </li>
                        <li id="settingsBlock">
                            <a className={window.location.href == 'http://localhost:3000/settings' ? styles.blockStyle : styles.textStyle} href="/settings">
                                <img id="settingsImg" src ={window.location.href == 'http://localhost:3000/settings' ? SettingsWhite : SettingsBlack}/>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li id="usersBlock">
                            <a className={window.location.href == 'http://localhost:3000/users' ? styles.blockStyle : styles.textStyle} href="/users">
                                <img id="usersImg" src ={window.location.href == 'http://localhost:3000/users' ? UsersWhite : UsersBlack}/>
                                <span>Users</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.logout}>
                    <ul> 
                        <li id="logoutBlock">
                            <a id="logoutLink" className={styles.textStyle} href="/logout?">
                                <img id="logoutImg" src={LogoutBlack}/>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;