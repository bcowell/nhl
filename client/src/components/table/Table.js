import React from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

const Table = ({ columns, data, defaultPageSize }) => 
    <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={defaultPageSize}
        className="-striped -highlight"
    />

export default Table;