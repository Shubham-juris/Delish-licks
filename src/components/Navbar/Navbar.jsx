import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import logoimage from "../../assets/Navbar/delishlogo.png";
 
const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
 
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };
 
  const menuItems = ["Home", "Menu", "Kids Zone", "Play Zone", "Careers", "Contact"];
 
  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 }, // Starts slightly to the left and invisible
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Staggered effect
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };
 
  const drawerContent = (
    <Box
      sx={{
        width: 320,
        backgroundColor: "#3b3832",
        color: "white",
        height: "100vh",
        paddingTop: "60px",
      }}
      role="presentation"
      onClick={isMobile ? toggleDrawer(false) : undefined}
      onKeyDown={isMobile ? toggleDrawer(false) : undefined}
    >
      {/* Logo */}
      <Box display="flex" justifyContent="center" mb={2}>
        <img
          src={logoimage}
          alt="Delish-Licks Logo"
          style={{
            width: "180px",
            border: "6px solid #232320",
            height: "auto",
            marginBottom: "48px",
          }}
        />
      </Box>
 
      {/* Navigation Links with Animation */}
      <List>
        {menuItems.map((text, index) => (
          <motion.div
            key={index}
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Pass index for stagger effect
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "10px 65px" }}>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontWeight: text === "Home" ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );
 
  return (
    <>
      {/* App Bar for Mobile */}
      {isMobile && (
        <AppBar position="fixed" sx={{ backgroundColor: "#3b3832" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Delish-Licks
            </Typography>
          </Toolbar>
        </AppBar>
      )}
 
      {/* Responsive Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            backgroundColor: "#3b3832",
            color: "white",
            paddingTop: isMobile ? "60px" : "20px",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};
 
export default Navbar;
 