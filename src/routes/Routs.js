import React from "react";
import Home from "../pages/home";
import SobreNós from "../pages/SobreNós/SobreNós"
import AbrirEmpresa from "../pages/AbriEmpresa/AbrirEmpresa"
import Mapa from "../pages/mapa/Mapa"
import NavBar from "../components/NavBar/Navbar"
import Brar from "../components/Bar/bar"
import {
  BrowserRouter , 
  Switch,
  Route,
  
} from "react-router-dom";
function Routs(){
  return (
    <BrowserRouter> 
       <NavBar/>
      <Switch>
      <Route path="/"  component={Home} exact />
        <Route path="/home"  component={Home}  />
        <Route path="/AbrirEmpresa" component={AbrirEmpresa}  />
        <Route path="/Mapa" component={Mapa}  />
        <Route path="/SobreNós" component={SobreNós}  />
      </Switch>
      <Brar/>
      </BrowserRouter>
   
  );
};
export default Routs;