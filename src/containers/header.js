import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import "../css/home.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  searchBar: {
    position: 'relative',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    width: '100%',
    
  },
  menuButton: {
    marginTop: '10px',
    float: 'right',
    position: 'absolute',
    right: 0,
    color: '#20b2aa',
  },
  title: {
    flexGrow: 1,
    color: '#20b2aa',
    paddingLeft: '10px',
    fontWeight: 'bold',
  },
  menulist: {
    color: '#20b2aa',
    fontSize: '17px',
    padding: '0 20px 0 20px',
    fontFamily: 'serif',
    color: '#000064',
    float: 'right'
  },

  logo: {
    width: '50px',
    height: '50px',
    marginLeft: '-20px',
    padding: 0
  },
  menulistContainer: {
    float: 'right',
    display: 'block'
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));



const signout = (push, dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('name')

  dispatch({ type: 'clear_cart' });
  dispatch({ type: 'clear_order' });
  push('/signin')
}


function Header(props) {
  const matches = useMediaQuery('(min-width:600px)');

  const container = document.body;//window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const name = localStorage.getItem('name')


  let menulist = [['Home', '/', HomeIcon], ['Blog', '#', 'ziyarat.jpg'],
  ['Events', '#', 'event.png'], ['Activities', '#', 'activities.png'], ['Gallery', '#', 'gallery.png'], ['About', '#', 'about.jpg'], ['Contact', '#', 'contact.jpg']]

  const drawer = (
    <div>
      <center>
        <Avatar style={{ borderColor: '#00008B', color: 'lightgrey', marginTop: '10px', width: '70px', height: '70px' }} ></Avatar>
        <p>{name}</p>
      </center>

      <div className={classes.toolbar} style={{ marginTop: '-60px' }} />
      <Divider />
      <List>
        {
          menulist.map((items, index) => (
            <ListItem button key={items[0]} onClick={() => { (items[0] === 'Sign out') ? signout(props.history.push, dispatch) : props.history.push(items[1]) }}>
              {
                (items[0] === 'Home') ?
                  <ListItemIcon >
                    <Avatar style={{ backgroundColor: 'aqua' }}><HomeIcon style={{ color: 'purple' }} /></Avatar>
                  </ListItemIcon>
                  :
                  <ListItemIcon style={{ color: 'purple' }}><Avatar src={items[2]} /></ListItemIcon>
              }
              <ListItemText primary={items[0]} />
            </ListItem>

          ))}
      </List>
      <Divider />

    </div>
  );

  return <div >

    <AppBar position="static" >
      <Toolbar className='appbar' id='toolbar'>
        <IconButton style={{ outline: 'none' }}>
          <Avatar src='alqayem.jpg' className={classes.logo} />

          <Typography variant="h6" className={classes.title} style={{ marginRight: (matches) ? '400px' : '20px' }}>
            Al-Qayam Trust
          </Typography>
          {
            (matches) ? <>
              {menulist.map(item => { return <Typography variant="h6" id='menulist' className={classes.menulist}>    {item[0]} </Typography > })}

              <Button class='visit-us'>Visit us</Button>
            </>
              : null
          }
        </IconButton>



        {
          (!matches) ? <IconButton className={classes.menuButton} color="inherit" aria-label="menu" >
            <MenuIcon style={{ width: '30px', height: '30px', marginTop: '-10px' }} onClick={handleDrawerToggle} />

          </IconButton>
            : null
        }
      </Toolbar>
    </AppBar>
    <nav className={classes.drawer} aria-label="mailbox folders">
      <center><CircularProgress id='loader' style={{ marginTop: '100px', display: 'none' }} /></center>

      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      {
        (!matches) ? <>
          <Hidden smUp implementation="css">

            <Drawer
              container={container}
              variant="temporary"
              anchor='right'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,            // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </>
          : null
      }

    </nav>

  </div>


}


const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
