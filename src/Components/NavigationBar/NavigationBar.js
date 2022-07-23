import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, CssBaseline, Tabs, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const [hightlightTab, setHightlightTab] = useState('/room1');
  return (
    <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Tabs textColor='inherit' value={hightlightTab} onChange={((e,val)=>setHightlightTab(val))}
          TabIndicatorProps={{style: {background:'blue'}}} sx={{'margin':'auto '}}>
            <Tab label="Room 1" value="/room1" component={NavLink} to={'/room1'} />
            <Tab label="Room 2" value="/room2" component={NavLink} to={'/room2'} />
            <Tab label="Room 3" value="/room3" component={NavLink} to={'/room3'} />
          </Tabs>
        </Toolbar>
    </AppBar>

  )
}

export default NavigationBar;