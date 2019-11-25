import * as React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (): JSX.Element => {
    return (
        <div>
            <h1>404 Error</h1>
            <h3>That page does not exist</h3>
            <p>Go back <Link to="/">home</Link></p>
        </div>
    );
}

export default ErrorPage;
