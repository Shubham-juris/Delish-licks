import React from 'react';
import { Box, Typography } from '@mui/material';
import kidsPlayImage from '../../assets/KidsZone/kidsimage4.png';
import boardGamesImage from '../../assets/KidsZone/kidsimage1.png';
import artZoneImage from '../../assets/KidsZone/kidsimage2.png';
import KidsBirthdayImage from '../../assets/KidsZone/kidsimage3.png';



const KidsZone = () => {
    return (
        <Box
            sx={{
                ml: { xs: 0, md: '320px' }, 
                p: { xs: 3, md: 5 },
                backgroundColor: '#F7F7F7',
            }}
        >
            {/* Header */}
            <Typography 
                variant="h5" 
                align="center" 
                sx={{ textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: 1, mb: 4 }}
            >
                Welcome to Delish-Licks.com
            </Typography>

            {/* Kids Play Zone Section */}
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    mb: 5,
                }}
            >
                <Box sx={{ flex: 1, textAlign: 'justify', p: 2 }}>
                    <Typography variant="h4" sx={{ mb: 2, textAlign : 'center', fontFamily: "'Caveat Brush', sans-serif" }}>
                        Kids Play Zone
                    </Typography>
                    <Typography variant="body1">
                         Let your little ones embark on a world of adventure and fun at our Kids Play Zone! Our supervised play area is packed with exciting activities and safe play structures to keep children entertained for hours. From interactive games to imaginative play spaces, there's something for every young explorer to enjoy. Parents can relax and dine with peace of mind knowing their kids are having a blast in our dedicated play zone. 
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                    <img 
                        src={kidsPlayImage} 
                        alt="Kids Play Zone" 
                        style={{ width: '100%' }} 
                    />
                </Box>
            </Box>

            {/* Board Games Section */}
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    alignItems: 'center',
                    mb: 5,
                }}
            >
                <Box sx={{ flex: 1, textAlign: 'justify', p: 2 }}>
                    <Typography variant="h4" sx={{ mb: 2, textAlign : 'center', fontFamily: "'Caveat Brush', sans-serif" }}>
                        Board games for Kids
                    </Typography>
                    <Typography variant="body1">
                        Spark your child's imagination and encourage family bonding with our selection of board games for kids! From classic favorites to modern gems, we offer a variety of age-appropriate games that will entertain and delight children of all ages. Whether they're strategizing, problem-solving, or simply having fun, board games provide endless entertainment and learning opportunities for young minds. 
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                    <img 
                        src={boardGamesImage} 
                        alt="Board Games for Kids" 
                        style={{ width: '100%', }} 
                    />
                </Box>
            </Box>

            {/* Art Zone Section */}
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1, textAlign: 'justify', p: 2 }}>
                    <Typography variant="h4" sx={{  mb: 2, textAlign : 'center', fontFamily: "'Caveat Brush', sans-serif" }}>
                        Art zone kids
                    </Typography>
                    <Typography variant="body1">
                        Unleash your child's creativity in our Art Zone for Kids! From painting and drawing to crafting and sculpting, our art area is a haven for budding artists to express themselves and explore their imagination. With a variety of supplies and guided activities available, children can unleash their inner Picasso and create masterpieces to treasure forever. 
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                    <img 
                        src={artZoneImage} 
                        alt="Art Zone for Kids" 
                        style={{ width: '100%' }} 
                    />
                </Box>
            </Box>

            {/* Kids birthday party */}
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    alignItems: 'center',
                    mb: 5,
                }}
            >
                <Box sx={{ flex: 1, textAlign: 'justify', p: 2 }}>
                    <Typography variant="h4" sx={{ mb: 2, textAlign : 'center', fontFamily: "'Caveat Brush', sans-serif" }}>
                        Kids birthday party
                    </Typography>
                    <Typography variant="body1">
                        Make your child's birthday unforgettable with a celebration at Delish-Licks! Our dedicated party packages offer everything you need to host a memorable birthday bash, including delicious food, fun activities, and personalized touches. From themed decorations to interactive entertainment, we'll take care of all the details so you can relax and enjoy the festivities with your little one and their friends. Let us help you create magical memories that will last a lifetime! 
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                    <img 
                        src={KidsBirthdayImage} 
                        alt="Board Games for Kids" 
                        style={{ width: '100%' }} 
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default KidsZone;
