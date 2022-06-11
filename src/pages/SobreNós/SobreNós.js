import React from 'react';


import useStyles from './styles';
 
function Home(){
    const classes = useStyles();
    return( 
   
    <div className={classes.root}>  
    <div className={classes.boxfromimg}>
    <div className={classes.boxtitle}>

    
       <h1 className={classes.title}>
             Sobre Nós
           </h1>
           <h2 className={classes.subtitle}>
           “As invenções são, sobretudo, o resultado de um trabalho teimoso.”
           <h2 className={classes.subtitle2}>
           SANTOS DUMONT</h2>
           </h2>
    </div>  </div>
     
        <div className={classes.boxall}>
     
           
          

           <h3 className={classes.text}>
           Atualmemte somos um dos paises que mais temos tributação nas empresas no mundo por conseguencia disso grande parte de nossas 
           empresas acabam falindo em menos de 5 anos. Nós indentificando esse problema resolvemos idealizar um projeto para levar informação 
           as para esses empreendedores, buscando informar sobre os impostos mas comuns para o empreendedor saber como se orientar e  lidar.
           <h3 className={classes.text}> Nossa site contém um mapa do Brasil dividido por estados para que cada empreendedor posso saber quais impostos de seu estado ele deve se preucupar.
           Nós acreitamos no potencial das empresas para mudar o Brasil, acreditamos também que apenas por meio do emprendedorismos podemos trazer uma nova realidae para 
           o Brasil afinal todo empreendedor está solucionado algum problema ou seja esta agregando valor na vida de alguem  e nisso que acretitamos.


           </h3> </h3>

        </div>    
        
    </div>
      
);
}
export default Home;