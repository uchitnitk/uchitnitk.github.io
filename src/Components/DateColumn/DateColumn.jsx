import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const DateColumn = (props) => {
        const timestamp = props.timestamp;
        const date = new Date(timestamp);
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();

        const newdate = year + "/" + month + "/" + day;
        return (
                <TableCell key={props.key} align={props.align}>
                        {newdate}
                </TableCell>
        );
}
export default DateColumn;
