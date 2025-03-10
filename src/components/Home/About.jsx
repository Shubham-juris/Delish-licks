import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import aboutImage from '../../assets/About/delish-licks.png';

const About = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100%', md: 'calc(100% - 320px)' }, 
                ml: { xs: 0, md: '320px' },
                padding: { xs: '20px 10px', md: '40px 20px' },
                boxSizing: 'border-box',
                overflowX: 'hidden',
                minHeight: { xs: 'auto', md: '80vh' },
            }}
        >

            
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: { xs: 4, md: 0 },
                }}
            >
                <img
                    src={aboutImage}
                    alt="Delish-Licks Dessert"
                    style={{
                        width: '100%',
                        maxWidth: { xs: '300px', md: '400px' }, 
                        height: '600px',
                    }}
                />
            </Box>
            <Box
                sx={{
                    flex: 1,
                    maxWidth: { xs: '100%', md: '600px' },
                    padding: { xs: '0 10px', md: '0 20px' },
                    textAlign: { xs: 'center', md: 'left' }, 
                }}
            >

                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: '0.8rem', md: '1.9rem' },
                        fontWeight: 'bold',
                        mb: { xs: 2, md: 3 },
                        textAlign: 'center',
                        fontFamily: "'Dancing Script', cursive",
                    }}
                >
                    Our Story
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        mb: { xs: 2, md: 2 },
                        color: '#333',
                    }}
                >
                    Welcome to Delish-Licks, your go-to spot for a good time filled with board games, video games, and VR adventures! Treat yourself to our delightful milkshakes, coffees, and snacks while you immerse yourself in fun experiences. Swing by and discover the joy of entertainment, Delish-Licks style!
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        mb: { xs: 3, md: 4 },
                        color: '#333',
                    }}
                >
                    At Delish-Licks, we’re more than just a restaurant – we’re a haven for those seeking excitement, camaraderie, and, of course, mouthwatering treats. Picture this: a cozy atmosphere buzzing with laughter, the clatter of dice on a board game, the sounds of victory in a virtual realm, and the aroma of freshly brewed coffee wafting through the air. That’s the Delish-Licks experience in a nutshell.
                </Typography>

                <Link
                    href="#"
                    sx={{
                        mt : { xs: 3, md: 5 },
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#8b3a8b',
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                        lineHeight: 5,
                        letterSpacing: 2,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    CONTACT US 
                    <Box
                        component="span"
                        sx={{
                            ml: 1,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                        }}
                    >
                        &gt;
                    </Box>
                </Link>
            </Box>
        </Box>
    );
};

export default About;