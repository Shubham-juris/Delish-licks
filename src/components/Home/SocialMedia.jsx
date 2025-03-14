import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialMedia = () => {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: 'calc(100% - 320px)' },
                ml: { xs: 0, md: '320px' }, 
                padding: { xs: '40px 10px', md: '60px 20px' },
                boxSizing: 'border-box',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff', 
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    color: '#666',
                    fontWeight: 'bold',
                    lineHeight: 2,
                    letterSpacing: 4,
                    margin: { xs: '20px 0', md: '40px 0' },
                    textAlign: 'center',
                }}
            >
                SOCIAL
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#3b5998', 
                        '&:hover': { color: '#2d4373' },
                    }}
                >
                    <FacebookIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
                </IconButton>

                <IconButton
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#e4405f',
                        '&:hover': { color: '#c13584' },
                    }}
                >
                    <InstagramIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#000',
                        '&:hover': { color: '#333' },
                    }}
                >
                    <TwitterIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default SocialMedia;