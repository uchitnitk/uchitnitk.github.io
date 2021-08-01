import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const CampaignColumn = (props) => {
        return (
                <TableCell key={props.key} align={props.align}>
                        {props.region}
                </TableCell>
        );
}
export default CampaignColumn;
