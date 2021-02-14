import React from 'react';
import classes from './ToolBar.module.css';
import {NavigationItems} from "../navigationitems/NavigationItems";
import { AmplifySignOut  } from '@aws-amplify/ui-react';
import {Logo} from "../../logo/Logo";

export const ToolBar = (props) => <header className={classes.toolbar}>
    <div className={classes.logo}>
        <Logo/>
    </div>
    <nav className={classes.desktop_only}>
        <NavigationItems className={classes.vertical_menu}/>
        <AmplifySignOut style={{ marginTop: 4 }}/>
    </nav>
</header>
