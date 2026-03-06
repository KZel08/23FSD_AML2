import React from 'react';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { GlowingCard, GlowingCards } from '../components/GlowingCard';

const Projects = () => {
  const projects = [
    {
      title: 'Stock Market Prediction Model using XGBoost',
      period: 'Jan 2024 – Mar 2024',
      overview: 'Built a machine learning system to predict short-term stock price movements from historical financial data.',
      implementation: 'Designed an end-to-end pipeline with preprocessing, technical indicator feature engineering, and XGBoost training using cross-validation and hyperparameter tuning.',
      impact: 'Improved RMSE, MAE, and directional accuracy while applying ML to real-world financial analysis.',
      tags: ['Machine Learning', 'XGBoost', 'Financial Analysis', 'Python'],
      icon: <TrendingUpIcon />,
      glowColor: '#2563eb'
    },
    {
      title: 'MOST – Model for Optical Script Text Detection',
      period: 'Jun 2024 – Oct 2024',
      overview: 'Developed a computer vision model to detect and localize handwritten text in document images.',
      implementation: 'Applied image preprocessing, feature extraction, and learning-based detection using OpenCV.',
      impact: 'Enhanced detection robustness for handwriting recognition and document understanding pipelines.',
      tags: ['Computer Vision', 'OpenCV', 'Image Processing', 'Handwriting Detection'],
      icon: <DescriptionIcon />,
      glowColor: '#7c3aed'
    },
    {
      title: 'Flappy Bird Game using Hand Gestures',
      period: 'Oct 2025 – Dec 2025',
      overview: 'Created an interactive Flappy Bird game controlled via real-time hand gesture recognition.',
      implementation: 'Implemented OpenCV-based hand tracking and gesture-to-control mapping.',
      impact: 'Demonstrated effective human–computer interaction and real-time computer vision system design.',
      tags: ['Computer Vision', 'OpenCV', 'Hand Tracking', 'Game Development'],
      icon: <CodeIcon />,
      glowColor: '#059669'
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 12, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, width: '100%' }}>
            <WorkIcon /> My Projects
          </Typography>
          <Typography variant="h6" color="text.secondary">
            A showcase of my work in AI, Machine Learning, and Computer Vision
          </Typography>
        </Box>

        <GlowingCards
          enableGlow={true}
          glowRadius={25}
          glowOpacity={0.3}
          animationDuration={400}
          gap="2.5rem"
          maxWidth="100%"
          padding="0"
          responsive={true}
        >
          {projects.map((project, index) => (
            <GlowingCard key={index} glowColor={project.glowColor} className="bg-white">
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${project.glowColor}, ${project.glowColor}dd)`,
                  p: 2.5,
                  color: 'white',
                  borderRadius: '0.5rem',
                  mb: 2.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: 'flex-start' }}>
                  {project.icon}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {project.period}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'stretch', justifyContent: 'flex-start', gap: 1.5 }}>
                <Box sx={{ mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: project.glowColor, textTransform: 'uppercase', letterSpacing: 0.05, mb: 0.75 }}>
                    Overview
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {project.overview}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: project.glowColor, textTransform: 'uppercase', letterSpacing: 0.05, mb: 0.75 }}>
                    Implementation
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {project.implementation}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: project.glowColor, textTransform: 'uppercase', letterSpacing: 0.05, mb: 0.75 }}>
                    Impact
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {project.impact}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', alignItems: 'center', justifyContent: 'flex-start' }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: '#f3f4f6',
                        color: project.glowColor,
                        fontWeight: 500,
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </GlowingCard>
          ))}
        </GlowingCards>
      </Paper>
    </Container>
  );
};

export default Projects;
