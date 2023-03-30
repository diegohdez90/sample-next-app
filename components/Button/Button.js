import React from 'react';
import Link from 'next/link';

import classes from './Button.module.css';

const Button = (props) => {
    if(props.href) {
        return (<React.Fragment>
            <Link className={`${classes.btn} ${classes.info}`} href={props.href}>
                <span>{props.label}</span> {props.iconRight}
            </Link>
        </React.Fragment>);
    }

    return (<React.Fragment>
        <button className={`${classes.btn} ${classes.info}`} onClick={props.onClick}>{props.children}</button>
    </React.Fragment>)
}

export default Button;
