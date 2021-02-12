import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

export const NavigationItem = (props) => <li className={classes.navigation_item}>
    <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
    >
        {props.children}
    </NavLink>
</li>
