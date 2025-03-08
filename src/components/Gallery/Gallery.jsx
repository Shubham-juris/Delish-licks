import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// Import images (replace with your actual image paths)
import image1 from "../../assets/Gallery/delish-photo1.png";
import image2 from "../../assets/Gallery/delish-photo2.png";
import image3 from "../../assets/Gallery/delish-photo3.png";
import image4 from "../../assets/Gallery/delish-photo4.png";
import image5 from "../../assets/Gallery/delish-photo5.png";
import image6 from "../../assets/Gallery/delish-photo6.png";
import image7 from "../../assets/Gallery/delish-photo7.png";
import image8 from "../../assets/Gallery/delish-photo8.png";

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile screens

  // Array of images
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "20px" : "40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Gallery Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "'Merriweather', serif",
          color: "#222",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        DELISH-LICKS: A PHOTO GALLERY OF OUR RESTAURANT
      </Typography>

      {/* Image Grid */}
      <Grid
        container
        spacing={isMobile ? 2 : 4} // Adjust spacing based on screen size
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={12} // Full width on extra small screens
            sm={6}  // Half width on small screens
            md={4}  // One-third width on medium screens
            lg={3}  // One-fourth width on large screens
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <img
                src={image}
                alt={`Delish Licks Photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;