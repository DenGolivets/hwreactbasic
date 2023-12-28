import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, Link } from "react-router-dom";
import { MENU } from '../../constans/constans';
import "./navigation.css"
import logo from '../../img/logo.png'
import { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import LogOut from '../../pages/Auth/LogOut';


const pages = ['Home', 'TV Shows', 'Favorites', 'About Me'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const textStyle = {
  gap: '20px',
}


function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = useState(null);
  const userAvatar = user && user.photoURL ? user.photoURL : "/static/images/avatar/2.jpg";
  console.log(user && user.photoURL)

  const handleLogOut = () => {
    LogOut();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(34, 34, 34, 0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > 
          <Link to={`/`}>
              <img src={logo} alt="logo" width="140" height="40" />
          </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* LOGO */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly'   }}}>
            {MENU.map(({ name, link }, index) => (
              <NavLink
                style={textStyle}
                key={index}
                className={({isActive}) => 
              `navLink ${isActive ? 'isActive' : ''}`
            } to={link}
              >
                {name}
              </NavLink>
            ))}
            <Link to="/auth/register" className="navLink">Login/Register</Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Avatar" src={userAvatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuItem onClick={handleCloseUserMenu}>
                  <a style={{textDecoration:'none', color:'red'}} href="/profile">
                    <Typography textAlign="center">Profile</Typography>
                  </a>
              </MenuItem>
              <MenuItem onClick={ () => {handleCloseUserMenu(); handleLogOut()}}>
                  <Typography textAlign="center">Logout</Typography>
              </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;