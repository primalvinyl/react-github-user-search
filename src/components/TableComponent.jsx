import React from 'react';
import { useTable } from 'react-table';

const TableComponent = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <section className="list-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((group, i) => (
                        <tr key={i} {...group.getHeaderGroupProps()}>
                            {group.headers.map((column, i) => {
                                return (
                                    <th key={i} {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                            )})}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr key={i} {...row.getRowProps()}>
                                {row.cells.map((cell, i) => {
                                    return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
};

TableComponent.defaultProps = {
    data: [{ myProp: '' }],
    columns: [{ Header: 'myHeader', accessor: 'myProp' }],
    pageSize: 20
}

export default TableComponent;
