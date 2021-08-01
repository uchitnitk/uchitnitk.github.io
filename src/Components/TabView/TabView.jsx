import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../TabPanel/TabPanel';
import dataArray from '../../mockData/data';

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '80%',
    paddingLeft: '10%',
  },
}));

const TabView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [upcomingCampaign, setUpComingCampaign] = useState([]);
  const [liveCampaign, setLiveComingCampaign] = useState([]);
  const [pastCampaign, setPastComingCampaign] = useState([]);
  const [changeCounter,setChangeCounter] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const checkSameDay = (timestamp) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const thatDay = new Date(timestamp).setHours(0, 0, 0, 0);
    return today === thatDay;
  }
 
  useEffect(() => {
      let live = [];
      let upComing = [];
      let past = [];
      console.log("hello2")
      dataArray.forEach( (row)=> {
        const nowTimestamp = new Date(Date.now());
        if(nowTimestamp - row.createdOn > 0){
          past.push(row);
        }
        else if(nowTimestamp - row.createdOn < 0 && checkSameDay(row.createdOn)){
          live.push(row);
        }
        else{
          upComing.push(row);
        }
      });
      setUpComingCampaign(upComing);
      setLiveComingCampaign(live);
      setPastComingCampaign(past);
  },[]);

  useEffect(() => {
    console.log(upcomingCampaign);
    console.log(pastCampaign);
    console.log(liveCampaign);
    if(changeCounter!==0){
      let live = [];
      let upComing = [];
      let past = [];
      console.log("hello2")
      upcomingCampaign.forEach( (row)=> {
        const nowTimestamp = new Date(Date.now());
        if(nowTimestamp - row.createdOn > 0){
          past.push(row);
        }
        else if(nowTimestamp - row.createdOn < 0 && checkSameDay(row.createdOn)){
          live.push(row);
        }
        else{
          upComing.push(row);
        }
      });
      liveCampaign.forEach( (row)=> {
        const nowTimestamp = new Date(Date.now());
        if(nowTimestamp - row.createdOn > 0){
          past.push(row);
        }
        else if(nowTimestamp - row.createdOn < 0 && checkSameDay(row.createdOn)){
          live.push(row);
        }
        else{
          upComing.push(row);
        }
      });
      pastCampaign.forEach( (row)=> {
        const nowTimestamp = new Date(Date.now());
        if(nowTimestamp - row.createdOn > 0){
          past.push(row);
        }
        else if(nowTimestamp - row.createdOn < 0 && checkSameDay(row.createdOn)){
          live.push(row);
        }
        else{
          upComing.push(row);
        }
      });
      setUpComingCampaign(upComing);
      setLiveComingCampaign(live);
      setPastComingCampaign(past);
    }
},[changeCounter]);
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Upcoming Campaigns" {...a11yProps(0)} />
          <Tab label="Live Campaigns" {...a11yProps(1)} />
          <Tab label="Past Campaigns" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} data={upcomingCampaign} setChangeCounter={setChangeCounter}>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} data={liveCampaign} setChangeCounter={setChangeCounter}>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} data={pastCampaign} setChangeCounter={setChangeCounter}>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default TabView;