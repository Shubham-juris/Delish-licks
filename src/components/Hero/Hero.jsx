import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import heroimage from "../../assets/Hero/herobg.png";
 
const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Breakpoint for mobile screens
 
  return (
    <Box
      sx={{
        marginLeft: isMobile ? "0" : "320px", // No margin on mobile, keep it on larger screens
        width: isMobile ? "100%" : "calc(100% - 320px)", // Adjust width accordingly
        height: "100vh",
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
        }}
      />
 
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "90%",
          textAlign: "center",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"} // Smaller heading on mobile
          fontWeight="bold"
          sx={{ fontFamily: "'Pacifico', cursive", height: "none" }}
        >
          Elevate Your Dining Experience
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"} // Adjust text size
          mt={2}
        >
          Indulge in an exquisite selection of fine dining options at Delish-Licks
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 3,
            borderColor: "white",
            color: "white",
            padding: isMobile ? "8px 16px" : "10px 20px", // Smaller button padding for mobile
            fontWeight: "bold",
            fontSize: isMobile ? "14px" : "16px", // Adjust button text size
            "&:hover": { backgroundColor: "white", color: "#3b3832" },
          }}
        >
          MAKE A RESERVATION
        </Button>
      </Box>
    </Box>
  );
};
 
export default Hero;