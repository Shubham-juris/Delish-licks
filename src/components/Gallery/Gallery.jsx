import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Import your images
import image1 from '../../assets/Gallery/delish-photo1.png';
import image2 from '../../assets/Gallery/delish-photo2.png';
import image3 from '../../assets/Gallery/delish-photo3.png';
import image4 from '../../assets/Gallery/delish-photo4.png';
import image5 from '../../assets/Gallery/delish-photo5.png';
import image6 from '../../assets/Gallery/delish-photo6.png';
import image7 from '../../assets/Gallery/delish-photo7.png';
import image8 from '../../assets/Gallery/delish-photo8.png';

// Array of images for easier mapping
const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
];

const Gallery = () => {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: 'calc(100% - 320px)' }, // Full width on mobile, adjusted on desktop
                ml: { xs: 0, md: '320px' }, // No margin on mobile, margin for navbar on desktop
                padding: { xs: '20px 10px', md: '40px 20px' }, // Responsive padding
                boxSizing: 'border-box',
                overflowX: 'hidden',
                backgroundColor: '#f9f9f9', // Light background for contrast
            }}
        >
            {/* Heading */}
            <Typography
                variant="h3"
                sx={{
                    fontSize: { xs: '1.5rem', md: '3rem' },
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: { xs: 3, md: 5 },
                    fontFamily: "'Dancing Script', cursive",
                }}
            >
                Our Gallery
            </Typography>

            {/* Image Grid */}
            <Grid container spacing={2} justifyContent="center">
                {galleryImages.map((image, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: '200px', md: '250px' }, // Responsive image height
                                overflow: 'hidden',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)', // Slight zoom on hover
                                },
                            }}
                        >
                            <img
                                src={image}
                                alt={`Delish-Licks Photo ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Ensure images fit nicely
                                    objectPosition: 'center',
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Gallery;