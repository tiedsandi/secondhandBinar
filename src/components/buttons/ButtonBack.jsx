import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ButtonBack = (left, right, bottom, top) => {
  let navigate = useNavigate();
  return (
    <ArrowBackIcon
      data-testid="button-back"
      onClick={() => navigate(-1)}
      sx={{
        fontSize: "30px",
        color: "black",
        borderRadius: "50%",
        position: "fixed",
        zIndex: "99",
        cursor: "pointer",
        left: left,
        right: right,
        bottom: bottom,
        top: top,
      }}
    />
  );
};

export default ButtonBack;
