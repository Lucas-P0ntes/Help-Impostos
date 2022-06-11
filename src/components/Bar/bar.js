import React, {  } from 'react';
import  useStyles from './styles';
import {Link} from 'react-router-dom';

function Navbar(){
    const classes =useStyles();
    return(
        <>
        <div className={classes.appBar}>
        <Link to="/home"className={classes.button} >
                  HELP IMPOSTOS
                 </Link>
          <div className={classes.Bar}>
            
        
                 
                 <Link to="/home"className={classes.button} >
                  Facebook
                 </Link>
                <Link to="/home"className={classes.button} >
                  Instagram
                 </Link>
                 <Link to="/home"className={classes.button} >
                  Twitter
                 </Link>
             
                 
                

            </div>
          
        </div>
          
          
        </>

    );
}export default Navbar ;
