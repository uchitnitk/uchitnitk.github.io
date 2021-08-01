import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';

const Report = (props) => {
        return (
                <TableCell key={props.key} align={props.align}>
					<Link href="#" >
							report
					</Link>
                </TableCell>
        );
}
export default Report;
