import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const WallpaperLogin = () => {
  return (
    <Grid data-testid="wallpaper-login" container item lg={6} xs={12}>
      <Box
        component="img"
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundColor:
            "linear-gradient(360deg, #A06ECE 50%, rgba(160, 110, 206, 0) 100%)",
        }}
        alt="Gambar"
        src="images/wallLogin.png"
      />
      <Link to="/">
        <Typography
          fontWeight={700}
          fontSize={40}
          color="white"
          sx={{
            position: "absolute",
            top: 250,
            left: 40,
          }}
        >
          Second
        </Typography>
        <Typography
          fontWeight={700}
          fontSize={40}
          color="white"
          sx={{
            position: "absolute",
            top: 282,
            left: 40,
          }}
        >
          Hand .
        </Typography>
      </Link>
      {/* <img src="images/Login.png" alt="" /> */}
    </Grid>
  );
};

export default WallpaperLogin;
