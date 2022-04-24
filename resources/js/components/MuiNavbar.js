import * as React from 'react';
import ReactDOM from 'react-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { useEffect,useState } from 'react';
import axios from 'axios';
import * as icons from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MuiNavbar = (props) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [navItems, setNavItems] = useState([]);
    const [currentPageName, setCurrentPageName] = useState('Főoldal');
    const [error, setError] = useState(false);

    useEffect(() => {
        parseNavItems()
    },[])


    const parseNavItems = async () => {
        try{
            const navitems = JSON.parse(props.navitems);
            setNavItems(navitems)

            let currentPage = navitems.filter(i => window.location.pathname == `/${i.route}`)
            
            if(currentPage.length > 0){
                setCurrentPageName(currentPage[0].name)
            }
        }catch(err){
            setError(true)
        }
    }

    const handleDrawerOpen = () => {
      setOpen(true);
      toggleMainPadding(true)
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
      toggleMainPadding(false)
    };

    const onLogoutClick = () => {
        axios.post("/logout")
        .then(() => {
            window.location.reload()
        })
    }

    const toggleMainPadding = (drawerOpen) => {
      let main = document.getElementsByTagName('main')[0];

      if(drawerOpen){
        main.style.paddingLeft = "264px";
      }else{
        main.style.paddingLeft = "24px";
      }

    }
  
    return (
      <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div"  sx={{ flexGrow: 1 }}>
              {currentPageName}
            </Typography>
            <Typography sx={{margin: theme.spacing(0, 2)}} variant="p" noWrap component="div">
              {props.username}
            </Typography>
            <Button variant="outlined" color="error" >Kijelentkezés</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {
                navItems.map((item, index) => {
                    const Icon = icons[item.icon]
  
                    return (
                    <ListItem href={item.route} component="a" button key={item.name}>
            
                    <ListItemIcon>
                     <Icon />
                        
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                  )
                })
            }
          </List>
          <Divider />
          <List>
            <ListItem onClick={onLogoutClick} component="button" button key={"Kijelentkezés"}>
                <ListItemText primary={"Kijelentkezés"} />
              </ListItem>
          </List>
        </Drawer>
      </Box>
      </ThemeProvider>
    );

  
}
 
export default MuiNavbar;


if (document.getElementById('mui-navbar')) {
    const el = document.getElementById('mui-navbar')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<MuiNavbar {...props} />, document.getElementById('mui-navbar'));
}















/* 
 const [navItems, setNavItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        parseNavItems()
    },[])


    const parseNavItems = () => {
        try{
            setNavItems(JSON.parse(props.navitems))
        }catch(err){
            setError(true)
        }
    }

*/