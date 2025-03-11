import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const RestaurantManager = () => {
    return (
        <Box
            sx={{
                ml: { xs: 0, md: "320px" },
                p: { xs: 3, md: 5 },
                backgroundColor: "#F7F7F7",
                minHeight: "100vh",
            }}
        >
            <Typography
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "bold", letterSpacing: "1px", mb: 4 }}
            >
                WE'RE HIRING!
            </Typography>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Join Our Team
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Restaurant Manager
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        • <strong>Location:</strong> Slave Lake, AB T0G 2A3 <br />
                        • <strong>Salary:</strong> 17.00 hourly / 35 to 40 hours per week <br />
                        • <strong>Terms of employment:</strong> Permanent employment / Full time <br />
                        • <strong>Shifts:</strong> Day, Evening, Morning, Shift, Weekend <br />
                        • <strong>Start date:</strong> As soon as possible <br />
                        • <strong>Benefits:</strong> Health benefits <br />
                        • <strong>Vacancies:</strong> 2 vacancies <br />
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        Overview
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <strong>Languages:</strong> English <br />
                        <strong>Education:</strong> College/CEGEP <br />
                        <strong>Experience:</strong> 1 year to less than 2 years <br />
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        Responsibilities
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <strong>Tasks:</strong> <br />
                        • Analyze budget to boost and maintain the restaurant’s profits <br />
                        • Monitor staff performance <br />
                        • Plan and organize daily operations <br />
                        • Recruit staff <br />
                        • Set staff work schedules <br />
                        • Supervise staff <br />
                        • Determine type of services to be offered and implement operational procedures <br />
                        • Ensure health and safety regulations are followed <br />
                        • Negotiate arrangements with suppliers for food and other supplies <br />
                        • Address customers' complaints or concerns <br />
                        • Provide customer service <br />
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        Benefits
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <strong>Health benefits:</strong> <br />
                        • Dental plan <br />
                        • Health care plan <br />
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        Who can apply to this job?
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <strong>Only apply to this job if:</strong> <br />
                        • You are a Canadian citizen, a permanent or temporary resident of Canada. <br />
                        • You have a valid Canadian work permit. <br />
                        <Typography sx={{ mt: 1 }}>
                            If you are not authorized to work in Canada, <br />
                            <span style={{ textDecoration: "underline" }}>do not apply.</span> <br />
                            The employer <span style={{ fontWeight: "bold" }}>will not respond</span> to your application.
                        </Typography>
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        How to Apply
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <strong>By email:</strong>{" "}
                        <Link href="mailto:delishlicks664@gmail.com">
                            delishlicks664@gmail.com
                        </Link>
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: "100%", md: "45%" }, p: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Apply Now
                    </Typography>
                    <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Phone" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Email*" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Message" variant="outlined" multiline rows={6} sx={{ mb: 2 }} />
                    <Typography sx={{ mb: 2, display: "flex", alignItems: "center", cursor: "pointer" }}>
                        📎 Attach Resume
                    </Typography>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            p: 1.5,
                            fontWeight: "bold",
                            color: "black",
                            backgroundColor: "white",
                            border: "none",
                            "&:hover": { color: "white", backgroundColor: "black" },
                        }}
                    >
                        SUBMIT APPLICATION
                    </Button>
                    <Typography sx={{ fontSize: "12px", textAlign: "center", mt: 2, color: "gray" }}>
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default RestaurantManager;