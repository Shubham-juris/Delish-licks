import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; // Facebook icon
import InstagramIcon from '@mui/icons-material/Instagram'; // Instagram icon
import TwitterIcon from '@mui/icons-material/Twitter'; // X (Twitter) icon

const SocialMedia = () => {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: 'calc(100% - 320px)' }, // Full width on mobile, adjusted on desktop
                ml: { xs: 0, md: '320px' }, // No margin on mobile, margin for navbar on desktop
                padding: { xs: '20px 10px', md: '40px 20px' }, // Responsive padding
                boxSizing: 'border-box',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff', // White background as in the image
            }}
        >
            {/* Heading */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    color: '#666',
                    mb: 2,
                    textAlign: 'center',
                }}
            >
                SOCIAL
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Facebook */}
                <IconButton
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#3b5998', // Facebook blue
                        '&:hover': { color: '#2d4373' },
                    }}
                >
                    <FacebookIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                </IconButton>

                {/* Instagram */}
                <IconButton
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#e4405f', // Instagram pink
                        '&:hover': { color: '#c13584' },
                    }}
                >
                    <InstagramIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                </IconButton>

                {/* X (Twitter) */}
                <IconButton
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#000', // X black
                        '&:hover': { color: '#333' },
                    }}
                >
                    <TwitterIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default SocialMedia;