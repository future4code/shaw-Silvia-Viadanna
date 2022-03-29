import React from "react";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";


class App extends React.Component {
  state = {
pagina:1,
  };

  proximaEtapa=()=>{
    this.setState({pagina:this.state.pagina+1})
  }

  render(){
    let paginaAtual;

switch(this.state.pagina){
  case 1:
    paginaAtual=<Etapa1/>;
  break ; 
  case 2:
    paginaAtual=<Etapa2/>;
  break;
   case 3:
    paginaAtual=<Etapa3/>;
  break;
  default:
   paginaAtual=<Final/>;

}

    return (
    <>
    <center>
      {paginaAtual}
      <div>
        {this.state.pagina <=3 &&
        <button onClick={this.proximaEtapa} >Proxima Etapa </button>
        
        }
        </div>
        </center>
        </>
  );
}
}

export default App;