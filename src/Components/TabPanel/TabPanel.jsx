import Box from '@material-ui/core/Box';
import TableComponent from '../TableComponent/TableComponent'
import PropTypes from 'prop-types';

const TabPanel = (props) => {
        const { children, value, index, data, setChangeCounter, ...other } = props;
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <TableComponent rows={data} setChangeCounter={setChangeCounter}/>
              </Box>
            )}
          </div>
        );
}

TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
};
export default TabPanel;