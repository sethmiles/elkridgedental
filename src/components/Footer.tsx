import React from "react";
import { useUiContext } from "../context/UiContext";
import { Box, Typography } from "@mui/material";
import { GreenColor } from "..";
import { ContactInfo } from "./ContactInfo";

export const Footer = () => {
  const { isMobile } = useUiContext();
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "48px 0 24px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          marginBottom: "64px",
        }}
      >
        <img src="/logomobile.png" height="65px" />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "48px",
          margin: "0 auto",
          width: "fit-content",
          flexDirection: isMobile ? "column" : "row",
          ...(isMobile && { placeItems: "center" }),
        }}
      >
        <ContactInfo iconColor={GreenColor["900"]} />
      </Box>
      <Typography
        variant="caption"
        sx={{
          textAlign: "center",
          display: "block",
          fontSize: "12px",
          marginTop: "64px",
        }}
      >
        Copyright 2023, Elk Ridge Dentistry
      </Typography>
    </footer>
  );
};
