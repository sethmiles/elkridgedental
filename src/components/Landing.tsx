import React, { useState } from "react";
import { useUiContext } from "../context/UiContext";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { GreenColor } from "..";
import { ContactDialog } from "./ContactDialog";
import { ContentContainer } from "./ContentContainer";

const itemSx = { display: "flex", gap: "24px", alignItems: "center" };
const subItemSx = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};
const iconSx = { color: "#fff", fontSize: "32px" };

const number = Math.ceil(Math.random() * 3);

export const Landing = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const theme = useTheme();
  const { isMobile } = useUiContext();

  const textColor = {
    "1": { color: GreenColor["900"], background: "transparent" },
    "2": { color: "#fff", background: "transparent" },
    "3": { color: "#fff", background: "transparent" },
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        minHeight: isMobile ? "650px" : "475px",
        backgroundSize: "cover",
        backgroundImage: `url("/landing${number}.jpeg")`,
        display: "flex",
        position: "relative",
        zIndex: 0,
        ":before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: -1,
        },
      }}
    >
      <ContentContainer
        sx={{
          margin: isMobile ? "70px auto" : "20vh auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <Box
          sx={{
            width: isMobile ? "auto" : "fit-content",
            // @ts-ignore
            border: `5px solid ${textColor[number].color}`,
            // @ts-ignore
            background: textColor[number].background,
            padding: "32px",
            ...(isMobile && {
              textAlign: "center",
              background: "rgb(0,0,0, .5)",
              color: "#fff",
            }),
          }}
        >
          <Typography
            variant="h1"
            sx={{
              // @ts-ignore
              color: isMobile ? "#fff" : textColor[number].color,
              ...(isMobile && { fontSize: "48px", lineHeight: "64px" }),
            }}
          >
            We care about
            <br />
            your smile
          </Typography>
          <Typography
            variant="caption"
            sx={{
              //   @ts-ignore
              color: isMobile ? "#fff" : textColor[number].color,
              fontSize: "18px",
              display: "block",
              marginTop: "24px",
            }}
          >
            Providing the best dental care in the Rockies
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            sx={{ textTransform: "none", marginRight: "32px" }}
            onClick={() => {
              setIsContactOpen(true);
            }}
          >
            Book an appointment
          </Button>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Meet our Doctors
          </Button>
        </Box>
      </ContentContainer>

      <ContactDialog isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </Box>
  );
};
