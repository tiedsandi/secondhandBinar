import { Box, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const MenuProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const uid = localStorage.getItem("uid");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <Box
        data-testid="menu-profile"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      >
        <PersonIcon />
      </Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          component={Link}
          href={`/profile/${uid}`}
          onClick={handleClose}
        >
          Profile
        </MenuItem>
        <MenuItem onClick={handlelogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MenuProfile;
