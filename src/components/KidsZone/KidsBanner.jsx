import React from 'react';
import { Box, Typography } from '@mui/material';
import kidsbanner from '../../assets/KidsZone/kidsbanner.jpg';

const KidsBanner = () => {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: 'calc(100% - 320px)' },
                ml: { xs: 0, md: '320px' },
                height: { xs: '200px', md: '300px' },
                minHeight: '200px',
                background: `url(${kidsbanner}) center / cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1,
                },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    color: '#fff',
                    position: 'relative',
                    fontFamily: "'Dancing Script', cursive",
                    zIndex: 2,
                    lineHeight: 1.3,
                    letterSpacing: 2,
                }}
            >
                Delish-Licks Kids Zone
            </Typography>
        </Box>
    );
};

export default KidsBanner;
