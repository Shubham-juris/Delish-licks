import React from 'react';
import { Box, Typography } from '@mui/material';
import vrImage from '../../assets/PlayZone/playimage1.png';
import dartsImage from '../../assets/PlayZone/playimage2.png';
import simulationImage from '../../assets/PlayZone/playimage3.png';

const PlayfulOfferings = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '20px', md: '40px' },
        marginLeft: {xl:'2500px',md: "300px"},
        maxWidth: '1200px',
          fontFamily: "'Caveat Brush', sans-serif",
       
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          mb: 4,
          fontSize: { xs: '1.5rem', md: '2rem' },
        }}
      >
        Explore Our Playful Offerings
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 3,
          width: '100%',
        }}
      >
        {/* VR Zone */}
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontFamily: "'Caveat Brush', sans-serif",
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              mb: 2,
            }}
          >
            VR Zone
          </Typography>
          <img
            src={vrImage}
            alt="VR Zone"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Immerse yourself in the future of gaming with our cutting-edge virtual reality zone. Step into otherworldly realms, embark on thrilling adventures, and experience gaming like never before.
          </Typography>
        </Box>

        {/* Darts */}
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontFamily: "'Caveat Brush', sans-serif",
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              mb: 2,
            }}
          >
            Darts
          </Typography>
          <img
            src={dartsImage}
            alt="Darts"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Test your accuracy and aim with a game of darts. Perfect for groups or solo players, our dartboards offer a fun and interactive way to challenge yourself and others.
          </Typography>
        </Box>

        {/* Simulation Games */}
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontFamily: "'Caveat Brush', sans-serif",
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              mb: 2,
            }}
          >
            Simulation Games
          </Typography>
          <img
            src={simulationImage}
            alt="Simulation Games"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Get behind the wheel of your favorite car or pilot a spaceship through the cosmos in our simulation games area. With a variety of games to choose from, you can explore new worlds and embark on exciting adventures without ever leaving your seat.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayfulOfferings;
