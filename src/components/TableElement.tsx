import * as React from 'react';
import ReactTable from 'react-table';

const TableElement = ({ data, columns, pageSize }: TableElementType): JSX.Element => {
    return (
        <section className="list-container">
            <ReactTable
                data={data}
                columns={columns}
                showPagination={false}
                pageSize={pageSize}
            />
        </section>
    );
};

type TableElementType = {
    readonly data: object[];
    readonly columns: object[];
    readonly pageSize: number;
};

TableElement.defaultProps = {
    data: [{}],
    columns: [{}],
    pageSize: 20
}

export default TableElement;
