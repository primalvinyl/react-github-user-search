import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserData } from '../actions';
import TableElement from '../components/TableElement';

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

const UserPage = (props): JSX.Element => {
    const userState = useSelector(state => state.user);
    const followersListState = useSelector(state => state.followersList);
    const followListState = useSelector(state => state.followList);
    const repoListState = useSelector(state => state.repoList);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const userName = props.match.params.userName;
        const getUserDataDispatcher = userName => dispatch(getUserData(userName));
        getUserDataDispatcher(userName);
    }, []);

    return (
        <div className="user-page">
            <nav>
                <Link to={'/'}>&laquo; Go back</Link>
            </nav>
            <article className="user-content">
                <section className="user-data">
                    <img src={userState.avatar_url} alt="user avatar" />
                    <h1><a href={userState.html_url} target="_blank" rel="noopener noreferrer">{userState.login}</a></h1>
                </section>
                <section className="user-followers">
                    <h2>Followers</h2>
                    <TableElement columns={userColumns} data={ followersListState } pageSize={5} />
                </section>
                <section className="user-following">
                    <h2>Following</h2>
                    <TableElement columns={userColumns} data={ followListState } pageSize={5} />
                </section>
                <section className="user-repos">
                    <h2>Repos</h2>
                    <TableElement columns={repoColumns} data={ repoListState } pageSize={5} />
                </section>
            </article> 
        </div>
    );

};

export default UserPage;
