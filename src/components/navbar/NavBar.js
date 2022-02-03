import React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
} from "@mui/icons-material";

import { StyledLink } from "../utils";

const NavBar = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {/* fullscreen */}
              <StyledLink to="/" color="#fff">
                Dev Merch
              </StyledLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <StyledLink to="/login" color="#000000de">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <ListItemIcon>
                      <LoginIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </MenuItem>
                </StyledLink>
                <StyledLink to="/logout" color="#000000de">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </MenuItem>
                </StyledLink>
                <StyledLink to="/wishlist" color="#000000de">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <ListItemIcon>
                      <FavoriteBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Wishlist" />
                  </MenuItem>
                </StyledLink>
                <StyledLink to="/cart" color="#000000de">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <ListItemIcon>
                      <ShoppingCartOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                  </MenuItem>
                </StyledLink>
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {/* mobile view */}
              <StyledLink to="/" color="#fff">
                Dev Merch
              </StyledLink>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                gap: "10px",
                display: { xs: "none", md: "flex" },
              }}
            >
              <StyledLink to="/login">
                <Button
                  sx={{
                    my: 2,
                    textTransform: "none",
                    color: "white",
                    display: "flex",
                    gap: ".2rem",
                  }}
                  size="large"
                >
                  <LoginIcon fontSize="small" />
                  Login
                </Button>
              </StyledLink>
              <StyledLink to="/logout">
                <Button
                  sx={{
                    my: 2,
                    textTransform: "none",
                    color: "white",
                    display: "flex",
                    gap: ".2rem",
                  }}
                  size="large"
                >
                  <LogoutIcon fontSize="small" />
                  Logout
                </Button>
              </StyledLink>
              <StyledLink to="/wishlist">
                <Button
                  sx={{
                    my: 2,
                    textTransform: "none",
                    color: "white",
                    display: "flex",
                    gap: ".2rem",
                  }}
                  size="large"
                >
                  <FavoriteBorderIcon fontSize="small" />
                  Wishlist
                </Button>
              </StyledLink>
              <StyledLink to="/cart">
                <Button
                  sx={{
                    my: 2,
                    textTransform: "none",
                    color: "white",
                    display: "flex",
                    gap: ".2rem",
                  }}
                  size="large"
                >
                  <ShoppingCartOutlinedIcon fontSize="small" />
                  Cart
                </Button>
              </StyledLink>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={() => ""} sx={{ p: 0 }}>
                  <Avatar alt="Shashi" src="/" />
                </IconButton>
              </Tooltip>
              {/* add menu here if u want in future */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <>{children}</>
    </>
  );
};
export default NavBar;
