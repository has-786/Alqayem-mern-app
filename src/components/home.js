import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Copyright from './copyright'
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import Header from '../containers/header'
import '../css/product.css'
import Button  from '@material-ui/core/Button';
import { AccountBalanceOutlined } from '@material-ui/icons';
import { DialogContent,Dialog,DialogTitle, Divider } from '@material-ui/core';

export  function Home(props){
  const useStyles = makeStyles({
    root: {
      maxWidth: '300px',
      marginTop:'15px',
      boxShadow: "0px 0px 3px 3px green"
    },
    rootDialog: {
      maxWidth: '500px',
      marginTop:'15px',
      boxShadow: "0px 0px 3px 3px green"
    },
    

    root1: {
      width: '300px',
      boxShadow: "0px 0px 3px 3px green",
    },
    root2: {
      width: '100px',
      height:'100px',
      boxShadow: "0px 0px 3px 3px green",
      marginTop:'10px'
    },
    rootIcons: {
      backgroundColor:'aqua',
      margin:'5px',
      boxShadow: "0px 0px 3px 3px green",
    },
    footercard: {
      backgroundColor:'aqua',
      boxShadow: "0px 0px 3px 3px green",
    },
    media: {
      height: 200,
      width:  300
    },
    mediaDialog: {
      height: 300,
      width:  300
    },
    media2: {
      height: 100,
      width:  100
    },
    
  });


  const icons=[['Quran','#','quran.jpg'],['Namaz','#','namaz.jpg'],['Duas','#','duas.jpg'],['Ziyarat','#','ziyarat.jpg'],
    ['Events','#','event.png'],['Activities','#','activities.png'],['Gallery','#','gallery.png'],]
    
  const services=[{name:'Azadari',details:'fa',src:'azadari.jpg'},{name:'Charity',details:'sf',src:'charity.jpg'},{name:'Education',details:'',src:'education.png'}]
  const workdone=[{name:'Helped families with food',count:100},{name:'Helped in Education',count:50},{name:'Events done',count:20}]
  const gallery=[{name:'Ali day 2021',src:'mm1.jpg'},{name:'Ali day 2021',src:'mm2.jpg'},{name:'Ali day 2021',src:'mm3.jpg'},
                 {name:'Ayyame Fatimiya 2021',src:'mm4.jpg'},{name:'Ayyame Fatimiya 2021',src:'mm5.jpg'},{name:'Ayyame Fatimiya 2021',src:'mm6.jpg'}]
  
  const [imgName,setImgName]=useState("")
  const [imgLink,setImgLink]=useState("")
  const [openImg,setOpenImg]=useState("")

  const handleCloseImg = () => {  setOpenImg(false); };
  const handleOpenImg  = () => {  setOpenImg(true); };
  const classes = useStyles();

    return <div>
    <Header {...props}/>
    <Dialog
              open={openImg}
              onClose={handleCloseImg}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{imgName}</DialogTitle>
                <DialogContent>
                  <Card className={classes.rootDialog}>
                  <CardActionArea>
                  <CardMedia  
                    className={classes.mediaDialog}
                    image={imgLink}
                    title={imgName}
                    />
                    </CardActionArea>
                </Card>
              </DialogContent>
            </Dialog>
    <div class='body'>
       
     <div class='mainImage' style={{width:"100%"}}>
     </div>
  
   
 
  {/*<section class="features-icons bg-light text-center">
    <div id='contain' class="container" >*/}
   <Card className={classes.rootIcons}>
      <CardActionArea>
        <div class="showicons">
        {
          icons.map(item=>{
            return  <div class="features-icons-item mx-auto mb-0 mb-lg-3" class='icons'>
                      <img src={item[2]} width="70px" height="70px" class="img img-circle"/>
                      <center> <h5><Link to={item[1]} style={{fontFamily:"sans-serif-condensed-medium",color:"#008000",textDecoration:"None"}}> {item[0]} </Link></h5></center>
                    </div>
          })
        }
        </div>
      </CardActionArea>
    </Card>
  

	  
	 {/* </div>
    <br />
  </section>*/}
  <div class='title'>
    <center><h4 class='title-text'>Our Goals</h4></center>
  </div>
  
  <div class="showicons" >
        {
          services.map(s=>{
              return <Card className={classes.root}>
              <CardActionArea>
                <CardMedia 
                className={classes.media}
                image={s.src}
                title={s.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h6">
                    {s.name}
                  </Typography>
                  <Typography style={{marginTop:'-30px',marginLeft:'180px'}} color='primary' >Learn More</Typography> 

                </CardContent>
              </CardActionArea>
            </Card>
          })
            
        }
          {/*<div class="col-md-6">
          <img src="http://thelasthope.site/uploads//Mahdi_atfs.jpg"  width="100%" height="1000px"/>
      </div>*/}
  </div>
  <br /><br />

  <div class='title'>
    <center><h4 class='title-text'>Our Achievements</h4></center>
  </div>
  <br />
  
  
  <div class="showicons" >
        {
          workdone.map(s=>{
              return <Card className={classes.root1}>
              <CardActionArea>
                <CardContent>
                <Typography variant="h6" component="h6">
                   <center> {s.name}</center>
                  </Typography>
                <Typography gutterBottom variant="h3" component="h3" style={{color:'green'}}>
                   <center> {s.count}</center>
                  </Typography>
                  <Typography color='primary' >Learn More</Typography> 

                </CardContent>
              </CardActionArea>
            </Card>
          })
            
        }
  </div>
      
      <br /><br />
      


      <div class='title'>
       <center><h4 class='title-text'>Memorable Moments</h4></center>
      </div>
  
      <br />

  <div class="showicons" >
        {
          gallery.map(g=>{
              return <Card className={classes.root2}>
              <CardActionArea>
              <CardMedia  
                className={classes.media2}
                image={g.src}
                title={g.name}
                onClick={()=>{setImgName(g.name); setImgLink(g.src); handleOpenImg();}}
                />
              </CardActionArea>
            </Card>
          })
            
        }
        <Button align='right' color='primary' style={{marginTop:'5px'}}>See More</Button> 
  </div>
      
      <br /><br />
      

  <section  style={{background:'black'}}>
  <Divider />

      <div class="container" >
        <div class="row">
          <div class="col-md-4 animated" data-animate="fadeInLeft" style={{marginTop:'10px'}} >
            <form action="#">
              <div class="row">
                <div class="col-md-12">
                    <h4 style={{color:'aqua'}}>Write to us</h4>
                  </div>             
                 <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Your Name" style={{marginBottom:'5px'}}/>
                </div>
                <div class="col-md-6">
                  <input type="email" class="form-control" placeholder="Your Email"  style={{marginBottom:'5px'}}/>
                </div>
                <div class="col-md-12">
                  <textarea class="form-control" rows="3" placeholder="Tell Us Everything"  style={{marginBottom:'5px'}}></textarea>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-sm btn-primary submit">Send</button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-md-4 animated" style={{marginTop:'10px'}} >
                    <h4 style={{color:'aqua'}} >Contact us</h4>
            <address>
                <span  class='footericons'><i class="footericons fa fa-map-marker fa-lg"></i>&nbsp; 84 State Road 123 City, State 24813</span><br /><br />
                <span  class='footericons'><i class="footericons fa fa-phone fa-lg"></i>&nbsp; (123) xxx - xxx</span><br /><br />
                <span  class='footericons'><i class="footericons fa fa-envelope-o fa-lg"></i>&nbsp; <a href="mailto:contact@example.com">contact&#64;example.com</a></span><br /><br />
                <span  class='footericons'><i class="footericons fa fa-globe fa-lg"></i>&nbsp; <a href="http://support.example.com">support.example.com</a></span>
            </address>
          </div>
          
          <div class="col-md-4 animated" style={{marginTop:'10px'}} data-animate="fadeInRight">
                    <h4 style={{color:'aqua'}}>Follow us at</h4>
                  <address>
                      <span class='footericons'><i class="footericons fa fa-facebook fa-lg"></i>&nbsp; <a href='http://www.facebook.com/alqayemorg' target='_blank'>facebook.com/alqayemorg</a></span><br /><br />
                      <span class='footericons'><i class="footericons fa fa-instagram fa-lg"></i>&nbsp; <a href='http://www.instagram.com/alqayemorg' target='_blank'>instagram.com/alqayemorg</a></span><br /><br />
                      <span class='footericons'><i class="footericons fa fa-youtube fa-lg"></i>&nbsp; <a href='http://www.youtube.com/alqayemorg' target='_blank'>youtube.com/alqayemorg</a></span><br /><br />
                      <span class='footericons'><i class="footericons fa fa-twitter fa-lg"></i>&nbsp; <a href='http://www.twitter.com/alqayemorg' target='_blank'>twiitter.com/alqayemorg</a></span>
                  </address>
          </div>
		  
        </div>
        <Copyright />
      </div>
    </section>

   
    </div>
  </div>

}




export default Home;
