import React from 'react';
import { Container, Typography, Box, Paper, Avatar, Chip, Divider, Grid, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 4, alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Avatar sx={{ width: 180, height: 180, bgcolor: '#2563eb', fontSize: '3rem', fontWeight: 700 }}>
            KJ
          </Avatar>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center' }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
              Kunal Jain
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#2563eb', fontWeight: 600 }}>
              Computer Science Engineering Student | AI & ML
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 1, alignItems: { xs: 'center', md: 'center' }, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2, width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Jaipur, Rajasthan – India</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'center', md: 'center' }, justifyContent: { xs: 'center', md: 'flex-start' }, width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+91-8209771947</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">jainkunal2790@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                <LinkedInIcon fontSize="small" />
                <Link href="https://linkedin.com/in/kunal-jain-70b797290" target="_blank" rel="noopener noreferrer" variant="body2">
                  linkedin.com/in/kunal-jain-70b797290
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#2563eb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-start' }}>
            <PersonIcon /> Professional Summary
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#4b5563' }}>
            Motivated and detail-oriented Computer Science Engineering student specializing in Artificial Intelligence
            and Machine Learning, currently in the 3rd year of study. Strong foundation in data structures, algorithms,
            object-oriented programming, and mathematical modeling, with hands-on experience in building machine
            learning models, training neural networks, and developing end-to-end projects. Proficient in Python, Java,
            TensorFlow, PyTorch, OpenCV, and SQL, with practical exposure to deep learning, computer vision, and
            NLP. Seeking opportunities in AI/ML internships, research, and applied engineering roles.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#2563eb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-start' }}>
            <SchoolIcon /> Education
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={1} sx={{ p: 2, borderLeft: 4, borderColor: '#2563eb' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Chandigarh University
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Gharuan, Punjab
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Bachelor of Engineering in Computer Science | 2023 – 2027
                </Typography>
                <Typography variant="body2" sx={{ color: '#2563eb', fontWeight: 500 }}>
                  Specialization in Artificial Intelligence and Machine Learning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expected Graduation: July 2027
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 2, borderLeft: 4, borderColor: '#2563eb' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Cambridge Court High School
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Jaipur, Rajasthan
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Senior Secondary Education (Class XII) | 2022
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#4b5563' }}>
                  Appointed Head Boy; Achieved 87.8% in Class XII Board Examinations
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 2, borderLeft: 4, borderColor: '#2563eb' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Cambridge Court High School
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Jaipur, Rajasthan
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Secondary Education (Class X) | 2020
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#4b5563' }}>
                  Achieved 96.17% in Class X Board Examinations
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography variant="h4" gutterBottom sx={{ color: '#2563eb', fontWeight: 600 }}>
            Languages
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Chip label="English (Professional)" sx={{ bgcolor: '#f3f4f6', color: '#2563eb', fontWeight: 500 }} />
            <Chip label="Hindi (Native)" sx={{ bgcolor: '#f3f4f6', color: '#2563eb', fontWeight: 500 }} />
            <Chip label="Japanese (Basic)" sx={{ bgcolor: '#f3f4f6', color: '#2563eb', fontWeight: 500 }} />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
