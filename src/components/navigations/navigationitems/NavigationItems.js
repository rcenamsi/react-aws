import React from 'react';
import classes from './NavigationItems.module.css';
import {NavigationItem} from './navigationitem/NavigationItem';
import { AmplifySignOut  } from '@aws-amplify/ui-react';


export const NavigationItems = (props) => <ul className={classes.navigation_items}>
    <NavigationItem link={'/'} exact>Home</NavigationItem>
    <NavigationItem link={'/todo'}>Todo</NavigationItem>
    <AmplifySignOut/>
</ul>;
