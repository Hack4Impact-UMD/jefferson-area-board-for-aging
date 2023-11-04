import navStyles from './NavBar.module.css';
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
            <div className={navStyles.sidebar}>
                <h2 className={navStyles.headerStyle}>[name]</h2>
                <div>
                    <ul>
                        <li>
                            <a className={navStyles.textStyle} href="/">
                                <img src={HomeBlack}/>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a className={navStyles.textStyle} href="/settings">
                                <img src={SettingsBlack}/>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a className={navStyles.textStyle} href="/users">
                                <img src={UsersBlack}/>
                                <span>Users</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={navStyles.logout}>
                    <ul> 
                        <li>
                            <a className={navStyles.textStyle} href="/logout?">
                                <img src={LogoutBlack}/>
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