import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "lightblue",color:"black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"White"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <div><h1 style={{WebkitTextStrokeColor:"blue",color:"black"}}><i>STRIKERS WARDROBE</i></h1></div>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    <i><HomeRoundedIcon></HomeRoundedIcon></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}><i><ShoppingCartIcon></ShoppingCartIcon></i></NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}><i><InfoIcon></InfoIcon></i></NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}><i><ContactPageIcon></ContactPageIcon></i></NavLink>
                </li>
                <li>
                  <NavLink to={"/size"}><i><CheckroomIcon></CheckroomIcon></i></NavLink>
                </li>
                <li>
                  <NavLink to={"/FAQ"}><i><LiveHelpIcon></LiveHelpIcon></i></NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
