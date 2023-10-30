import navStyles from './NavBar.module.css';
import { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className={navStyles.sidebar}>
                <h2 className={navStyles.headerStyle}>[name]</h2>
                <div>
                    <ul>
                        <li>
                            <a className={navStyles.textStyle} href="/">Home</a>
                        </li>
                        <li>
                            <a className={navStyles.textStyle} href="/settings">Settings</a>
                        </li>
                        <li>
                            <a className={navStyles.textStyle} href="/users">Users</a>
                        </li>
                    </ul>
                </div>
                <div className={navStyles.logout}>
                    <ul> 
                        <li>
                            <a className={navStyles.textStyle} href="/logout?">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;