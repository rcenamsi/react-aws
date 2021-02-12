import React, {Component} from 'react';
import classes from './App.module.css';
import Layout from "./hoc/layout/Layout";
import {Route, Switch, Redirect} from "react-router-dom";
import Dashboard from "./containers/dashboard/Dashboard";
import Todo from "./containers/todo/Todo";
import { withAuthenticator } from '@aws-amplify/ui-react';

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path={'/todo'} component={Todo}/>
                <Route path={'/'} exact component={Dashboard}/>
                <Redirect to={'/'}/>
            </Switch>
        );
        return <Layout>{routes}</Layout>
    }
}

export default withAuthenticator(App);
