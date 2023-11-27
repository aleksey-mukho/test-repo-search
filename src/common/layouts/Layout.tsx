import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { styled } from '@mui/system';
import React from 'react';

const Navigation = styled(NavLink)({
  height: '64px',
  padding: '12px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  textDecoration: 'none',
  color: 'white',
  '&.active': {
    backgroundColor: 'white',
    color: 'black',
  },
});

export const Layout = React.memo(() => (
  <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <AppBar component="nav" position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="h6">
          Repository search by number of stars
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Navigation
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            List of repositories
          </Navigation>

          <Navigation
            to="/favorite"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Favorite
          </Navigation>
        </Box>
      </Toolbar>
    </AppBar>

    <Box
      component="main"
      sx={{ maxWidth: '1140px', width: '100%', margin: '0 auto', p: 2 }}>
      <Outlet />
    </Box>
  </Box>
));
