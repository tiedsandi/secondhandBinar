import { Box, Typography } from "@mui/material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Shop2Icon from "@mui/icons-material/Shop2";

const KategoryPage = ({ name, setPage, page }) => {
  return (
    <Box
      data-testid="category-page"
      display="flex"
      alignItems="center"
      py={1}
      color={page === name ? "#7126B5" : "#000"}
      justifyContent="space-between"
      onClick={() => setPage(name)}
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box display="flex" alignItems="center">
        {name === "Semua Produk" && <ViewInArIcon />}
        {name === "Diminati" && <FavoriteBorderIcon />}
        {name === "Terjual" && <MonetizationOnOutlinedIcon />}
        {name === "Pembelian" && <Shop2Icon />}
        <Typography
          ml={1}
          variant="subtitle1"
          color={page === name ? "#7126B5" : "#000"}
        >
          {name}
        </Typography>
      </Box>
      <ArrowForwardIosOutlinedIcon />
    </Box>
  );
};

export default KategoryPage;
