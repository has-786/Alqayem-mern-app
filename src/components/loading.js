import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/home.css'

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:'25vh'
      },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <center>
         <img src='alqayem.jpg' class='img img-circle' id='img-loading'/>
      <div>Loading...Please wait</div>
      </center>
    </div>
  );
}
