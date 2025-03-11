import React from "react";
import { Box, Typography } from "@mui/material";

const MenuItem = ({ name, price, description }) => (
  <Box sx={{ mb: 4 }}>
    <Typography 
      sx={{ fontSize: "18px", fontWeight: "bold", fontFamily: "'Pacifico', cursive", mb: 1 }}
    >
      {name} <span style={{ float: "right" }}>{price}</span>
    </Typography>
    <Typography 
      variant="body2" 
      sx={{ 
        width: "350px", 
        mt: 2, 
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
