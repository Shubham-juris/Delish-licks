import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import aboutImage from '../../assets/About/delish-licks.png';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '0.5rem 1rem', md: '1rem 1rem' },
        marginTop: { xs: '10px', md: '100px' },
        boxSizing: 'border-box',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1300px',
          width: '100%',
        }}
      >

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: { xs: '2rem', md: 0 },
            px: { xs: 0, md: '1rem' },

          }}
        >
          <Box
            component="img"
            src={aboutImage}
            alt="Delish-Licks Dessert"
            sx={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              objectFit: 'contain',
              ml: {
                md: '500px'
              }
            }}
          />
        </Box>


        <Box
          sx={{
            flexGrow: 1,
            maxWidth: '750px',
            px: { xs: '1.5rem', md: '1rem' },
            paddingLeft: {  xs: '1.5rem', md: '15rem'},
            textAlign: { xs: 'center', md: 'left' },

            mr: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Dancing Script", cursive',
              fontWeight: 'bold',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              mb: '1.5rem',
              textAlign: 'center',
            }}
          >
            Our Story
          </Typography>

          <Typography
            sx={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              mb: '1.5rem',
              color: '#333',
              lineHeight: 1.6,
            }}
          >
            Welcome to Delish-Licks, your go-to spot for a good time filled with board games, video games,
            and VR adventures! Treat yourself to our delightful milkshakes, coffees, and snacks while you
            immerse yourself in fun experiences. Swing by and discover the joy of entertainment,
            Delish-Licks style!
          </Typography>

          <Typography
            sx={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              mb: '2rem',
              color: '#333',
              lineHeight: 1.6,
            }}
          >
            At Delish-Licks, we’re more than just a restaurant – we’re a haven for those seeking excitement,
            camaraderie, and, of course, mouthwatering treats. Picture this: a cozy atmosphere buzzing with
            laughter, the clatter of dice on a board game, the sounds of victory in a virtual realm, and the
            aroma of freshly brewed coffee wafting through the air. That’s the Delish-Licks experience in a
            nutshell.
          </Typography>

          <Link
            href="/Contact"
            sx={{
              display: 'inline-block',
              mt: { xs: 3, md: 4 },
              color: '#8b3a8b',
              textDecoration: 'underline',
              fontWeight: 'bold',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              letterSpacing: '2px',
              textAlign: { xs: 'center', md: 'left' },
              '&:hover': {
                textDecoration: 'underline',
                opacity: 0.9,
              },
            }}
          >
            CONTACT US &gt;
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
