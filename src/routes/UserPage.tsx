import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserData } from '../actions';
import TableComponent from '../components/TableComponent';

const UserPage = (props): JSX.Element => {
    const userState = useSelector(state => state.user);
    const followersListState = useSelector(state => state.followersList);
    const followListState = useSelector(state => state.followList);
    const repoListState = useSelector(state => state.repoList);
    const dispatch = useDispatch();

    const userColumns = React.useMemo(() => [
        {
            Header: 'Avatar',
            accessor: 'avatar_url',
            Cell: table => <img src={table.value} />
        },
        {
            Header: 'Account Name',
            accessor: 'login',
            Cell: table => {
                return <a href={table.row.original.html_url} target="_blank" rel="noopener noreferrer">{table.value}</a>
            }
        }
    ], []);
    
    const repoColumns = React.useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
            Cell: table => <a href={table.row.original.html_url} target="_blank" rel="noopener noreferrer">{table.value}</a>
        },
        {
            Header: 'Description',
            accessor: 'description'
        }
    ], []);

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
                    <TableComponent columns={userColumns} data={ followersListState } pageSize={5} />
                </section>
                <section className="user-following">
                    <h2>Following</h2>
                    <TableComponent columns={userColumns} data={ followListState } pageSize={5} />
                </section>
                <section className="user-repos">
                    <h2>Repos</h2>
                    <TableComponent columns={repoColumns} data={ repoListState } pageSize={5} />
                </section>
            </article> 
        </div>
    );
};

export default UserPage;
