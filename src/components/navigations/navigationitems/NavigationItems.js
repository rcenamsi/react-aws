import React from 'react';
import classes from './NavigationItems.module.css';
import {NavigationItem} from './navigationitem/NavigationItem';


export const NavigationItems = (props) => <ul className={classes.navigation_items}>
    <NavigationItem link={'/'} exact>Home</NavigationItem>
    <NavigationItem link={'/todo'}>Todo</NavigationItem>
</ul>;
