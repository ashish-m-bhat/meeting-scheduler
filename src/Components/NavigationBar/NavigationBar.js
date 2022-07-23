import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <AppBar>
        <Toolbar>
                <Link to='/room1'>Room 1</Link>
                <Link to='/room2'>Room 2</Link>
                <Link to='/room3'>Room 3</Link>
        </Toolbar>
    </AppBar>

  )
}

export default NavigationBar;