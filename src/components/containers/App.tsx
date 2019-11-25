import * as React from 'react';
import Routes from '../../routes/Routes';
import '../../styles/main.scss';
import octocat from '../../assets/images/Octocat.png';

export default class App extends React.Component {
    constructor(props: object) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="wrapper">
                <header>
                    <div className="header-body">
                        <img src={octocat} />
                        <h1>Github User Search</h1>
                    </div>
                </header>
                <main>
                    <Routes { ...this.props } />
                </main>
            </div>
        );
    }
}
