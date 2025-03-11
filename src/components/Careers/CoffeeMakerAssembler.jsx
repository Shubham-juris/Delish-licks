import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const CoffeeMakerAssembler = () => {
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
                        Coffee Maker Assembler
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        • <strong>Location:</strong> Slave Lake, AB T0G 2A3 <br />
                        • <strong>Salary:</strong> 15.00 hourly / 35 to 40 hours per week <br />
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
                        <strong>Experience:</strong> 1 to less than 7 months <br />
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                        Responsibilities
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        <strong>Tasks:</strong> <br />
                        • Assemble prefabricated parts on an assembly line, or at work benches using screw guns and other hand and power tools <br />
                        • Assemble small and large household electrical appliances such as coffeemakers, toasters, vacuum cleaners, lawn mowers, refrigerators and dishwashers <br />
                        • Assemble small transformers, small electrical motors and transmissions used in appliances or other electrical products <br />
                        • Perform minor repairs to products rejected from production assembly line <br />
                        • Set up assembly line with materials and supplies required for production, and set up and adjust production tools <br />
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
                        <Link href="mailto:delishlicks664@gmail.com" sx={{ color: "white" }}>
                            delishlicks664@gmail.com
                        </Link>
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: "100%", md: "45%" }, p: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Apply Now
                    </Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        sx={{ mb: 2, input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }}
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        variant="outlined"
                        sx={{ mb: 2, input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }}
                    />
                    <TextField
                        fullWidth
                        label="Email*"
                        variant="outlined"
                        sx={{ mb: 2, input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        sx={{ mb: 2, input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }}
                    />
                    <Typography sx={{ mb: 2, display: "flex", alignItems: "center", cursor: "pointer" }}>
                        📎 Attach Resume
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            p: 1.5,
                            fontWeight: "bold",
                            backgroundColor: "white",
                            color: "black",
                            "&:hover": { backgroundColor: "black", color: "white" },
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

export default CoffeeMakerAssembler;