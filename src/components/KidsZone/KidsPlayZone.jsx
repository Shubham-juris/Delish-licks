import React from 'react';
import { Box, Typography } from '@mui/material';
import kidsImage from '../../assets/KidsZone/kidsbanner.jpg';

const KidsPlayZone = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#3D3B35',
                color: '#F7F7F7',
               
                boxSizing: 'border-box',
                width: { xs: '100%', md: 'calc(100% - 320px)' },
                ml: { xs: 0, md: '320px' }, 
            }}
        >
            {/* Left Side - Text Content */}
            <Box
                sx={{
                    width: { xs: '100%', md: '45%' },
                    textAlign: 'left',
                    padding: '0 5rem',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        letterSpacing: 2,
                        mb: 2,
                    }}
                >
                   Welcome to the Kids Play Zone at Delish-Licks
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    At Delish-Licks, we understand the importance of keeping our younger guests entertained while their grown-ups relax and enjoy their dining experience. That's why we've created a dedicated Kids Play Zone that's bursting with excitement and endless possibilities.                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    Imagine a colorful wonderland filled with interactive games, creative activities, and safe play areas designed to spark the imagination and keep little ones engaged for hours on end. From ball pits and climbing structures to educational toys and hands-on crafts, our Kids Play Zone is a haven where children can let their imaginations run wild while making new friends along the way.                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    Safety is our top priority, which is why our Kids Play Zone is carefully monitored by our attentive staff to ensure a secure and enjoyable environment for all. Parents can dine with peace of mind knowing that their children are having a blast in a supervised space that's just for them.
                </Typography>
                <Typography variant="body1" sx={{mb: 2, lineHeight: 1.6 }}>
                    But the fun doesn't stop there – our Kids Play Zone is also a place for special events and themed activities that add an extra layer of excitement to the experience. From birthday parties and holiday celebrations to interactive storytelling sessions and arts and crafts workshops, there's always something fun happening at Delish-Licks.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    So, whether you're looking for a family-friendly dining destination or planning a special outing with the little ones, come and discover the magic of the Kids Play Zone at Delish-Licks.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    It's where laughter echoes, imaginations soar, and unforgettable memories are made. We can't wait to welcome you and your little adventurers to the ultimate playground of fun and flavor!
                </Typography>
                               
            </Box>

            {/* Right Side - Image */}
            <Box
                sx={{
                    width: { xs: '100%', md: '55%' },
                    display: 'flex',
                    
                   
                    mt: { xs: 3, md: 0 },
                }}
            >
                <img
                    src={kidsImage}
                    alt="Kids Play Zone"
                    style={{
                        width: '100%',
                        height: '1200px',                      
                      
                    }}
                />
            </Box>
        </Box>
    );
};

export default KidsPlayZone;
