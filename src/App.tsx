import React from 'react';
import Routes from './routes/Routes';
import './styles/main.scss';
import octocat from './assets/images/Octocat.png';

const App = (): JSX.Element => {
    return (
        <div className="wrapper">
            <header>
                <div className="header-body">
                    <img src={octocat} />
                    <h1>Github User Search</h1>
                </div>
            </header>
            <main>
                <Routes />
            </main>
        </div>
    );
}

export default App;
