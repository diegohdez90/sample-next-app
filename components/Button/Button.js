import React from 'react';
import Link from 'next/link';

import classes from './Button.module.css';

const Button = (props) => {
    return (<React.Fragment>
        <Link className={`${classes.btn} ${classes.info}`} href={props.href}>
            <span>{props.label}</span> {props.iconRight}
        </Link>
    </React.Fragment>);
}

export default Button;
