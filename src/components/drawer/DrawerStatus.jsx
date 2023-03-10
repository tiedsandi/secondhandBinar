import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Collapse,
  Alert,
  Button,
} from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ButtonClick from "../global/ButtonClick";
import Disabledbutton from "../global/Disabledbutton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const drawerBleeding = 16;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 70,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[400],
  borderRadius: 3,
  position: "relative",
  top: 16,
  left: "calc(50% - 30px)",
}));

const DrawerStatus = ({ settransaction_status }) => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [statusValue, setstatusValue] = useState("");
  const profile = useSelector((state) => state.profile.profile.data);
  const handleChangestatusValue = (event) => {
    setstatusValue(event.target.value);
  };
  // console.log(statusValue);

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  // const { settransaction_status } = props;
  // console.log(settransaction_status);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const toggleDrawer = (newOpen) => () => {
  //

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenAlert(true);
    setOpen(false);
    if (statusValue === "berhasil") {
      settransaction_status(1);
    } else {
      settransaction_status(2);
    }
  };

  return (
    <Box data-testid="drawer-status" display={"flex"} justifyContent={"center"}>
      {/* Status */}
      <Button
        // onClick={toggleDrawer(true)}
        onClick={handleClickOpen}
        sx={{
          fontWeight: 380,
          borderRadius: "16px",
          color: "black",
          backgroundColor: "white",
          height: "2rem",
          mt: 2,
          mr: 2,
          width: "240px",
          border: "1px solid #7126B5",
          textTransform: "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
        variant="contained"
      >
        Status
      </Button>
      {/* Hubungin WA */}
      <Button
        sx={{
          fontWeight: 380,
          borderRadius: "16px",
          color: "white",
          backgroundColor: "#7126B5",
          height: "2rem",
          mt: 2,
          width: "240px",
          textTransform: "none",
        }}
        variant="contained"
        onClick={() => window.open(`https://api.whatsapp.com/send?phone=${profile.number_phone}`)}
      >
        Hubungi &nbsp;
        <WhatsAppIcon sx={{ fontSize: "1.2rem" }} />
      </Button>

      {/* Drawer */}
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(52% - ${drawerBleeding}px)`,
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          // container={container}
          anchor="bottom"
          open={open}
          // onClose={toggleDrawer(false)}
          onClose={handleClose}
          onOpen={handleClickOpen}
          // onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              visibility: "invisible",
              right: 0,
              left: 0,
              height: "100%",
              px: 4,
              overflow: "auto",
            }}
          >
            <Puller />
            <Box mt={4}>
              <Typography
                id="drawer-drawer-title"
                fontSize={"12px"}
                fontWeight={400}
              >
                Perbarui status penjualan produkmu
              </Typography>
            </Box>

            {/* Radio Status */}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  checked={statusValue === "berhasil"}
                  onChange={handleChangestatusValue}
                  value="berhasil"
                  control={<Radio />}
                  label="Berhasil terjual"
                  sx={{ fontWeight: 400, fontSize: "12px" }}
                />
                <Typography
                  fontSize={"12px"}
                  color={"#8A8A8A"}
                  fontWeight={400}
                  ml={"2rem"}
                >
                  Kamu telah sepakat menjual produk ini kepada pembeli
                </Typography>
                <FormControlLabel
                  checked={statusValue === "batal"}
                  onChange={handleChangestatusValue}
                  value="batal"
                  control={<Radio />}
                  label="Batalkan transaksi"
                />
                <Typography
                  fontSize={"12px"}
                  color={"#8A8A8A"}
                  fontWeight={400}
                  ml={"2rem"}
                >
                  Kamu membatalkan transaksi produk ini dengan pembeli
                </Typography>
              </RadioGroup>
            </FormControl>

            {/* Button */}
            <Box width={"100%"} onClick={handleSubmit}>
              {statusValue === "" ? (
                <Disabledbutton
                  title={
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"center"}
                      color={"#000"}
                    >
                      Kirim
                    </Box>
                  }
                />
              ) : (
                <ButtonClick
                  onClick={() => {
                    // handleSubmit(true);
                    handleClickOpenAlert(true);
                  }}
                  title={
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"center"}
                    >
                      Kirim
                    </Box>
                  }
                  primary
                />
              )}
            </Box>
          </StyledBox>
        </SwipeableDrawer>
      </Root>

      {/* Alert */}
      <Collapse in={openAlert}>
        <Alert
          variant="filled"
          severity="success"
          icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            top: "3rem",
            left: "1rem",
            height: 42,
            width: 300,
            borderRadius: "12px",
            position: "absolute",
            alignItems: "center",
          }}
        >
          Status produk berhasil diperbarui
        </Alert>
      </Collapse>
    </Box>
  );
};

export default DrawerStatus;
