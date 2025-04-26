import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FreshFlavors = () => {
  return (
    <Box
      sx={{
        minHeight: "10vh", 
        backgroundColor: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 8 },
        marginLeft: {md: 36},
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px", 
          p: { xs: 2, md: 5 },
        }}
      >
      
        <Typography
          variant="subtitle1"
          sx={{ letterSpacing: "2px", fontWeight: "bold", textAlign: "center", mb: 3 }}
        >
          FRESH FLAVORS AT DELISH-LICKS
        </Typography>

        
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
         
          <Box sx={{ flex: 1, textAlign: "left" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Discover the Flavors of Delish-licks.com
            </Typography>
            <Typography>
              Thank you for your interest in Delish-Licks! We're here to answer any questions you may have and assist you in any way possible.
              Whether you're looking to make a reservation, inquire about our menu options, or provide feedback on your dining experience, we're here to help.
              Please feel free to reach out to us using any of the contact methods below.
            </Typography>
          </Box>

        
          <Box sx={{ flex: 1, textAlign: "left" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Private Events
            </Typography>
            <Typography>
              Host your next event at Delish-licks.com and make it a truly special occasion.
              Our private dining room can accommodate up to 30 guests and features a customizable menu designed to suit your preferences.
              Whether it's a birthday celebration or a corporate event, we guarantee an unforgettable experience.
            </Typography>
          </Box>
        </Box>

     
        <Box sx={{ textAlign: "center" }}>
          <Button variant="text" sx={{ mt: 4, fontWeight: "bold", textDecoration: "underline" }}>
            BOOK YOUR EVENT &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FreshFlavors;
