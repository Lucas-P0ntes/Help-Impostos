import React from 'react';
import useStyles from './styles';

function Home(){
    const classes = useStyles();
    return( 
    
    <div className={classes.root}> 
    <div className={classes.div}>


       <div  style={{ width: "50%",
    height: 570,}}>
       <img src="https://st.depositphotos.com/2197450/4021/v/600/depositphotos_40219895-stock-illustration-map-of-brazil-where-sao.jpg"/>
       </div>
       <div>
          <h1> São Paulo </h1>
          <h3>Posição 7º em carga tributária com 

7,32% de alicota </h3>
          <h3> 
          São Paulo

7,32%
          Agenda Tributária.
Taxa de Residuos (TRSS)
Declaração de Instituições Financeiras (DIF)
Cadastro de Contribuintes Mobiliários (CCM)
Declaração para Índice de Participação dos Municípios (DIPAM)
Imposto Predial e Territorial Urbano (IPTU)
Imposto sobre Transmissão de Bens Imóveis (ITBI)


</h3>

        <div>
           
        </div>
       </div>
        </div>      
        
    </div>
      
);
}
export default Home;