import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 12, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ color: '#2563eb', fontWeight: 700 }}>
          My Portfolio
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4b5563' }}>
            This portfolio is a curated collection of my work, achievements, and skills that showcases my professional journey and capabilities. It serves as a powerful tool for demonstrating my expertise to potential employers, clients, or collaborators.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4b5563' }}>
            This portfolio includes:
          </Typography>
          <List sx={{ ml: 2, mb: 2 }}>
            <ListItem>
              <ListItemText
                primary={<Typography sx={{ fontWeight: 600, color: '#2563eb' }}>Personal Information:</Typography>}
                secondary="My background, education, and contact details"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Typography sx={{ fontWeight: 600, color: '#2563eb' }}>Skills & Expertise:</Typography>}
                secondary="Technical and professional competencies"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Typography sx={{ fontWeight: 600, color: '#2563eb' }}>Projects:</Typography>}
                secondary="Detailed descriptions of my work and accomplishments"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Typography sx={{ fontWeight: 600, color: '#2563eb' }}>Achievements:</Typography>}
                secondary="Awards, certifications, and recognition"
              />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4b5563' }}>
            For professionals in technology, engineering, and creative fields, a portfolio is essential for standing out in competitive job markets. It provides tangible evidence of my abilities and helps me build credibility in my chosen field.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4b5563' }}>
            This portfolio website showcases my journey as a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, highlighting my skills, projects, and professional experiences.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
