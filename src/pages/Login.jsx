import React from "react";
import { Box, useMediaQuery, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import WallpaperLogin from "../components/web/WallpaperLogin";
import LoginField from "../components/fields/LoginField";
import { Link } from "react-router-dom";

const Login = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  return (
    <>
      {isMobile ? (
        <Box p={2}>
          <Link to="/">
            <KeyboardBackspaceIcon />
          </Link>
          <LoginField />
        </Box>
      ) : (
        <Grid data-testid="login-page" container spacing={2}>
          <WallpaperLogin />
          <Grid
            item
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <LoginField />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Login;
