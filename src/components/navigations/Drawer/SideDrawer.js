import React from 'react';
import Base from "../../../hoc/Base";
import classes from './SideDrawer.module.css';
import {NavigationItems} from "../navigationitems/NavigationItems";
import {Logo} from "../../logo/Logo";

export const SideDrawer = (props) => {

    let attachedClasses = !props.open
        ? [classes.side_drawer, classes.open]
        : [classes.side_drawer, classes.close];

    return (
        <Base>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}><Logo/></div>
                <nav><NavigationItems/></nav>
            </div>
        </Base>
    )
}
