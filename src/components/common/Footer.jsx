import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: 'calc(100% - 320px)' },
                ml: { xs: 0, md: '320px' },
                padding: { xs: '20px 10px', md: '20px 20px' },
                boxSizing: 'border-box',
                overflowX: 'hidden',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: '1px solid #eee',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    color: '#666',
                }}
            >
                COPYRIGHT © 2025 DELISH-LICKS.COM - ALL RIGHTS RESERVED
            </Typography>
        </Box>
    );
};

export default Footer;
