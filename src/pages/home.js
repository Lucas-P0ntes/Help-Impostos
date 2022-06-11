import React from 'react';

import back from "../components/img/back.jpg";
import sobre from "../components/img/sobre.jpg";

import {Link} from 'react-router-dom';

import useStyles from './styles';
 
function Home(){
const classes = useStyles();
return( 
   
    <div className={classes.root}>  

        <div className={classes.homepage}>
            <div className={classes.homebox}>
                <h1 className={classes.titlehomepage}> O mais completo mapa interativo sobre impostos.</h1>
                    <h2 className={classes.texthomepage}>
                        Bem vindo ao Help Impostos, nosso propósito aqui e facilitar o entendimeto sobre os impostos no
                        Brasil, através  de um mapa interativo no qual qualquer um pode usar  trazendo acessibilidade 
                        para os novos e inesperintes empreendedores.
                    </h2>
                    <Link to="/Mapa" className={classes.button} > Ir para o Mapa interativo</Link>
            </div>
            <img src={back}alt="" className={classes.imghome}/>
        </div>

        <div className={classes.box}>
            <img src={sobre}alt=""  HEIGHT="400px"  className={classes.img} />
            <div className={classes.sobre} >
                 <h1 className={classes.titlehomepage}>Sobre Nós</h1>
                    <h2 className={classes.texthomepage} >
                     Atualmemte somos um dos paises que mais temos tributação nas empresas no mundo 
                     por conseguencia disso grande parte de nossas empresas acabam falindo em menos de 5 anos.
                     Nós indentificando esse problema resolvemos idealizar um projeto para levar informação as 
                     para esses empreendedores , buscando informar sobre os impostos mas comuns para
                     como se orientar de como lidar ...                 
                    </h2>
                 <Link to="/SobreNós" className={classes.button2} >Continuar  {">>"}</Link>
            </div>
        </div>

        <div className={classes.box2}>
            <div className={classes.sobre} >
                <h1 className={classes.titlehomepage} >Como abrir uma Empresa</h1>
                    <h2 className={classes.texthomepage} >
                     Você ainda não tem uma empresa ? Não sabe como começar ? Não sabe o que precisa?
                     temos aqui um resumo das principais documentações que vai precisar inicilmete.              
                    </h2>
                    <Link to="/AbrirEmpresa" className={classes.button2} >Continuar  {">>"}</Link>
            </div>
            <img src={"https://thumbs.dreamstime.com/b/isometric-teamwork-partnership-leadership-flat-design-vector-illustration-team-people-work-table-four-parts-puzzle-173726768.jpg"}alt="" HEIGHT="400px" className={classes.img}/>
        </div>
     
    </div>
      
    );
}
export default Home;