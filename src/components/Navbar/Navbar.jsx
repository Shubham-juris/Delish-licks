import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const toggleDrawer = (state) => () => setOpen(state);

  const menuItems = [
    { label: "Home", path: "/Home" },
    { label: "Menu", path: "/Menu" },
    { label: "Kids Zone", path: "/Kids-Zone" },
    { label: "Play Zone", path: "/Play-Zone" },
    { label: "Careers", path: "/Careers" },
    { label: "Contact", path: "/Contact" },
  ];

  // FIX: Scroll to top when clicking "Home" even if already on /hero
  useEffect(() => {
    if (location.pathname === "/Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
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
        {menuItems.map((item, index) => (
          <motion.div
            key={item.path}
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: "10px 65px" }}
                component={Link}
                to={item.path}
                onClick={() => {
                  if (item.path === "/hero" && location.pathname === "/hero") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: item.label === "Home" ? "bold" : "normal",
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
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
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
