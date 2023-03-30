import { Fragment } from 'react';
import Link from 'next/link';

import classes from './Header.module.css';

const Header = () => {
    return (<Fragment>
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>Next Events</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li><Link href='/events'>All Events</Link></li>
                </ul>
            </nav>
        </header>
    </Fragment>)
}

export default Header;
