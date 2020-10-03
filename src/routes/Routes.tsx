import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import UserPage from './UserPage';

const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path={'/'}
                    component={SearchPage}
                />
                <Route
                    path={'/:userName'}
                    component={UserPage}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
