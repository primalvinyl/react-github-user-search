import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import TableComponent from '../components/TableComponent';

const SearchPage = (): JSX.Element => {
    const userListState = useSelector(store => store.userList);
    const columns = React.useMemo(() => [
        {
            Header: 'Avatar',
            accessor: 'avatar_url',
            Cell: row => <img src={row.value} alt="Avatar" />
        },
        {
            Header: 'Account Name',
            accessor: 'login',
            Cell: row => <Link to={`/${row.value}`}>{row.value}</Link>
        }
    ], []);

    return (
        <article>
            <div className="search-page">
                <FormContainer />
                <TableComponent columns={columns} data={userListState} pageSize={20} />
            </div>
        </article>
    );
};

export default SearchPage;
