import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1a1a1a', boxShadow: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 800,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: 'monospace'
            }}
          >
            SUPERCAR-HUB
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Home
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block', opacity: 0.7 }}>
              Inventory
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;