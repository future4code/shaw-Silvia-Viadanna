import React from "react";
import CriarLista from "./components/CriarLista";
import BuscaListas from "./components/BuscaListas";



export default class App extends  React.Component {

  state={
    telaAtual:"buscaLista"

  } 

  escolheTela=()=>{

switch(this.state.telaAtual) {

case "buscaLista":
return     <BuscaListas/>
  case "criaLista":
return  <CriarLista/>


  default:
    return     <CriarLista/>

 }
}

mudaTela= (nometela)=>{
  this.setState({ telaAtual:nometela})
}



render() {
  return (
    <div>
    
    <button onClick={() => this.mudaTela("buscaLista")}>Buscar PlayList</button>
    <button onClick={() => this.mudaTela("criaLista")}>Criar PlayList</button>

   {this.escolheTela()}

    </div>
  );
}
}
