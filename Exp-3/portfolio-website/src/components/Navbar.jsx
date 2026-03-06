import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FolderIcon from '@mui/icons-material/Folder';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/profile', label: 'Profile' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/projects', label: 'Projects' }
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#2563eb' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', gap: 2 }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
          <FolderIcon sx={{ fontSize: 32, color: 'white' }} />
          <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: 700 }}>
            My Portfolio
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? 'white' : 'rgba(255, 255, 255, 0.8)',
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                },
                fontWeight: 500,
                textTransform: 'none',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
