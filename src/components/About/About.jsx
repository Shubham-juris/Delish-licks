import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
 
const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Mobile responsiveness
 
  return (
    <Box
      sx={{
        marginLeft: isMobile ? "0" : "320px", // Consistent margin like HeroSection
        width: isMobile ? "100%" : "calc(100% - 320px)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f5f5f5", // Light background for contrast
      }}
    >
      {/* Content */}
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          variant={isMobile ? "h4" : "h3"} // Responsive heading
          fontWeight="bold"
          sx={{ fontFamily: "'Pacifico', cursive", color: "#333" }}
        >
          About Us
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"}
          mt={2}
          color="text.secondary"
        >
          Welcome to Delish-Licks! We are passionate about crafting unforgettable dining experiences.
          Our journey began with a simple vision: to bring together fresh ingredients, bold flavors,
          and a cozy ambiance where every guest feels at home.
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"}
          mt={2}
          color="text.secondary"
        >
          From carefully curated menus to exceptional service, we take pride in delivering quality
          and innovation in every dish. Whether you're here for a casual meal or a special celebration,
          we promise an experience that tantalizes your taste buds and leaves you coming back for more.
        </Typography>
      </Box>
    </Box>
  );
};
 
export default About;
 
 