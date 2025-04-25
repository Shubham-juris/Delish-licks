import React, { useState } from 'react';
import {
    Drawer, List, ListItem, ListItemText, Divider, Box, IconButton,
    useMediaQuery, useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import logoimage from '../../assets/Navbar/delishlogo.png';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavVideo from "../../assets/NavVideo/videoplayback.mp4";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 320;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: 'Home', path: '/Home', icon: <HomeIcon /> },
        { text: 'Menu', path: '/Menu', icon: <RestaurantMenuIcon /> },
        { text: 'Kids Zone', path: '/Kids-Zone', icon: <ChildCareIcon /> },
        { text: 'Play Zone', path: '/Play-Zone', icon: <SportsEsportsIcon /> },
        { text: 'Careers', path: '/Careers', icon: <WorkIcon /> },
        { text: 'Contact', path: '/Contact', icon: <ContactMailIcon /> }
    ];

    const drawerContent = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2.5rem 0',
                    maxWidth: '100%',
                }}
            >
                <Box component="img"
                    src={logoimage}
                    alt="Delish-Licks Logo"
                    sx={{
                        width: '60%',
                        maxWidth: '200px',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '50%' 
                    }}
                />
            </Box>
            <Divider sx={{ borderColor: 'inherit' }} />
            <List>
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} style={{ textDecoration: 'none', color: 'White' }}>
                        <ListItem
                            button
                            onClick={() => setMobileOpen(false)}
                            sx={{
                                justifyContent: 'start',
                                padding: '0.75rem 3.5rem',
                                '&:hover': {
                                    backgroundColor: '#424242',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                {item.icon}
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: '1.1rem',
                                        textAlign: 'center',
                                    }}
                                />
                            </Box>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    );

    const drawerContentWithVideo = (
        <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                }}
            >
                <source src={NavVideo} type="video/mp4" />
            </video>

            <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, .4)', 
            zIndex: -1,
        }}
    />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
                {drawerContent}
            </Box>
        </Box>
    );

    return (
        <>
            {isMobile ? (
                <>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            position: 'fixed',
                            top: '0.5rem',
                            left: '1rem',
                            zIndex: 1200,
                            backgroundColor: '#2f2f2f',
                            color: 'white',
                            '&:hover': { backgroundColor: '#424242' },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                backgroundColor: 'transparent',
                                color: 'white',
                                height: '100vh',
                                overflow: 'hidden',
                            },
                        }}
                    >
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                zIndex: 1300,
                                color: 'white',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        {drawerContentWithVideo}
                    </Drawer>
                </>
            ) : (
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: 'transparent',
                            color: 'white',
                            position: 'fixed',
                            height: '100vh',
                            top: 0,
                            left: 0,
                            zIndex: 1000,
                            overflow: 'hidden',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {drawerContentWithVideo}
                </Drawer>
            )}
        </>
    );
};

export default Navbar;
