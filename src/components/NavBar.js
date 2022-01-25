import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import StyledLink from "./StyledLink";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ShopIcon from "@mui/icons-material/Shop";

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
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Dev Merch
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
                <StyledLink to="/">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <ListItemIcon>
                      <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </MenuItem>
                </StyledLink>
                <StyledLink to="/shop">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <ListItemIcon>
                      <ShopIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Shop" />
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
              Dev Merch
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                gap: "10px",
                display: { xs: "none", md: "flex" },
              }}
            >
              <StyledLink to="/">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Home
                </Button>
              </StyledLink>
              <StyledLink to="/shop">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Shop
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
