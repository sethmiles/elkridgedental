import React, { useState } from "react";
import { useUiContext } from "../context/UiContext";
import { Box, Dialog, Typography, useTheme } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { GreenColor } from "..";

export const ContactInfo = ({ iconColor }: { iconColor: string }) => {
  const itemSx = {
    display: "flex",
    gap: "24px",
    marginBottom: "36px",
  };
  const subItemSx = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };
  const iconSx = { color: iconColor, fontSize: "32px" };
  return (
    <>
      <Box sx={itemSx}>
        <ChatBubbleOutlineOutlinedIcon sx={iconSx} />
        <Box sx={subItemSx}>
          <Typography
            variant="h3"
            onClick={() => {
              window.open("tel:+9705865657");
            }}
            sx={{
              borderBottom: `1px solid transparent`,
              ":hover": {
                borderBottom: `1px solid ${GreenColor[700]}`,
              },
              cursor: "pointer",
              lineHeight: "27px",
            }}
          >
            970-586-5657
          </Typography>
          <Typography variant="body1">Fax: 970-586-5657</Typography>
        </Box>
      </Box>
      <Box sx={itemSx}>
        <RoomOutlinedIcon sx={iconSx} />
        <Box sx={subItemSx}>
          <Typography variant="h3" sx={{ lineHeight: "27px" }}>
            131 Stanley Ave
          </Typography>
          <Typography variant="body1">#201 Estes Park, CO 80517</Typography>
        </Box>
      </Box>
      <Box sx={itemSx}>
        <EmailOutlinedIcon sx={iconSx} />
        <Box sx={subItemSx}>
          <Typography variant="h3" sx={{ lineHeight: "27px" }}>
            Send us an Email
          </Typography>
          <Typography
            variant="body1"
            onClick={() => {
              window.open("mailto:elkridgedentistry131@gmail.com");
            }}
            sx={{
              borderBottom: `1px solid transparent`,
              ":hover": {
                borderBottom: `1px solid ${GreenColor[700]}`,
              },
              cursor: "pointer",
            }}
          >
            elkridgedentistry131@gmail.com
          </Typography>
        </Box>
      </Box>
      <Box sx={itemSx}>
        <ScheduleOutlinedIcon sx={iconSx} />
        <Box sx={subItemSx}>
          <Typography variant="h3" sx={{ lineHeight: "27px" }}>
            Monday - Thursday: 8AM-5PM
          </Typography>
          <Typography variant="body1">Friday: By Appointment Only</Typography>
        </Box>
      </Box>
    </>
  );
};
