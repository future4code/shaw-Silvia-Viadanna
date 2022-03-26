import React from "react";

class App extends React.Component {
  state = {
    
    pessoas: [
      {
        nome: "",
        email: "",
      },
      
    ],
    
    valorInputPessoa: "",
    valorInputEmail: ""
  };

  adicionaPessoa = () => {
    
    const novaPessoa = {
      
      nome: this.state.valorInputPessoa,
      
      email: this.state.valorInputEmail
    };

    
    const novoPessoas = [novaPessoa,...this.state.pessoas];

   
    this.setState({ pessoas: novoPessoas,
      valorInputPessoa: "",
      valorInputEmail:""
     });
  };

  onChangeInputPessoa = (event) => {
    
    
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputEmail = (event) => {
    

    
    this.setState({ valorInputEmail: event.target.value });
  };

  render() {
    
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
         <strong> {pessoa.nome} : </strong>{pessoa.email}
        </p>
      );
    });

    return (
      <div>
        <h1>WhatsLAB</h1>
        <div>
          <input 
           size={10}
            value={this.state.valorInputPessoa}
            
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuario"}
          />
          <input 
            size={50}
            
            value={this.state.valorInputEmail}
            
            onChange={this.onChangeInputEmail}
            placeholder={"Mensagem"}
          />
          <button  onClick={this.adicionaPessoa}>Enviar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default App;

