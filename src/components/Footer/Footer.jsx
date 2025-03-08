import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: 'calc(100% - 320px)' }, // Full width on mobile, adjusted on desktop
                ml: { xs: 0, md: '320px' }, // No margin on mobile, margin for navbar on desktop
                padding: { xs: '20px 10px', md: '20px 20px' }, // Responsive padding
                boxSizing: 'border-box',
                overflowX: 'hidden',
                backgroundColor: '#f9f9f9', // Light background as in the image
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #eee', // Optional: Add a top border for separation
            }}
        >
            {/* Copyright Text */}
            <Typography
                variant="body2"
                sx={{
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    color: '#666',
                    textAlign: 'left',
                }}
            >
                COPYRIGHT © 2024 DELISH-LICKS.COM - ALL RIGHTS RESERVED
            </Typography>

            {/* Powered By Text */}
            <Typography
                variant="body2"
                sx={{
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    color: '#666',
                    textAlign: 'right',
                }}
            >
                POWERED BY KTL SOFTWARE
            </Typography>
        </Box>
    );
};

export default Footer;