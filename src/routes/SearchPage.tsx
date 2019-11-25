import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserList } from '../actions';
import { Dispatch, Action } from 'redux';
import { AppState } from '../reducers/index';
import { SearchType } from '../../__types__';
import FormContainer from '../components/containers/FormContainer';
import TableElement from '../components/presentation/TableElement';

/**
 * TODO: Some tweeking in the UI
 * to allow for pulling the top or
 * bottom from the data set.
*/

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

type SearchPageProps = {
    readonly userList;
    readonly getUserListDispatcher: (data: SearchType) => void;
};

export class SearchPage extends React.Component<SearchPageProps> {
    constructor(props: SearchPageProps) {
        super(props);
    }

    static defaultProps = {
        userList: [],
        getUserListDispatcher: (): void => {}
    }

    public render(): JSX.Element {
        return (
            <article>
                <div className="search-page">
                    <FormContainer { ...this.props } />
                    <TableElement columns={searchPageColumns} data={this.props.userList} />
                </div>
            </article>
        );
    }
}

const mapStateToProps = ({ userList }: AppState): object => {
    return {
        userList
    };
};

const mapDispatchToProps = (dispatch: Dispatch): object => {
    return {
        getUserListDispatcher: (data: SearchType): Action => dispatch(getUserList(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
