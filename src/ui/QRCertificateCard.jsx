import React from "react";
import { Box, Typography } from "@mui/material";

const QRCertificateCard = ({ certificate,isMobile }) => {
  return (
    <Box
      bgcolor={"white"}
      width={isMobile ? "100%" : "268px"}
      border={"1px solid rgba(0, 0, 0, 0.12)"}
      sx={{
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      <Box
        component="img"
        src={certificate?.url}
        sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          width: isMobile ? "100%" : "268px",
          height: isMobile ? "140px" : "160px",
          objectFit: "cover",
        }}
        alt={certificate?.name}
      />
      <Box borderRadius={"8px"} bgcolor={"white"} padding={"10px"}>
        <Typography
          variant="h5"
          color={"#333333"}
          textAlign={"center"}
          sx={{ marginBottom: "10px" }}
        >
          {certificate?.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default QRCertificateCard;
