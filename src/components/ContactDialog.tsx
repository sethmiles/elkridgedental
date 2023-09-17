import React, { useState } from "react";
import { useUiContext } from "../context/UiContext";
import { Box, Dialog, IconButton, Typography, useTheme } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { GreenColor } from "..";
import { ContactInfo } from "./ContactInfo";
import CloseIcon from "@mui/icons-material/Close";

export const ContactDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (_isOpen: boolean) => void;
}) => {
  const theme = useTheme();
  const { isMobile } = useUiContext();
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      fullScreen={isMobile}
      fullWidth
      maxWidth="md"
    >
      <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
        {!isMobile && (
          <Box
            sx={{
              backgroundImage: 'url("/bamboo-brush.jpg")',
              backgroundSize: "cover",
              width: "50%",
            }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: GreenColor["50"],
            padding: "24px",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              borderBottom: `1px solid ${theme.palette.primary}`,
              marginBottom: "12px",
              ...(isMobile && {
                display: "flex",
                margin: "0 auto",
                width: "fit-content",
                flexDirection: "column",
                placeItems: "center",
              }),
            }}
          >
            {isMobile && (
              <IconButton
                sx={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <CloseIcon sx={{ color: GreenColor["900"] }} />
              </IconButton>
            )}
            <Typography variant="h2" sx={{ marginBottom: "24px" }}>
              Let's Connect!
            </Typography>
            <ContactInfo iconColor={isMobile ? GreenColor["900"] : "#fff"} />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
