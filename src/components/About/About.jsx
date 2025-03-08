import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import image from "../../assets/About/delish-licks.png";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        marginLeft: isMobile ? "0" : "320px",
        width: isMobile ? "100%" : "calc(100% - 320px)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Top Heading */}
      <Typography
        variant="caption"
        sx={{
          letterSpacing: "2px",
          fontWeight: "bold",
          color: "#555",
          textTransform: "uppercase",
          fontSize: "0.75rem",
          fontFamily: "'Droid Sans', arial, sans-serif", // Applied requested font
          marginBottom: "20px", // Added spacing below the heading
          width: "100%",
          maxWidth: "1200px",
          textAlign: "center",
        }}
      >
        About Delish-Licks.com
      </Typography>

      {/* Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          backgroundColor: "transparent",
          borderRadius: "0",
          boxShadow: "none",
          overflow: "hidden",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            maxWidth: isMobile ? "100%" : "50%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: isMobile ? "0 0 20px 0" : "0 20px 0 0",
          }}
        >
          <img
            src={image}
            alt="Delish Licks"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0",
            }}
          />
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: isMobile ? "100%" : "50%",
            textAlign: "left",
            padding: isMobile ? "20px" : "0 20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Merriweather', serif", // Kept separate for heading
              color: "#222",
              marginTop: "0", // Removed top margin since it's now a subheading
              marginBottom: "20px",
            }}
          >
            Our Story
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              fontFamily: "'Droid Sans', arial, sans-serif", // Applied requested font
            }}
          >
            Welcome to Delish-Licks, your go-to spot for a good time filled with board games, video games, and VR adventures! Treat yourself to our delightful milkshakes, coffees, and snacks while you immerse yourself in fun experiences. Swing by and discover the joy of entertainment, Delish-Licks style!
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            mt={2}
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              fontFamily: "'Droid Sans', arial, sans-serif", // Applied requested font
            }}
          >
            At Delish-Licks, we’re more than just a restaurant – we’re a haven for those seeking excitement, camaraderie, and, of course, mouthwatering treats. Picture this: a cozy atmosphere buzzing with laughter, the clatter of dice on a board game, the sounds of victory in a virtual realm, and the aroma of freshly brewed coffee wafting through the air. That’s the Delish-Licks experience in a nutshell.
          </Typography>

          <Button
            variant="text"
            sx={{
              marginTop: "20px",
              fontWeight: "bold",
              color: "#222",
              textTransform: "uppercase",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontFamily: "'Droid Sans', arial, sans-serif", // Applied requested font
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Contact Us →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;