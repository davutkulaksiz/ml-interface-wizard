import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Home,
  IntegrationInstructions,
  Add,
  SquareFoot,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactComponent as Logo } from "../../assets/logo_white.svg";

const drawerWidth = 270;
const navItems = [
  { name: "Home", path: "/home" },
  { name: "Wizard", path: "/interface-wizard" },
  { name: "ML Measure", path: "/measure" },
  { name: "ML Contribute", path: "/contribute" },
];

const Navbar = () => {
  const history = useHistory();

  const current = history.location.pathname.includes("home")
    ? "Home"
    : history.location.pathname.includes("interface-wizard")
      ? "ML Interface Wizard"
      : history.location.pathname.includes("/measure")
        ? "ML Measure"
        : "ML Contribute";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerAction = () => {
    setDrawerOpen(!drawerOpen);
  };

  const redirectTo = (path) => {
    setDrawerOpen(false);
    history.push(path);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                handleDrawerAction();
              }}
            >
              {drawerOpen ? <ArrowBackIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {current}
            </Typography>
            <Logo style={{ width: 140 }} />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navItems.map((navItem, index) => (
              <ListItem key={navItem.name} disablePadding>
                <ListItemButton
                  onClick={() => {
                    redirectTo(navItem.path);
                  }}
                >
                  <ListItemIcon>
                    {navItem.name === "Home" && <Home />}
                    {navItem.name === "Wizard" && <IntegrationInstructions />}
                    {navItem.name === "ML Measure" && <SquareFoot />}
                    {navItem.name === "ML Contribute" && <Add />}
                  </ListItemIcon>
                  <ListItemText primary={navItem.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
