import React from 'react';
import { Box, Typography } from '@mui/material';
import vrImage from '../../assets/PlayZone/playimage1.png';
import dartsImage from '../../assets/PlayZone/playimage2.png';
import simulationImage from '../../assets/PlayZone/playimage3.png';

const sectionTitleStyle = {
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textAlign: 'center',
  mb: 1,
  fontFamily: "'Caveat Brush', sans-serif",
};

const sectionTextStyle = {
  fontSize: '0.95rem',
  color: '#555',
  textAlign: 'center',
};

const partyOptions = [
  {
    title: 'VR Zone',
    src: vrImage,
    description: `Immerse yourself in the future of gaming with our cutting-edge virtual reality zone. Step into otherworldly realms, embark on thrilling adventures, and experience gaming like never before.`,
  },
  {
    title: 'Darts',
    src: dartsImage,
    description: `Test your accuracy and aim with a game of darts. Perfect for groups or solo players, our dartboards offer a fun and interactive way to challenge yourself and others.`,
  },
  {
    title: 'Simulation Games',
    src: simulationImage,
    description: `Get behind the wheel of your favorite car or pilot a spaceship through the cosmos in our simulation games area. With a variety of games to choose from, you can explore new worlds and embark on exciting adventures without ever leaving your seat.`,
  },
];

const PlayfulOfferings = () => {
  return (
    <Box
      sx={{
        ml: { xs: 0, md: '320px' },
        p: { xs: 3, md: 5 },
        backgroundColor: '#F7F7F7',
        textAlign: 'center',
      }}
    >
   
      <Typography
        variant="h6"
        align="center"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: 1,
          mb: 4,
        }}
      >
        Explore Our Playful Offerings
      </Typography>


      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 3,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            flex: 2,
            justifyContent: 'center',
          }}
        >
          {partyOptions.map((option, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%' },
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={sectionTitleStyle}>
                {option.title}
              </Typography>
              <Box
                component="img"
                src={option.src}
                alt={option.title}
                sx={{ width: '100%', height: 'auto', borderRadius: 2, mb: 2 }}
              />
              
              <Typography sx={sectionTextStyle}>{option.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PlayfulOfferings;
