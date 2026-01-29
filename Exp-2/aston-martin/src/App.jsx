import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import { supercars } from './data';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Aston Martin Supercars</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Models</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Box sx={{ padding: '2rem' }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Aston Martin Supercars
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Explore the pinnacle of automotive engineering and luxury.
        </Typography>

        {/* Bootstrap Form */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search supercars..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

        {/* Material UI Cards */}
        <Grid container spacing={3}>
          {supercars.map(car => (
            <Grid item xs={12} sm={6} md={3} key={car.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={car.image}
                  alt={car.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {car.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {car.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {car.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Top Speed: {car.topSpeed}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Acceleration: {car.acceleration}
                  </Typography>
                  <Button size="small" color="primary" variant="contained">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer using Bootstrap */}
      <footer className="bg-dark text-light mt-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Typography variant="h6" component="h2" gutterBottom>
                Aston Martin
              </Typography>
              <Typography variant="body2">
                Experience the pinnacle of automotive luxury and performance.
              </Typography>
            </div>
            <div className="col-md-4">
              <Typography variant="h6" component="h2" gutterBottom>
                Quick Links
              </Typography>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Home</a></li>
                <li><a href="#" className="text-light">Models</a></li>
                <li><a href="#" className="text-light">About</a></li>
                <li><a href="#" className="text-light">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <Typography variant="h6" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2">
                Email: info@astonmartin.com<br />
                Phone: +1 (123) 456-7890
              </Typography>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <Typography variant="body2">
              © 2023 Aston Martin. All rights reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default App;
