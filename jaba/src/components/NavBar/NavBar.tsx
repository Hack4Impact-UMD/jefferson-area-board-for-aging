import navStyles from './NavBar.module.css';
import { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className={navStyles.sidebar}>
                <h2 className={navStyles.headerStyle}>[name]</h2>
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
        );
    }
}

export default NavBar;