import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const ContactUs = () => {
    return (
        <Box
            sx={{
                ml: { xs: 0, md: "320px" },
                p: { xs: 3, md: 5 },
                backgroundColor: "#3D3B35",
                minHeight: "100vh",
                color: "white",
            }}
        >
            {/* Header */}
            <Typography
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "bold", letterSpacing: "1px", mb: 4 }}
            >
                VISIT US
            </Typography>

            {/* Main Container with Flexbox */}
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
                {/* Left Side - Contact Form */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Contact Us
                    </Typography>
                    <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2, input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }} />
                    <TextField fullWidth label="Email*" variant="outlined" sx={{ mb: 2, input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }} />
                    <TextField fullWidth label="How can we serve you?" variant="outlined" multiline rows={6} sx={{ mb: 2, input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }} />
                    <Typography sx={{ mb: 2, display: "flex", alignItems: "center", cursor: "pointer" }}>
                        📎 Attach Files (Attachments: 0)
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            p: 1.5,
                            fontWeight: "bold",
                            backgroundColor: "white",
                            color: "black",
                            "&:hover": {
                                backgroundColor: "black",
                                color: "white",
                            },
                        }}
                    >
                        SEND
                    </Button>
                    <Typography sx={{ mt: 2, fontSize: "12px" }}>
                        This site is protected by reCAPTCHA and the Google <Link href="#" sx={{ color: "white" }}>Privacy Policy</Link> and <Link href="#" sx={{ color: "white" }}>Terms of Service</Link> apply.
                    </Typography>
                </Box>

                {/* Right Side - Contact Info */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Special Requests?
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we'll get back to you soon.
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Delish-licks.com
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        Unit 102 at 201, 4th Avenue, Northwest, Slave lake, Alberta, T0G 2A1
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        +1-403-827-1176
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <Link href="mailto:delishlicks664@gmail.com" sx={{ color: "white" }}>delishlicks664@gmail.com</Link>
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        Hours
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        Mon 09:00 am - 05:00 pm <br />
                        Tue 09:00 am - 05:00 pm <br />
                        Wed 09:00 am - 05:00 pm <br />
                        Thu 09:00 am - 05:00 pm <br />
                        Fri 09:00 am - 05:00 pm <br />
                        Sat Closed <br /> 
                        Sun Closed                        
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;
