import React, {Component} from 'react';
import classes from './Layout.module.css';
import Base from "../Base";
import {ToolBar} from "../../components/navigations/toolbar/ToolBar";
import {SideDrawer} from "../../components/navigations/Drawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: true
    };

    render() {
        return <Base>
            <ToolBar/>
            <SideDrawer/>
            <main className={classes.layout_content}>{this.props.children}</main>
        </Base>;
    }
}

export default Layout;
