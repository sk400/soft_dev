import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Stack,
  Box,
  IconButton,
} from "@mui/material";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(!open);
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          position: "fixed",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography
              color="black"
              sx={{
                fontFamily: "Merriweather",
                fontSize: "20px",
              }}
            >
              Soft Dev
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
              color="black"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              gap={3}
            >
              <NavLink name="Home" to="/" />
              <NavLink name="About" to="/about" />
              <NavLink name="Blog" to="/blog" />
              <NavLink name="Contact" to="/contact" />
            </Box>
            <IconButton
              sx={{
                display: { xs: "block", sm: "none" },
              }}
              onClick={handleClose}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>
          <NavLink name="Home" to="/" />
        </MenuItem>
        <MenuItem onClick={() => setOpen(false)}>
          <NavLink name="About" to="/about" />
        </MenuItem>
        <MenuItem onClick={() => setOpen(false)}>
          <NavLink name="Blog" to="/blog" />
        </MenuItem>
        <MenuItem onClick={() => setOpen(false)}>
          <NavLink name="Contact" to="/contact" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
