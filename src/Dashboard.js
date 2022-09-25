import { React } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

function Dashboard() {
    return (
        <Box sx={{ flexGrow: 3 }}>
        <AppBar>
          <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    letterSpacing: '.15rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                BLUE ALERT
            </Typography>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >               
                <MenuItem>
                  <Typography textAlign="center">PAGINA</Typography>
                </MenuItem>
                
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Dashboard;
