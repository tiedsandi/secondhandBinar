import { useMediaQuery, Typography } from "@mui/material";
import React from "react";

const InfoProdukDetail = ({ detail }) => {
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <>
      {isMobile ? (
        <React.Fragment data-testid="info-produk-detailM">
          <Typography variant="subtitle1" fontSize={".85rem"} mb={1} noWrap>
            {detail.data?.product}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            fontSize={".7rem"}
            mb={1}
          >
            {detail.data?.category.category}
          </Typography>
          <Typography variant="subtitle2" fontSize={".8rem"}>
            Rp. {detail.data?.price.toLocaleString("id-ID")}
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment data-testid="info-produk-detail">
          <Typography variant="subtitle1" mb={1}>
            {detail.data?.product}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={1}>
            {detail.data?.category.category}
          </Typography>
          <Typography variant="subtitle2">
            Rp. {detail.data?.price.toLocaleString("id-ID")}
          </Typography>
        </React.Fragment>
      )}
    </>
  );
};

export default InfoProdukDetail;
