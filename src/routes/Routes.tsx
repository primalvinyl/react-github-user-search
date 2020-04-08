import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from '../components/presentation/Fallback';
const SearchPage = React.lazy(() => import('./SearchPage'));
const UserPage = React.lazy(() => import('./UserPage'));

const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Fallback/>}>
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
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;
