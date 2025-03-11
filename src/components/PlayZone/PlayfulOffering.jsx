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
                marginLeft: { xs: '0', md: '320px' }, 
                padding: '40px',
                boxSizing: 'border-box',
            }}
        >
            <Typography
                variant="h6"
                sx={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', mb: 4 }}
            >
                Explore Our Playful Offerings
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
                {/* VR Zone */}
                <Box sx={{ width: { xs: '100%', md: '30%' }, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 , fontFamily: "'Caveat Brush', sans-serif" }}>VR Zone</Typography>
                    <img src={vrImage} alt="VR Zone" style={{ width: '100%', borderRadius: '8px' }} />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Immerse yourself in the future of gaming with our cutting-edge virtual reality zone. Step into otherworldly realms, embark on thrilling adventures, and experience gaming like never before.
                    </Typography>
                </Box>

                {/* Darts */}
                <Box sx={{ width: { xs: '100%', md: '30%' }, textAlign: 'center', mt: { xs: 3, md: 0 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 , fontFamily: "'Caveat Brush', sans-serif" }}>Darts</Typography>
                    <img src={dartsImage} alt="Darts" style={{ width: '100%', borderRadius: '8px' }} />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Test your accuracy and aim with a game of darts. Perfect for groups or solo players, our dartboards offer a fun and interactive way to challenge yourself and others. 
                    </Typography>
                </Box>

                {/* Simulation Games */}
                <Box sx={{ width: { xs: '100%', md: '30%' }, textAlign: 'center', mt: { xs: 3, md: 0 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 , fontFamily: "'Caveat Brush', sans-serif"}}>Simulation Games</Typography>
                    <img src={simulationImage} alt="Simulation Games" style={{ width: '100%', borderRadius: '8px' }} />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Get behind the wheel of your favorite car or pilot a spaceship through the cosmos in our simulation games area. With a variety of games to choose from, you can explore new worlds and embark on exciting adventures without ever leaving your seat.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default PlayfulOfferings;