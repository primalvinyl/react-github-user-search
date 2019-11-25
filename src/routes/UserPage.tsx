import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserData } from '../actions';
import { Dispatch, Action } from 'redux';
import { AppState } from '../reducers/index';
import TableElement from '../components/presentation/TableElement';

/**
 * TODO: Tables on this page only load top 5 rows
 * should load all rows and scroll/paginate
*/

const userColumns = [
    {
        Header: 'Avatar',
        accessor: 'avatar_url',
        Cell: row => <img src={row.value} />
    },
    {
        Header: 'Account Name',
        accessor: 'login',
        Cell: row => <a href={row.original.html_url} target="_blank" rel="noopener noreferrer">{row.value}</a>
    }
];

const repoColumns = [
    {
        Header: 'Name',
        accessor: 'name',
        Cell: row => <a href={row.original.html_url} target="_blank" rel="noopener noreferrer">{row.value}</a>
    },
    {
        Header: 'Description',
        accessor: 'description'
    }
];

type UserPageProps = {
    readonly user;
    readonly followersList;
    readonly followList;
    readonly repoList;
    readonly match;
    readonly getUserDataDispatcher: (data: string) => void;
};

export class UserPage extends React.Component<UserPageProps> {
    constructor(props: UserPageProps) {
        super(props);
    }

    static defaultProps = {
        user: {},
        followersList: [],
        followList: [],
        repoList: [],
        match: { params: { userName: '' } },
        getUserDataDispatcher: (): void => {}
    }

    componentDidMount(){
        const userName = this.props.match.params.userName;
        this.props.getUserDataDispatcher(userName);
    }

    public render(): JSX.Element {
        const { user, followersList, followList, repoList } = this.props;

        return (
            <div className="user-page">
                <nav>
                    <Link to={'/'}>&laquo; Go back</Link>
                </nav>
                <article className="user-content">
                    <section className="user-data">
                        <img src={user.avatar_url} alt="user avatar" />
                        <h1><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a></h1>
                    </section>
                    <section className="user-followers">
                        <h2>Followers</h2>
                        <TableElement columns={userColumns} data={ followersList } pageSize={5} />
                    </section>
                    <section className="user-following">
                        <h2>Following</h2>
                        <TableElement columns={userColumns} data={ followList } pageSize={5} />
                    </section>
                    <section className="user-repos">
                        <h2>Repos</h2>
                        <TableElement columns={repoColumns} data={ repoList } pageSize={5} />
                    </section>
                </article> 
            </div>
        );
    }
}

const mapStateToProps = ({ user, followersList, followList, repoList }: AppState): object => {
    return {
        user,
        followersList,
        followList,
        repoList
    };
};

const mapDispatchToProps = (dispatch: Dispatch): object => {
    return {
        getUserDataDispatcher: (data: string): Action => dispatch(getUserData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
