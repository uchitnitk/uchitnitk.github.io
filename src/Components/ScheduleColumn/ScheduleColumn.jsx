import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 50,
  },
}));


const ScheduleColumn = (props) => {
        const classes = useStyles();
        const handleChange = (e) =>{
                const date = new Date(e.target.value);
                const timestamp = date.getTime();
                props.row.createdOn = timestamp;
                props.setChangeCounter(Math.random());
        }
        return (
        <TableCell key={props.key} align={props.align}>
                <form className={classes.container} noValidate>
                        <TextField
                                id="date"
                                label="Schedule again"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                        shrink: true,
                                }}
                                onChange={handleChange}
                        />
                </form>
        </TableCell>
  );
}

export default ScheduleColumn;
