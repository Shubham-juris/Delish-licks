import React, { useState } from 'react';
import {    Drawer,    List,    ListItem,    ListItemText,    Divider,    Box,    IconButton,
    useMediaQuery,    useTheme,
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
        { text: 'Contact', path: '/Contact', icon: <ContactMailIcon /> },
    ];

    const drawerContent = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '40px 0',
                }}
            >
                <img
                    src={logoimage}
                    alt="Delish-Licks Logo"
                    style={{ width: '200px', height: 'auto' }}
                />
            </Box>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
            <List>
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItem
                            button
                            onClick={() => setMobileOpen(false)} // Close drawer on item click
                            sx={{
                                justifyContent: 'start',
                                padding: '10px 60px',
                                '&:hover': {
                                    backgroundColor: '#424242',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {item.icon}
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: '18px',
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
                            top: 10,
                            left: 10,
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
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                backgroundColor: '#3D3B35',
                                color: 'white',
                            },
                        }}
                    >
                        {drawerContent}
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
                            backgroundColor: '#3D3B35',
                            color: 'white',
                            position: 'fixed',
                            height: '100vh',
                            top: 0,
                            left: 0,
                            zIndex: 1000,
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {drawerContent}
                </Drawer>
            )}
        </>
    );
};

export default Navbar;
