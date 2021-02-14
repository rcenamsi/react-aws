import React, {Component} from 'react';
import classes from './Layout.module.css';
import Base from "../Base";
import {ToolBar} from "../../components/navigations/toolbar/ToolBar";

class Layout extends Component {

    state = {
        showSideDrawer: true
    };

    sideDrawerHandler = (e) => {

    }

    render() {
        return <Base>
            <ToolBar/>
            <main className={classes.layout_content}>{this.props.children}</main>
        </Base>;
    }
}

export default Layout;
