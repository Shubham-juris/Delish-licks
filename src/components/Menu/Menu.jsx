import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import menuBg from "../../assets/Hero/herobg.png";
const Menu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: isMobile ? "0" : "320px", // Space for sidebar
        width: isMobile ? "100%" : "calc(100% - 320px)",
      }}
    >
      {/* Top Section (Beverages Header) */}
      <Box
        sx={{
          height: "40vh",
          backgroundImage: `url(${menuBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
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
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Slightly darken background
          }}
        />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            position: "relative",
            fontFamily: "'Pacifico', cursive",
            color: "white",
          }}
        >
          Beverages
        </Typography>
      </Box>

      {/* Menu Section */}
      <Box
        sx={{
          backgroundColor: "#2c2a26", // Dark background
          color: "white",
          py: 6,
          px: isMobile ? 2 : 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 1, color: "white" }}
          >
            Coffee 
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Freshly brewed Hot coffee
          </Typography>

          {/* Coffee Items - Two Column Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {/* Left Column */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold">
                Cappuccino <span style={{ float: "right" }}>$4.00</span>
              </Typography>
              <Typography variant="body2">
                A luxurious espresso-based drink with equal parts espresso, steamed milk, and milk foam.
              </Typography>

              <Typography variant="h6" fontWeight="bold" mt={3}>
                Espresso <span style={{ float: "right" }}>$2.50</span>
              </Typography>
              <Typography variant="body2">
                A bold and intense shot of coffee brewed by forcing hot water through finely-ground beans.
              </Typography>

              <Typography variant="h6" fontWeight="bold" mt={3}>
                Mocha <span style={{ float: "right" }}>$5.00</span>
              </Typography>
              <Typography variant="body2">
                A rich espresso drink blended with chocolate syrup and steamed milk.
              </Typography>
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold">
                Americano Latte <span style={{ float: "right" }}>$3.00</span>
              </Typography>
              <Typography variant="body2">
                A classic coffee drink made by diluting a shot of espresso with hot water.
              </Typography>

              <Typography variant="h6" fontWeight="bold" mt={3}>
                Affogato <span style={{ float: "right" }}>$6.00</span>
              </Typography>
              <Typography variant="body2">
                A delightful dessert coffee with hot espresso poured over vanilla ice cream.
              </Typography>

              <Typography variant="h6" fontWeight="bold" mt={3}>
                Latte <span style={{ float: "right" }}>$5.00</span>
              </Typography>
              <Typography variant="body2">
                A smooth and velvety espresso-based drink made with steamed milk and a thin layer of foam.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Menu;
