import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import TableElement from '../components/TableElement';

const searchPageColumns = [
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
];

const SearchPage = (): JSX.Element => {
    const userListState = useSelector(store => store.userList);

    return (
        <article>
            <div className="search-page">
                <FormContainer />
                <TableElement columns={searchPageColumns} data={userListState} pageSize={20} />
            </div>
        </article>
    );
};

export default SearchPage;
