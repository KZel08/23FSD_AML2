import React from 'react';
import Navbar from './Navbar'; 
// Material UI Imports
import { Container, Grid, Card, Typography, Box, Paper } from '@mui/material'; 
import car1 from './assets/c1.jpg'; 
import car2 from './assets/c2.jpg';
import car3 from './assets/c3.jpg';

function App() {
  const cars = [
    { id: 1, name: "Bugatti Chiron", description: "Quad-turbocharged W16 engine.", image: car1 },
    { id: 2, name: "McLaren 720S", description: "The ultimate balance of power and agility.", image: car2 },
    { id: 3, name: "Lotus Evija", description: "Pure electric British hypercar innovation.", image: car3 }
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Experiment-4: Responsive Navigation Bar (Bootstrap) */}
      <Navbar /> 
      
      {/* Experiment-1 & 2: Bootstrap Card-Based Layout */}
      <div className="container py-5">
        <h1 className="text-center mb-5 fw-bold display-4">Supercar Showcase</h1>
        <div className="row justify-content-center g-4">
          {cars.map((car) => (
            <div key={car.id} className="col-12 col-md-4">
              <div className="card shadow h-100 border-0 text-center">
                <img 
                  src={car.image} 
                  className="card-img-top" 
                  alt={car.name} 
                  style={{ height: "200px", objectFit: "cover" }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{car.name}</h5>
                  <p className="card-text text-secondary">{car.description}</p>
                  <button className="btn btn-dark w-100 mt-auto">DETAILS</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-5" />

      {/* Experiment-3: UI Design Using Material UI Components */}
      {/* This section matches your latest screenshot with centered, stacked cards */}
      <Container maxWidth="md" sx={{ pb: 8 }}>
        <Paper elevation={0} sx={{ p: 4, bgcolor: '#f4f4f4', borderRadius: 4 }}>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 4 }}>
            MUI Exclusive Services
          </Typography>
          
          <Grid container spacing={3} direction="column" alignItems="center">
            {/* MUI Card 1 */}
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '600px' }}>
              <Card sx={{ textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Priority Delivery</Typography>
                <Typography variant="body1" color="text.secondary">
                  Get your supercar delivered to your doorstep within 48 hours using MUI logistics.
                </Typography>
              </Card>
            </Grid>

            {/* MUI Card 2 */}
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '600px' }}>
              <Card sx={{ textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Track Access</Typography>
                <Typography variant="body1" color="text.secondary">
                  Exclusive weekend passes to international racing circuits for our premium members.
                </Typography>
              </Card>
            </Grid>

            {/* MUI Card 3 */}
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '600px' }}>
              <Card sx={{ textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>24/7 Support</Typography>
                <Typography variant="body1" color="text.secondary">
                  Dedicated concierge service for all your mechanical and maintenance inquiries.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;