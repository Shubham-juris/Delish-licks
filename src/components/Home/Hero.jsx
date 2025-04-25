import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroimage from '../../assets/Hero/herobg.png';

const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: '80vh', md: '80vh', xl: "30vh"},
                width: { xs: '100%', md: 'calc(100% - 320px)' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${heroimage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: { xs: 'local', md: 'scroll' },
                color: 'white',
                textAlign: 'center',
                padding: { xs: '0 1rem', md: '0 2rem' },
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
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '90%', width: '100%' }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontWeight: 'bold',
                        fontFamily: '"Dancing Script", cursive',
                        mb: '0.8rem',
                        lineHeight: 1.5,
                        letterSpacing: '0.1rem',
                        wordBreak: 'break-word',
                    }}
                >
                    Elevate Your Dining Experience
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        maxWidth: '40rem',
                        margin: '0 auto',
                        lineHeight: 1.4,
                        letterSpacing: '0.1rem',
                        mb: '1.5rem',
                        wordBreak: 'break-word',
                    }}
                >
                    Indulge in an exquisite selection of fine dining options at Delish-Licks
                </Typography>

                <Button
                    variant="outlined"
                    sx={{
                        mt: '1rem',
                        borderColor: 'white',
                        color: 'white',
                        padding: { xs: '0.6rem 1.4rem', md: '0.8rem 2rem' },
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 'bold',
                        borderRadius: '0.4rem',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            color: 'black',
                            borderColor: 'black',
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
