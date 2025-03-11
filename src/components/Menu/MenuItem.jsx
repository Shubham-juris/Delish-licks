import React from "react";
import { Box, Typography } from "@mui/material";

const MenuItem = ({ name, price, description }) => (
  <Box sx={{ mb: 4 }}>
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap" 
      }}
    >
      <Typography 
        sx={{ 
          fontSize: { xs: "16px", sm: "18px" }, 
          fontWeight: "bold", 
          fontFamily: "'Pacifico', cursive" 
        }}
      >
        {name}
      </Typography>
      <Typography 
        sx={{ 
          fontSize: { xs: "14px", sm: "16px" }, 
          fontWeight: "bold",
          color: "rgb(213, 212, 208)"
        }}
      >
        {price}
      </Typography>
    </Box>
    <Typography 
      variant="body2" 
      sx={{ 
        maxWidth: { xs: "100%", sm: "350px" }, 
        mt: 1, 
        color: "rgb(213, 212, 208)", 
        fontFamily: "'Droid Sans', arial, sans-serif", 
        lineHeight: 1.5 
      }}
    >
      {description}
    </Typography>
  </Box>
);

export default MenuItem;
