import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingLeft: '10%',
    paddingTop: '5%'
  },
});

const Header = () => {
        const classes = useStyles();
        return (      
                <div className={classes.root}>
                <Typography variant="h3" component="h2" gutterBottom>
                        Manage Campaigns
                </Typography>
                </div>
        );
}

export default Header;
