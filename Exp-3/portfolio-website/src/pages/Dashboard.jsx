import React from 'react';
import { Container, Typography, Box, Paper, LinearProgress } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalculateIcon from '@mui/icons-material/Calculate';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import { GlowingCard, GlowingCards } from '../components/GlowingCard';

const Dashboard = () => {
  const skills = {
    backend: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Object-Oriented Programming', level: 88 },
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 82 },
      { name: 'SQL', level: 80 }
    ],
    ml: [
      { name: 'Machine Learning', level: 88 },
      { name: 'Deep Learning', level: 85 },
      { name: 'Feature Engineering', level: 82 },
      { name: 'Model Training', level: 85 },
      { name: 'XGBoost', level: 80 }
    ],
    cv: [
      { name: 'OpenCV', level: 85 },
      { name: 'Image Processing', level: 82 },
      { name: 'Handwriting Text Detection', level: 78 },
      { name: 'Natural Language Processing', level: 80 }
    ],
    math: [
      { name: 'Probability & Statistics', level: 85 },
      { name: 'Linear Algebra', level: 82 },
      { name: 'Mathematical Modeling', level: 80 }
    ],
    tools: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 82 },
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'Linux', level: 80 }
    ],
    professional: [
      { name: 'Analytical Thinking', level: 90 },
      { name: 'Problem Solving', level: 88 },
      { name: 'Technical Writing', level: 82 },
      { name: 'Team Collaboration', level: 85 }
    ]
  };

  const SkillBar = ({ name, level }) => (
    <Box sx={{ mb: 2.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.75, gap: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>{name}</Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#2563eb' }}>{level}%</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e5e7eb',
          '& .MuiLinearProgress-bar': {
            background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );

  const SkillCategory = ({ title, icon: Icon, skills, glowColor }) => (
    <GlowingCard glowColor={glowColor} className="bg-white">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, pb: 2, borderBottom: 2, borderColor: '#e5e7eb', justifyContent: 'flex-start' }}>
        <Icon sx={{ color: '#2563eb' }} />
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#2563eb' }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', gap: 0.5 }}>
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </Box>
    </GlowingCard>
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 12, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, width: '100%' }}>
            <DashboardIcon /> Skills Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary">
            My technical and professional competencies
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
          <SkillCategory title="Backend & Programming" icon={CodeIcon} skills={skills.backend} glowColor="#2563eb" />
          <SkillCategory title="Machine Learning / AI" icon={PsychologyIcon} skills={skills.ml} glowColor="#7c3aed" />
          <SkillCategory title="Computer Vision / NLP" icon={VisibilityIcon} skills={skills.cv} glowColor="#059669" />
          <SkillCategory title="Math & Data" icon={CalculateIcon} skills={skills.math} glowColor="#dc2626" />
          <SkillCategory title="Tools & Technologies" icon={BuildIcon} skills={skills.tools} glowColor="#ea580c" />
          <SkillCategory title="Professional Skills" icon={WorkIcon} skills={skills.professional} glowColor="#0891b2" />
        </GlowingCards>
      </Paper>
    </Container>
  );
};

export default Dashboard;
