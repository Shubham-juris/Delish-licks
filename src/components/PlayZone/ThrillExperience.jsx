import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ThrillExperience = () => {
    return (
        <Box
            sx={{
                ml: { xs: 0, md: '150px' },
                p: { xs: 4, md: 6 },
                backgroundColor: '#3D3B35',
                color: '#F7F7F7',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
          
            <Typography
                variant="h3"
                sx={{                    
                    mb: 2,
                    fontFamily: "'Caveat Brush', sans-serif",
                }}
            >
                Experience Thrills Beyond the Plate
            </Typography>

   
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: '800px',
                    textAlign: 'left',
                }}
            >
               
                <Box
                    sx={{
                        py: 3,
                        width: '6px',
                        height: '90px',
                        backgroundColor: '#AFA999',
                        mr: 2,
                    }}
                />

                
                <Typography variant="body1" sx={{ py: 3, lineHeight: 1.9 }}>
                    At Delish-Licks, we believe that dining out should be an adventure, and our Adult Play Zone takes that 
                    philosophy to the next level. Prepare to be captivated by a variety of thrilling activities designed to spark 
                    joy and ignite your sense of play.
                </Typography>
            </Box>

           <Button
                variant="text"
                sx={{
                    mt: 3,
                    color: '#F7F7F7',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    borderBottom: '2px solid #F7F7F7',
                    borderRadius: 0,
                    paddingBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        color: '#F7F7F7',
                        borderBottom: '2px solid #F7F7F7',
                        textDecoration: 'none',
                        transform: 'translateY(-2px)',
                    },
                    '&::after': {
                        content: '"›"',
                        fontSize: '14px',
                        transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                        transform: 'translateX(4px)',
                    },
                }}
            >
                Find Out More
            </Button>

        </Box>
    );
};

export default ThrillExperience;
