import React from 'react';
import Base from "../../../hoc/Base";
import classes from './SideDrawer.module.css';
import {NavigationItems} from "../navigationitems/NavigationItems";
import {Logo} from "../../logo/Logo";

export const SideDrawer = (props) => {
    return (
        <Base>
            <div className={classes.side_drawer}>
                <div className={classes.logo}><Logo/></div>
                <nav><NavigationItems/></nav>
            </div>
        </Base>
    )
}
