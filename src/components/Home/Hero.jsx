import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroimage from '../../assets/Hero/herobg.png'; 

const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: '60vh', md: '80vh' },
                width: { xs: '100%', md: 'calc(100% - 320px)' },
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
                padding: { xs: '0 10px', md: '0 20px' },
                boxSizing: 'border-box',
                overflowX: 'hidden',
                ml: { xs: 0, md: '320px' },
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
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontWeight: 'bold',
                        fontFamily: '"Dancing Script", cursive',
                        mb: 1,
                        lineHeight: 2,
                        letterSpacing: 2,
                    }}
                >
                    Elevate Your Dining Experience
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        maxWidth: { xs: '90%', md: '600px' },
                        margin: 'auto',
                        lineHeight: 1.3,
                        letterSpacing: 2.1,
                        mb: 2,                      
                    }}
                >
                    Indulge in an exquisite selection of fine dining options at Delish-Licks
                </Typography>

                <Button
                    variant="outlined"
                    sx={{
                        mt: 2,
                        borderColor: 'white',
                        color: 'white',
                        padding: { xs: '8px 20px', md: '10px 30px' },
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        '&:hover': {
                            color :'Black',
                            borderColor: 'Black',
                            backgroundColor: 'rgba(235, 224, 224, 0.47)',

                        },
                    }}
                >
                    MAKE A RESERVATION
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;
