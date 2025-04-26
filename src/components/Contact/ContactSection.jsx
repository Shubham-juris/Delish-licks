import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const whiteTextFieldSx = {
  mb: 2,
  input: { color: "white" },
  label: { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
};

const ContactUs = () => {
  return (
    <Box
      sx={{
        minHeight: "10vh",
        backgroundColor: "#3D3B35",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 6, sm: 8 },
        marginLeft: { md: "320px"},
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "1px",
            mb: 4,
          }}
        >
          VISIT US
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
    
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <TextField fullWidth label="Name" variant="outlined" sx={whiteTextFieldSx} />
            <TextField fullWidth label="Email*" variant="outlined" sx={whiteTextFieldSx} />
            <TextField
              fullWidth
              label="How can we serve you?"
              variant="outlined"
              multiline
              rows={6}
              sx={whiteTextFieldSx}
            />
            <Typography
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
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
              This site is protected by reCAPTCHA and the Google{" "}
              <Link href="#" sx={{ color: "white" }}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" sx={{ color: "white" }}>
                Terms of Service
              </Link>{" "}
              apply.
            </Typography>
          </Box>

         
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Special Requests?
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Do you have dietary concerns? Questions about an upcoming event?
              Drop us a line, and we'll get back to you soon.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Delish-licks.com
            </Typography>
            <Typography sx={{ mt: 1 }}>
              Unit 102 at 201, 4th Avenue, Northwest, Slave lake, Alberta,
              T0G 2A1
            </Typography>
            <Typography sx={{ mt: 1 }}>+1-403-827-1176</Typography>
            <Typography sx={{ mt: 1 }}>
              <Link href="mailto:delishlicks664@gmail.com" sx={{ color: "white" }}>
                delishlicks664@gmail.com
              </Link>
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
    </Box>
  );
};

export default ContactUs;
