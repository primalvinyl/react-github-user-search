import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import SearchPage from './SearchPage';
import UserPage from './UserPage';
import ErrorPage from './ErrorPage';

const Routes = (props: object): JSX.Element => {
    return (
        <Router>
            <Switch>
            <   Route
                    exact
                    path={'/:userName'}
                    render={(routerProps): JSX.Element => <UserPage { ...props } { ...routerProps } />}
                />
                <Route
                    exact
                    path={'/'}
                    render={(routerProps): JSX.Element => <SearchPage { ...props } { ...routerProps } />}
                />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    )
}

export default Routes;
