import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "lightblue", color: "black", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "Blue",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; STRIKERS WARDROBE
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
