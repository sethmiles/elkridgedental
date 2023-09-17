import React, { useState } from "react";
import { useUiContext } from "../context/UiContext";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

export const ContentContainer = ({
  children,
  sx = {},
}: {
  children: JSX.Element | JSX.Element[];
  sx?: SxProps<Theme>;
}) => {
  const { isMobile } = useUiContext();
  return (
    <Box sx={{ padding: "32px", width: isMobile ? "100%" : "980px", ...sx }}>
      {children}
    </Box>
  );
};
