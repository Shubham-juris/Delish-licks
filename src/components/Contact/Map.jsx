import React from "react";
import { Box, Button } from "@mui/material";
import DirectionsIcon from "@mui/icons-material/Directions";

const Map = () => {
  return (
    <Box sx={{ display: "flex" }}>    

      {/* Main Content */}
      <Box
        sx={{
          width: { xs: "100%", md: "calc(100% - 320px)" },
          ml: { xs: 0, md: "320px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F7F7F7",
          flexGrow: 1,
        }}
      >
        {/* Map Wrapper */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            position: "relative",
            
            overflow: "hidden",
          }}
        >
          {/* "Get Directions" Button */}
          <Button
            variant="contained"
            startIcon={<DirectionsIcon />}
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "#222",
              color: "#fff",
              fontSize: "14px",
              textTransform: "none",
              px: 2,
              py: 1,
              zIndex: 10,
              "&:hover": {
                backgroundColor: "#444",
              },
            }}
            href="https://www.google.com/maps/dir/?api=1&destination=Slave+Lake+Healthcare+Centre"
            target="_blank"
          >
            Get Directions
          </Button>

          {/* Google Map */}
          <iframe
            title="Google Map - Slave Lake Healthcare Centre"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3532.0045266511897!2d-114.75999972798714!3d55.28373347519227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a292a01f4bb953%3A0xc3514a6fbe76eafd!2sSlave%20Lake%20Healthcare%20Centre!5e0!3m2!1sen!2sus!4v1741676898757!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
