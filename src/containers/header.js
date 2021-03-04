import React,{createElement,useState,useEffect} from 'react'
import {useDispatch,useSelector,connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Button from '@material-ui/core/Button';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChatIcon from '@material-ui/icons/Chat';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CloseIcon from '@material-ui/icons/Close';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BrushIcon from '@material-ui/icons/Brush';
import Badge from '@material-ui/core/Badge';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TextField from '@material-ui/core/TextField';
import "../css/product.css";
import Slide from '@material-ui/core/Slide';
import {loadCart} from '../actions/cart'
import axios from 'axios'
import url from '../components/url'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {toast} from 'react-toastify';
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
    }
  },

  menuButton: {
    marginTop:'15px',
    float:'right',
    color:'purple'
  },
  title: {
    flexGrow: 1,
    color:'purple',
    fontFamily:'Dancing script',
    fontSize:'30px',
    paddingLeft:'10px'
  },
  logo:{
    width:'50px', 
    height:'50px'
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



const signout=(push,dispatch)=>
{
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('name')

  dispatch({type:'clear_cart'});
  dispatch({type:'clear_order'});
   push('/signin')
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Header(props)
{
  const matches = useMediaQuery('(min-width:600px)');

    //const { window } = props;
    const container = document.body;//window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const dispatch=useDispatch()

    const handleDrawerToggle = () => {
       setMobileOpen(!mobileOpen);
     };

     const [latest,setLatest]=useState([])
     const [openSearch, setOpenSearch] = React.useState(false);
     const [openDp, setOpenDp] = React.useState(false);

     const [searchstring, setSearchstring] = React.useState("");
     const [searchList, setSearchList] = React.useState([]);

     const token=localStorage.getItem('token')
     const email=localStorage.getItem('email')
     const name=localStorage.getItem('name')
     const [flag,setFlag]=useState(false);


     useEffect(()=>{
          if(!flag){
            const token=localStorage.getItem('token')
            props.action.loadCart(props.history.push,'Header')
            setFlag(true);
          }
     },[])


     let menulist=[['Home','/',HomeIcon],['Quran','#','quran.jpg'],['Namaz','#','namaz.jpg'],['Duas','#','duas.jpg'],['Ziyarat','#','ziyarat.jpg'],
    ['Events','#','event.png'],['Activities','#','activities.png'],['Gallery','#','gallery.png'],['About','#','about.jpg'],['Contact','#','contact.jpg']]
    
    if(!email)menulist?.push(['Sign in','/signin',PersonPinIcon])
     else menulist.push(['Sign out','/signin',PersonPinIcon])
     const adminMenulist=[['Add Paintings','/addpainting',AddPhotoAlternateIcon],['Add Videos','/addvideo',VideoCallIcon],
                          ['Delete Paintings','/deletepainting',DeleteForeverIcon],['Delete Videos','/deleteVideo',DeleteForeverIcon]]


     const drawer = (
       <div>
          <center>{<Avatar style={{borderColor:'#00008B',color:'lightgrey',marginTop:'10px',width:'70px',height:'70px'}} ></Avatar>}</center>
       <center><p>{name}</p></center>
        <div className={classes.toolbar} style={{marginTop:'-60px'}}/>
         <Divider />
         <List>
           {menulist.map((items, index) => (
             <ListItem button key={items[0]} onClick={()=>{(items[0]==='Sign out')?signout(props.history.push,dispatch):props.history.push(items[1])}}>
               {
                 (items[0]==='Home')?
                         <ListItemIcon >
                             <Avatar style={{backgroundColor:'aqua'}}><HomeIcon style={{color:'purple'}}/></Avatar>
                         </ListItemIcon>
                       :
               <ListItemIcon style={{color:'purple'}}><Avatar src={items[2]}/></ListItemIcon>
             }
               <ListItemText primary={items[0]} />
             </ListItem>

           ))}
         </List>
         <Divider />
         {
         (email==='syedhasnain9163@gmail.com')?
              <List>
              {
                  adminMenulist.map((items, index)=>{
                   return <ListItem button key={items[0]} onClick={()=>props.history.replace(items[1])}>
                     <ListItemIcon style={{color:'green'}}>{createElement(items[2], {})}</ListItemIcon>
                     <ListItemText primary={items[0]} />
                   </ListItem>
                  })
              }
              </List>
              :
              null
          }
          </div>
     );

  return <div >

<AppBar position="static">
  <Toolbar class='appbar'>
    <IconButton>
  <Avatar src='alqayem.png' className={classes.logo}/>
    
  <Typography variant="h6" className={classes.title}>
      Alqayem Kolkata 
    </Typography>
    
        </IconButton>
        {
          (!matches)?<IconButton className={classes.menuButton}  color="inherit" aria-label="menu" >
          <MenuIcon onClick={handleDrawerToggle}/>

          </IconButton>
          :null
         }
      

  </Toolbar>
</AppBar>
  <nav className={classes.drawer}  aria-label="mailbox folders">
    <center><CircularProgress id='loader' style={{marginTop:'100px',display:'none'}}/></center>

    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
  </nav>

  </div>


}


const mapStateToProps=(state)=>{
  return {cart:state.cartReducer}
}

const mapDispatchToProps=(dispatch)=>{
    return {action:bindActionCreators({loadCart},dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
