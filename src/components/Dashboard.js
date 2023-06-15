import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login'
import HomeIcon from '@mui/icons-material/Home';
import Badge from '@mui/material/Badge';
import './dashboard.css'

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, Route, Routes } from 'react-router-dom';

import FormPage from './FormPage';
import LoginPage from "./LoginPage"
import Home from './Home';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='icon'>
                        <Badge>
                            <i className="fa-regular fa-bell" style={{ color: "red" }}></i>
                        </Badge>
                        <Dropdown as={ButtonGroup} style={{ marginLeft: "30px" }}>
                            <button style={{ borderRadius: "10px", width: "115px", border: "none", backgroundColor: "#fff" }}>
                                <img src={require("../components/Images/admin-avatar.png")} alt='' width={70} />
                                <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
                            </button>
                        </Dropdown>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <img src={require("../components/Images/cdat_logo.png")} style={{ width: "100px", marginRight: "50px" }} alt='' />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <CloseIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider className='mt3' />
                <div className='navbr-links mt4'><NavLink to='/' style={{ textDecoration: "none", color: "gray" }}><HomeIcon className=' mr4 f2 ml2' style={{ color: "gray" }} />Dashboard</NavLink></div>
                <div className='navbr-links'><NavLink to='/formpage' style={{ textDecoration: "none", color: "gray" }}><PersonIcon className='mr4 f2  ml2' style={{ color: "gray" }} />Schedule Meeting</NavLink></div>
                <div className='navbr-links'><NavLink to='/loginpage' style={{ textDecoration: "none", color: "gray" }}><LoginIcon className='mr4 f2  ml2' style={{ color: "gray" }} />Login</NavLink></div>
                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography paragraph>
                    <Routes>
                        <Route path='/formpage' element={<FormPage />}></Route>
                        <Route path='/loginpage' element={<LoginPage />}></Route>
                        <Route path='/' element={<Home />}></Route>
                    </Routes>
                </Typography>
            </Box>
        </Box>
    );
}