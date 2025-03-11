import React from 'react';
import { Box, Typography } from '@mui/material';
import playZoneImage from '../../assets/PlayZone/playbanner.png';

const PlayBanner = () => {
    return (
        <Box
            sx={{
                ml: { xs: 0, md: '320px' }, 
                p: { xs: 3, md: 5 },
                backgroundColor: '#F7F7F7',
                textAlign: 'center',
            }}
        >
            {/* Header */}
            <Typography 
                variant="h6" 
                align="center" 
                sx={{ textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: 1, mb: 4 }}
            >
                Welcome to the Delish-Licks Play Zone!
            </Typography>

            {/* Content Section */}
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'left',
                    maxWidth: '1000px',
                    margin: '0 auto',
                }}
            >
                <Box sx={{ flex: 1, p: 2 }}>
                    <Typography variant="body1">
                        Step into a world of excitement and entertainment unlike any other at Delish-Licks. 
                        Our Adult Play Zone is the ultimate destination for those seeking fun-filled experiences 
                        in a relaxed and welcoming atmosphere. Whether you're looking to unwind after a long day 
                        or spice up your night out with friends, our play zone has something for everyone.
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                    <img 
                        src={playZoneImage} 
                        alt="Adult Play Zone" 
                        style={{ width: '100%', borderRadius: '10px' }} 
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PlayBanner;
