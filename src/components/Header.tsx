import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { ContactDialog } from "./ContactDialog";
import { ContentContainer } from "./ContentContainer";
import { useUiContext } from "../context/UiContext";
import MenuIcon from "@mui/icons-material/Menu";

const buttonSx = {
  position: "relative",
  ":after": {
    content: '""',
    transition: "all .3s",
    position: "absolute",
    bottom: "-8px",
    left: "50%",
    height: "1px",
    backgroundColor: "rgb(43, 69, 39)",
    width: "0px",
  },
  ":hover": {
    cursor: "pointer",
    ":after": {
      width: "100%",
      left: "0",
    },
  },
};

export const Header = () => {
  const { isMobile } = useUiContext();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      style={{
        backgroundColor: "white",
        width: isMobile ? "calc(100% - 20px)" : "100%",
        ...(isMobile && { padding: "0 10px" }),
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        position: "fixed",
        zIndex: 10,
      }}
    >
      <ContentContainer sx={{ display: "flex", padding: 0 }}>
        <Box sx={{ flexGrow: 1 }}>
          <img src="/logomobile.png" height="65px" />
        </Box>
        {isMobile ? (
          <>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem sx={{ width: "200px" }} onClick={handleClose}>
                Contact
              </MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Services</MenuItem>
              <MenuItem
                onClick={() => {
                  setIsContactOpen(true);
                  handleClose();
                }}
              >
                Call Us!
              </MenuItem>
            </Menu>
          </>
        ) : (
          <nav style={{ display: "flex", placeItems: "center", gap: "48px" }}>
            <Typography variant="body1" sx={buttonSx}>
              Contact
            </Typography>
            <Typography variant="body1" sx={buttonSx}>
              About
            </Typography>
            <Typography variant="body1" sx={buttonSx}>
              Services
            </Typography>
            <Button
              variant="contained"
              disableElevation
              color="primary"
              endIcon={<PhoneIcon />}
              sx={{ textTransform: "none" }}
              onClick={() => {
                setIsContactOpen(true);
              }}
            >
              Call Us!
            </Button>
          </nav>
        )}
        <ContactDialog isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      </ContentContainer>
    </header>
  );
};
