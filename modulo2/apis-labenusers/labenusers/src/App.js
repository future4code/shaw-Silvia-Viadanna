import React from "react";
import Cadastro from "./components/Cadastro";
import Usuarios from "./components/Usuarios";


export default class App extends  React.Component {

  state={
    telaAtual:"cadastro"

  } 
  
  escolheTela=()=>{

switch(this.state.telaAtual) {

case "cadastro":
return     <Cadastro irUsuarios={this.irUsuarios} />

case "usuarios":
  return  <Usuarios irCadastro={this.irCadastro}/>

  default:
    return     <Cadastro/>

 }
}

irCadastro=()=>{
  this.setState({ telaAtual:"cadastro"})
}

irUsuarios=()=>{
  this.setState({ telaAtual:"usuarios"})
}


render() {
  return (
    <div>
    {this.escolheTela()}
    
    </div>
  );
}
}

