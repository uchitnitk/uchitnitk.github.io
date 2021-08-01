import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DateColumn from '../DateColumn/DateColumn';
import CampaignColumn from '../CampaignColumn/CampaignColumn';
import Pricing from '../Pricing/Pricing';
import CsvColumn from '../CsvColumn/CsvColumn';
import ReportColumn from '../ReportColumn/ReportColumn';
import ScheduleColumn from '../ScheduleColumn/ScheduleColumn';

const columns = [
  { id: 'date', label: 'DATE', minWidth: 130, align:'left' },
  { id: 'campaign', label: 'CAMPAIGN', minWidth: 130, align:'left' },
  {
    id: 'view',
    label: 'VIEW',
    minWidth: 130,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'ACTION',
    minWidth: 130,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'report',
    minWidth: 130,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'schedule',
    minWidth: 130,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

const createData = (date, campaign, view, action) => {
  const report = view / action;
  const schedule = view / action;
  return { date, campaign, view, action, report, schedule };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const TableComponent = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                  	<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
						<DateColumn timestamp={row.createdOn} key="date" align="left"/>
						<CampaignColumn region={row.region} name={row.name}/>
						<Pricing />
						<CsvColumn />
						<ReportColumn />
						<ScheduleColumn row={row}setChangeCounter = {props.setChangeCounter}/>
					</TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableComponent;

