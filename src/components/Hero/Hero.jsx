import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroimage from '../../assets/Hero/herobg.png'; // Imported hero background image

const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: '60vh', md: '80vh' }, // Smaller height on mobile
                width: { xs: '100%', md: 'calc(100% - 320px)' }, // Full width on mobile, adjusted on desktop
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${heroimage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
                color: 'white',
                textAlign: 'center',
                padding: { xs: '0 10px', md: '0 20px' }, // Reduced padding on mobile
                boxSizing: 'border-box',
                overflowX: 'hidden',
                ml: { xs: 0, md: '320px' }, // No margin on mobile, margin for navbar on desktop
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1,
                },
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem' }, // Responsive font sizes
                        fontWeight: 'bold',
                        mb: { xs: 1, md: 2 },
                        fontFamily: '"Dancing Script", cursive',
                    }}
                >
                    Elevate Your Dining Experience
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.5rem' },
                        mb: { xs: 2, md: 4 },
                        maxWidth: { xs: '90%', md: '600px' },
                    }}
                >
                    Indulge in an exquisite selection of fine dining options at Delish-Licks
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#8b3a8b',
                        color: 'white',
                        padding: { xs: '8px 20px', md: '10px 30px' },
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        '&:hover': {
                            backgroundColor: '#6a2c6a',
                        },
                    }}
                >
                    Make a Reservation
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;