import React from "react";
import { Box, Typography } from "@mui/material";
import contactBanner from "../../assets/Contact/banner.png"; 

const ContactBanner = () => {
  return (
    <Box
      sx={{
        ml: { xs: 0, md: "320px" },
        p: { xs: 3, md: 5 },
        height: { xs: "200px", md: "300px" },
        backgroundImage: `url(${contactBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F7F7F7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
   
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "'Dancing Script', cursive",
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)", 
          fontSize: { xs: "24px", md: "40px" }, 
        }}
      >
        Contact Us
      </Typography>
    </Box>
  );
};

export default ContactBanner;
