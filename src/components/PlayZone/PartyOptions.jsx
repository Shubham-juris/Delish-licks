import React from "react";
import { Box, Typography } from "@mui/material";

const PartyOptions = () => {
  return (
    <Box
      sx={{
        ml: { xs: 0, md: "320px" },
        p: { xs: 3, md: 5 },
        backgroundColor: "#F7F7F7",
        
      }}
    >
      {/* Header */}
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: "bold", letterSpacing: "1px", mb: 4 }}
      >
        AT DELISH-LICKS, WE OFFER A VARIETY OF PARTY OPTIONS.
      </Typography>

      {/* Party Options - Flex Layout */}
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* Birthday Parties */}
        <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mb: 1, fontFamily: "'Caveat Brush', sans-serif" }}>
            Birthday Parties
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Celebrate another trip around the sun with a birthday party at Delish-Licks!
            Whether you're turning 21 or 101, our restaurant is the perfect place to gather 
            with friends and family to mark the occasion. 
          </Typography>
        </Box>

        {/* Anniversary Celebrations */}
        <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mb: 1 , fontFamily: "'Caveat Brush', sans-serif" }}>
            Anniversary Celebrations
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Toast to love and commitment with an anniversary celebration at Delish-Licks. 
            Whether you're celebrating one year or fifty, we provide the perfect setting for 
            a romantic evening or a lively gathering with loved ones.
          </Typography>
        </Box>

        {/* Reunion Gatherings */}
        <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mb: 1 , fontFamily: "'Caveat Brush', sans-serif" }}>
            Reunion Gatherings
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Reconnect with old friends and classmates with a reunion gathering. Whether 
            it's a milestone reunion or just a catch-up session, our restaurant provides 
            the perfect setting for reminiscing.
          </Typography>
        </Box>

        {/* Corporate Events */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mb: 1 ,fontFamily: "'Caveat Brush', sans-serif"}}>
            Corporate Events
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Host your next corporate event or team-building activity at Delish-Licks. 
            Our restaurant offers a unique setting for meetings, networking, and presentations.
          </Typography>
        </Box>

        {/* Holiday Parties */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mb: 1, fontFamily: "'Caveat Brush', sans-serif" }}>
            Holiday Parties
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Spread holiday cheer with a festive party at Delish-Licks. Whether it's 
            Christmas, New Year's Eve, or any other holiday, we provide the perfect 
            setting for a merry gathering.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PartyOptions;
