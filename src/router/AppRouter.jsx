import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Create } from '../components/crud/Create';
import { Manage } from '../components/crud/Manage';
import { Navbar } from '../components/shared/Navbar';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:id" component={Create} />
                    <Route path="/manage" component={Manage} />
                    <Redirect to="/manage" />
                </Switch>
            </div>
        </Router>
    )
}








