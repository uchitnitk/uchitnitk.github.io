import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';

const CsvColumn = (props) => {
        return (
                <TableCell key={props.key} align={props.align}>
					<Link href="#" >
							CSV
					</Link>
                </TableCell>
        );
}
export default CsvColumn;
