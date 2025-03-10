import React from "react";
import { Box, Typography } from "@mui/material";

const MenuItem = ({ name, price, description }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" fontWeight="bold" fontFamily="'Pacifico', cursive">
      {name} <span style={{ float: "right" }}>{price}</span>
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </Box>
);

export default MenuItem;
