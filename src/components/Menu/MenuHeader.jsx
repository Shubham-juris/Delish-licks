import React from "react";
import { Box, Typography } from "@mui/material";
import menuBg from "../../assets/Hero/herobg.png";

const MenuHeader = ({ isExtraSmall, isSmallScreen }) => (
  <Box
    sx={{
      height: { xs: "15vh", sm: "20vh", md: "25vh", lg: "30vh" },
      background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${menuBg}) center/cover`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Typography
      variant={isExtraSmall ? "h5" : isSmallScreen ? "h4" : "h3"}
      fontWeight="bold"
      sx={{ fontFamily: "'Pacifico', cursive", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
    >
      Beverages
    </Typography>
  </Box>
);

export default MenuHeader;
