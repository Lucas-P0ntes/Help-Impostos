import React, {  } from 'react';
import  useStyles from './styles';

import logo from "../img/LOGO.PNG"
import {Link} from 'react-router-dom';

function Navbar(){
    const classes =useStyles();
    return(
        <>
        <div className={classes.appBar}>
        <Link to='home' className={classes.img}>
        <img src={logo} alt="" className={classes.img}/>
        </Link>
          <div className={classes.Bar}>
            
        
                 <Link to="/home"className={classes.button} >
                  Home 
                 </Link>
                 <Link to="/Mapa"className={classes.button} >
                  Mapa interativo
                 </Link>
                <Link to="/AbrirEmpresa"className={classes.button} >
                  Como Abrir Empresa ?
                 </Link>
               
                 <Link to="/SobreNós"className={classes.button} >
                  Sobre Nós
                 </Link>
                 
                

            </div>
        </div>
          
          
        </>

    );
}export default Navbar ;
