import React from "react";
import { Box, Typography, Container } from "@mui/material";
import MenuItem from "./MenuItem";

const MenuSection = ({ title, subtitle, items, isMobile, showDisclaimer = false }) => {
  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  return (
    <Container maxWidth="lg" sx={{ pb: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography variant="h5" fontWeight="bold" fontFamily="'Pacifico', cursive" sx={{ mb: 1, color: "white" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {subtitle}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          {firstHalf.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </Box>
        <Box sx={{ flex: 1 }}>
          {secondHalf.map((item, index) => (
            <MenuItem key={index + half} {...item} />
          ))}
        </Box>
      </Box>

      {showDisclaimer && (
        <Typography variant="body2" textAlign="center" sx={{ mt: 4, fontStyle: "italic" }}>
         All menu items are subject to availability and may vary. Please inform your server of any allergies or dietary restrictions. For custom order, ask the chef for changes.
        </Typography>
      )}
    </Container>
  );
}; 

export default MenuSection;
