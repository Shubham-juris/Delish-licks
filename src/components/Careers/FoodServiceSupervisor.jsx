import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const FoodServiceSupervisor = () => {
    return (
        <Box
            sx={{
                ml: { xs: 0, md: "200px" },
                p: { xs: 3, md: 5 },
                backgroundColor: "#F7F7F7",
                minHeight: "20vh",
            }}
        >
            <Typography
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "bold", letterSpacing: "1px", mb: 4 }}
            >
                WE'RE HIRING!
            </Typography>

            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
                gap: 1,
            }}>
                <Box sx={{
                    width: { xs: "100%", md: "42%" },
                    maxWidth: "600px",
                }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Join Our Team
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Food Service Supervisor
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        • <strong>Location:</strong> Slave Lake, AB T0G 2A1 <br />
                        • <strong>Salary:</strong> 18.65 hourly / 35 to 40 hours per week <br />
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
                        <strong>Education:</strong> Secondary (high) school graduation certificate <br />
                        <strong>Experience:</strong> 0-1 years <br />
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        Responsibilities
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <strong>Tasks:</strong> <br />
                        • Determine how to adhere to work schedules <br />
                        • Oversee and plan the work of employees who portion and prepare food <br />
                        • Instruction in work responsibilities, hygiene, and safety protocols <br />
                        • Calculate the amount of ingredients and supplies needed to prepare the meal <br />
                        • Employ food service personnel and make sure the food and service fulfill quality control requirements <br />
                        • Create a budget and estimated expenses <br />
                        • Respond to grievances or issues raised by clients <br />
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

                <Box
                    sx={{
                        width: { xs: "100%", md: "38%" },
                        maxWidth: "500px",

                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
                        >
                            Apply Now
                        </Typography>

                        <TextField
                            label="Name"
                            variant="outlined"
                            sx={{ mb: 2, width: "100%" }}
                        />
                        <TextField
                            label="Phone"
                            variant="outlined"
                            sx={{ mb: 2, width: "100%" }}
                        />
                        <TextField
                            label="Email*"
                            variant="outlined"
                            sx={{ mb: 2, width: "100%" }}
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={6}
                            sx={{ mb: 2, width: "100%" }}
                        />

                        <Typography
                            sx={{
                                mb: 2,
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "gray",
                            }}
                        >
                            📎 Attach Resume
                        </Typography>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                p: 1.5,
                                fontWeight: "bold",
                                backgroundColor: "black",
                                "&:hover": {
                                    backgroundColor: "gray",
                                },
                            }}
                        >
                            SUBMIT APPLICATION
                        </Button>

                        <Typography
                            sx={{
                                fontSize: "10px",
                                textAlign: "center",
                                mt: 2,
                                color: "gray",
                            }}
                        >
                            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FoodServiceSupervisor;