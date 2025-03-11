import React from "react";
import { Box } from "@mui/material";
import contactBanner from "../../assets/Contact/banner.png"; // Ensure the correct path

const ContactBanner = () => {
    return (
        <Box
            sx={{

                ml: { xs: 0, md: "320px" },
                p: { xs: 3, md: 5 },
                height: { xs: "200px", md: "300px" },
                backgroundImage: `url(${contactBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#F7F7F7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
            }}
        />
    );
};

export default ContactBanner;
